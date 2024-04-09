-- simple dynamic filter function for jsonb columns
CREATE OR REPLACE FUNCTION filter_by_json(table_name text, filter json)
RETURNS SETOF json AS $$
DECLARE
    key text;
    value text;
    where_clause text = '';
    query text;
BEGIN
    FOR key, value IN SELECT * FROM json_each_text(filter)
    LOOP
        where_clause := where_clause || format('%I = %L AND ', key, value);
    END LOOP;

    where_clause := substring(where_clause from 1 for length(where_clause) - 5); -- Remove the trailing ' AND '

    query := format('SELECT row_to_json(t) FROM (SELECT * FROM %I WHERE %s) t', table_name, where_clause);

    RETURN QUERY EXECUTE query;
END;
$$ LANGUAGE plpgsql;

--dynamic filter with multiple conditions

--join and filter
CREATE OR REPLACE FUNCTION join_and_filter_tables(tables text[], join_columns text[], filters json[])
RETURNS SETOF json AS $$
DECLARE
    i integer;
    temp_table_name text;
    query text;
BEGIN
    -- Apply each filter to the corresponding table
    FOR i IN 1 .. array_length(tables, 1)
    LOOP
        temp_table_name := format('temp_filter%d', i);
        EXECUTE format('CREATE TEMP TABLE %I ON COMMIT DROP AS SELECT row_to_json(t) FROM (SELECT * FROM filter_by_json(%L, %L)) t', 
                       temp_table_name, tables[i], filters[i]::text);
    END LOOP;

    -- Construct the JOIN query
    query := 'SELECT row_to_json(t) FROM (SELECT * FROM temp_filter1';
    FOR i IN 2 .. array_length(tables, 1)
    LOOP
        temp_table_name := format('temp_filter%d', i);
        query := query || format(' JOIN %I ON temp_filter1.%I = %I.%I', temp_table_name, join_columns[i-1], temp_table_name, join_columns[i-1]);
    END LOOP;
    query := query || ') t';

    RETURN QUERY EXECUTE query;
END;
$$ LANGUAGE plpgsql;