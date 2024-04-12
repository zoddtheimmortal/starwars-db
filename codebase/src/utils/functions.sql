-- filterByJson function
CREATE OR REPLACE FUNCTION filter_by_json(table_name text, filter json)
RETURNS SETOF json AS $$
DECLARE
    key text;
    value json;
    op text;
    val text;
    where_clause text = '';
    query text;
BEGIN
    FOR key, value IN SELECT * FROM json_each(filter)
    LOOP
        op := value ->> 'op';
        val := value ->> 'val';
        where_clause := where_clause || format('%I %s %L AND ', key, op, val);
    END LOOP;

    where_clause := substring(where_clause from 1 for length(where_clause) - 5); -- Remove the trailing ' AND '

    query := format('SELECT row_to_json(t) FROM (SELECT * FROM %I WHERE %s) t', table_name, where_clause);

    RETURN QUERY EXECUTE query;
END;
$$ LANGUAGE plpgsql;

--working join
CREATE OR REPLACE FUNCTION join_tables(
    table1_name text, 
    table1_join_column text, 
    table2_name text, 
    table2_join_column text
)
RETURNS SETOF json AS $$
DECLARE
    query text;
BEGIN
    query := format('SELECT row_to_json(t) FROM (SELECT * FROM %I JOIN %I ON %I.%I = %I.%I) t', 
                    table1_name, 
                    table2_name, 
                    table1_name, 
                    table1_join_column, 
                    table2_name, 
                    table2_join_column);
    RETURN QUERY EXECUTE query;
END;
$$ LANGUAGE plpgsql;

--working join with multiple tables
CREATE OR REPLACE FUNCTION join_tables(
    tables json, 
    join_cond json
)
RETURNS SETOF json AS $$
DECLARE
    query text;
    join_conditions text = '';
    i integer;
BEGIN
    FOR i IN 0..json_array_length(join_cond) - 1 LOOP
        join_conditions := join_conditions || format('%s.%s = %s.%s AND ', 
            (join_cond -> i -> 'table1')::text, 
            (join_cond -> i -> 'col1')::text, 
            (join_cond -> i -> 'table2')::text, 
            (join_cond -> i -> 'col2')::text);
    END LOOP;

    join_conditions := substring(join_conditions from 1 for length(join_conditions) - 4); -- remove the last ' AND '

    query := format('SELECT row_to_json(t) FROM (SELECT * FROM %s WHERE %s) t', 
                    array_to_string(array(select json_array_elements_text(tables)::text), ', '), 
                    join_conditions);

    RETURN QUERY EXECUTE query;
END;
$$ LANGUAGE plpgsql;

--working join with multiple tables and filters
--make sure last table is the one u want to preserve the cols for
CREATE OR REPLACE FUNCTION filter_and_join(
    tables json, 
    join_cond json,
    filters json
)
RETURNS SETOF json AS $$
DECLARE
    query text;
    join_conditions text = '';
    where_clause text = '';
    i integer;
    key text;
    value json;
    op text;
    val text;
BEGIN
    FOR i IN 0..json_array_length(join_cond) - 1 LOOP
        join_conditions := join_conditions || format('%s.%s = %s.%s AND ', 
            (join_cond -> i -> 'table1')::text, 
            (join_cond -> i -> 'col1')::text, 
            (join_cond -> i -> 'table2')::text, 
            (join_cond -> i -> 'col2')::text);
    END LOOP;

    join_conditions := substring(join_conditions from 1 for length(join_conditions) - 4); -- remove the last ' AND '

    FOR key, value IN SELECT * FROM json_each(filters)
    LOOP
        op := value ->> 'op';
        val := value ->> 'val';
        where_clause := where_clause || format('%I %s %L AND ', key, op, val);
    END LOOP;

    IF length(where_clause) > 0 THEN
        where_clause := substring(where_clause from 1 for length(where_clause) - 5); -- Remove the trailing ' AND '
    END IF;

    query := format('SELECT row_to_json(t) FROM (SELECT * FROM %s WHERE %s AND %s) t', 
                    array_to_string(array(select json_array_elements_text(tables)::text), ', '), 
                    join_conditions, 
                    where_clause);

    RETURN QUERY EXECUTE query;
END;
$$ LANGUAGE plpgsql;