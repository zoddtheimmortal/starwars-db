export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			alliances: {
				Row: {
					faction1: string;
					faction2: string;
				};
				Insert: {
					faction1: string;
					faction2: string;
				};
				Update: {
					faction1?: string;
					faction2?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_alliances_faction1_fkey";
						columns: ["faction1"];
						isOneToOne: false;
						referencedRelation: "distinct_faction";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_alliances_faction1_fkey";
						columns: ["faction1"];
						isOneToOne: false;
						referencedRelation: "faction";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_alliances_faction2_fkey";
						columns: ["faction2"];
						isOneToOne: false;
						referencedRelation: "distinct_faction";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_alliances_faction2_fkey";
						columns: ["faction2"];
						isOneToOne: false;
						referencedRelation: "faction";
						referencedColumns: ["name"];
					}
				];
			};
			droids: {
				Row: {
					Class: string | null;
					Height: number | null;
					Lifespan: number | null;
					Manufacturer: string | null;
					Model_no: number;
					Name: string | null;
					Owned_by: string | null;
					Weight: number | null;
				};
				Insert: {
					Class?: string | null;
					Height?: number | null;
					Lifespan?: number | null;
					Manufacturer?: string | null;
					Model_no?: number;
					Name?: string | null;
					Owned_by?: string | null;
					Weight?: number | null;
				};
				Update: {
					Class?: string | null;
					Height?: number | null;
					Lifespan?: number | null;
					Manufacturer?: string | null;
					Model_no?: number;
					Name?: string | null;
					Owned_by?: string | null;
					Weight?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_droids_Owned_by_fkey";
						columns: ["Owned_by"];
						isOneToOne: false;
						referencedRelation: "distinct_faction";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_droids_Owned_by_fkey";
						columns: ["Owned_by"];
						isOneToOne: false;
						referencedRelation: "faction";
						referencedColumns: ["name"];
					}
				];
			};
			duel_weapon: {
				Row: {
					duel_timestamp: string;
					weapon_modelno: string;
				};
				Insert: {
					duel_timestamp: string;
					weapon_modelno: string;
				};
				Update: {
					duel_timestamp?: string;
					weapon_modelno?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_duel_weapon_weapon_modelno_fkey";
						columns: ["weapon_modelno"];
						isOneToOne: false;
						referencedRelation: "weapon";
						referencedColumns: ["model_no"];
					}
				];
			};
			duels: {
				Row: {
					Battleground: string;
					Duration: number | null;
					Loser: string;
					No_of_duels: number | null;
					Timestamp: string;
					Winner: string;
				};
				Insert: {
					Battleground: string;
					Duration?: number | null;
					Loser: string;
					No_of_duels?: number | null;
					Timestamp: string;
					Winner: string;
				};
				Update: {
					Battleground?: string;
					Duration?: number | null;
					Loser?: string;
					No_of_duels?: number | null;
					Timestamp?: string;
					Winner?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_duels_Battleground_fkey";
						columns: ["Battleground"];
						isOneToOne: false;
						referencedRelation: "distinct_planet";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_duels_Battleground_fkey";
						columns: ["Battleground"];
						isOneToOne: false;
						referencedRelation: "planet";
						referencedColumns: ["name"];
					}
				];
			};
			faction: {
				Row: {
					advancement_level: string | null;
					base_planet: string | null;
					description: string | null;
					doi: string;
					droid_count: number | null;
					image: string | null;
					leader: string | null;
					name: string;
					weapon_count: number | null;
					fulltext_faction: string | null;
				};
				Insert: {
					advancement_level?: string | null;
					base_planet?: string | null;
					description?: string | null;
					doi: string;
					droid_count?: number | null;
					image?: string | null;
					leader?: string | null;
					name: string;
					weapon_count?: number | null;
				};
				Update: {
					advancement_level?: string | null;
					base_planet?: string | null;
					description?: string | null;
					doi?: string;
					droid_count?: number | null;
					image?: string | null;
					leader?: string | null;
					name?: string;
					weapon_count?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_faction_base_planet_fkey";
						columns: ["base_planet"];
						isOneToOne: false;
						referencedRelation: "distinct_planet";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_faction_base_planet_fkey";
						columns: ["base_planet"];
						isOneToOne: false;
						referencedRelation: "planet";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_faction_leader_fkey";
						columns: ["leader"];
						isOneToOne: false;
						referencedRelation: "people";
						referencedColumns: ["name"];
					}
				];
			};
			people: {
				Row: {
					age: number | null;
					birth_planet: string | null;
					birth_year: number | null;
					description: string | null;
					faction: string | null;
					gender: string | null;
					height: number | null;
					image: string | null;
					name: string;
					personality: string | null;
					pin: number;
					species: string | null;
					weight: number | null;
					fulltext_people: string | null;
				};
				Insert: {
					age?: number | null;
					birth_planet?: string | null;
					birth_year?: number | null;
					description?: string | null;
					faction?: string | null;
					gender?: string | null;
					height?: number | null;
					image?: string | null;
					name: string;
					personality?: string | null;
					pin: number;
					species?: string | null;
					weight?: number | null;
				};
				Update: {
					age?: number | null;
					birth_planet?: string | null;
					birth_year?: number | null;
					description?: string | null;
					faction?: string | null;
					gender?: string | null;
					height?: number | null;
					image?: string | null;
					name?: string;
					personality?: string | null;
					pin?: number;
					species?: string | null;
					weight?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_people_birth_planet_fkey";
						columns: ["birth_planet"];
						isOneToOne: false;
						referencedRelation: "distinct_planet";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_people_birth_planet_fkey";
						columns: ["birth_planet"];
						isOneToOne: false;
						referencedRelation: "planet";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_people_faction_fkey";
						columns: ["faction"];
						isOneToOne: false;
						referencedRelation: "distinct_faction";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_people_faction_fkey";
						columns: ["faction"];
						isOneToOne: false;
						referencedRelation: "faction";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_people_species_fkey";
						columns: ["species"];
						isOneToOne: false;
						referencedRelation: "species";
						referencedColumns: ["name"];
					}
				];
			};
			planet: {
				Row: {
					climate: string | null;
					description: string | null;
					galaxy: string | null;
					gravity: number;
					image: string | null;
					name: string;
					orbital_speed: number | null;
					population: number | null;
					terrain: string | null;
					fulltext_planet: string | null;
				};
				Insert: {
					climate?: string | null;
					description?: string | null;
					galaxy?: string | null;
					gravity: number;
					image?: string | null;
					name: string;
					orbital_speed?: number | null;
					population?: number | null;
					terrain?: string | null;
				};
				Update: {
					climate?: string | null;
					description?: string | null;
					galaxy?: string | null;
					gravity?: number;
					image?: string | null;
					name?: string;
					orbital_speed?: number | null;
					population?: number | null;
					terrain?: string | null;
				};
				Relationships: [];
			};
			planet_landforms: {
				Row: {
					landform: string;
					planet: string;
				};
				Insert: {
					landform: string;
					planet: string;
				};
				Update: {
					landform?: string;
					planet?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_planet_landforms_planet_fkey";
						columns: ["planet"];
						isOneToOne: false;
						referencedRelation: "distinct_planet";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "public_planet_landforms_planet_fkey";
						columns: ["planet"];
						isOneToOne: false;
						referencedRelation: "planet";
						referencedColumns: ["name"];
					}
				];
			};
			species: {
				Row: {
					eye_colour: string | null;
					hair_colour: string | null;
					lifespan: number | null;
					name: string;
					skin_colour: string | null;
				};
				Insert: {
					eye_colour?: string | null;
					hair_colour?: string | null;
					lifespan?: number | null;
					name: string;
					skin_colour?: string | null;
				};
				Update: {
					eye_colour?: string | null;
					hair_colour?: string | null;
					lifespan?: number | null;
					name?: string;
					skin_colour?: string | null;
				};
				Relationships: [];
			};
			species_language: {
				Row: {
					species: string;
					specieslanguage: string;
				};
				Insert: {
					species: string;
					specieslanguage: string;
				};
				Update: {
					species?: string;
					specieslanguage?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_species_language_species_fkey";
						columns: ["species"];
						isOneToOne: false;
						referencedRelation: "species";
						referencedColumns: ["name"];
					}
				];
			};
			starship: {
				Row: {
					crew: string | null;
					description: string | null;
					fuel_capacity: number | null;
					fuel_type: string | null;
					image: string | null;
					manufacturer: string | null;
					max_speed: number | null;
					name: string | null;
					owned_by: string | null;
					payload: string | null;
					price: number | null;
					vin: number;
					fulltext_starship: string | null;
				};
				Insert: {
					crew?: string | null;
					description?: string | null;
					fuel_capacity?: number | null;
					fuel_type?: string | null;
					image?: string | null;
					manufacturer?: string | null;
					max_speed?: number | null;
					name?: string | null;
					owned_by?: string | null;
					payload?: string | null;
					price?: number | null;
					vin?: number;
				};
				Update: {
					crew?: string | null;
					description?: string | null;
					fuel_capacity?: number | null;
					fuel_type?: string | null;
					image?: string | null;
					manufacturer?: string | null;
					max_speed?: number | null;
					name?: string | null;
					owned_by?: string | null;
					payload?: string | null;
					price?: number | null;
					vin?: number;
				};
				Relationships: [];
			};
			weapon: {
				Row: {
					damage: number | null;
					description: string | null;
					image: string | null;
					manufacturer: string | null;
					model_no: string;
					name: string;
					range: number | null;
					type: string | null;
				};
				Insert: {
					damage?: number | null;
					description?: string | null;
					image?: string | null;
					manufacturer?: string | null;
					model_no: string;
					name: string;
					range?: number | null;
					type?: string | null;
				};
				Update: {
					damage?: number | null;
					description?: string | null;
					image?: string | null;
					manufacturer?: string | null;
					model_no?: string;
					name?: string;
					range?: number | null;
					type?: string | null;
				};
				Relationships: [];
			};
			weapon_people: {
				Row: {
					person_pin: number;
					weapon_model: string;
				};
				Insert: {
					person_pin: number;
					weapon_model: string;
				};
				Update: {
					person_pin?: number;
					weapon_model?: string;
				};
				Relationships: [
					{
						foreignKeyName: "fk_weapon";
						columns: ["person_pin"];
						isOneToOne: false;
						referencedRelation: "people";
						referencedColumns: ["pin"];
					}
				];
			};
		};
		Views: {
			distinct_crew: {
				Row: {
					crew: string | null;
				};
				Relationships: [];
			};
			distinct_faction: {
				Row: {
					name: string | null;
				};
				Relationships: [];
			};
			distinct_fuel: {
				Row: {
					fuel_type: string | null;
				};
				Relationships: [];
			};
			distinct_galaxy: {
				Row: {
					galaxy: string | null;
				};
				Relationships: [];
			};
			distinct_gender: {
				Row: {
					gender: string | null;
				};
				Relationships: [];
			};
			distinct_language: {
				Row: {
					specieslanguage: string | null;
				};
				Relationships: [];
			};
			distinct_owner: {
				Row: {
					manufacturer: string | null;
				};
				Relationships: [];
			};
			distinct_payload: {
				Row: {
					payload: string | null;
				};
				Relationships: [];
			};
			distinct_personality: {
				Row: {
					personality: string | null;
				};
				Relationships: [];
			};
			distinct_planet: {
				Row: {
					name: string | null;
				};
				Relationships: [];
			};
		};
		Functions: {
			avg_height_people_on_planet: {
				Args: {
					planet_name: string;
				};
				Returns: number;
			};
			avg_weight: {
				Args: Record<PropertyKey, never>;
				Returns: number;
			};
			count_people_on_planet: {
				Args: {
					planet_name: string;
				};
				Returns: number;
			};
			filter_and_join:
				| {
						Args: {
							tables: Json;
							join_cond: Json;
							filters: Json;
						};
						Returns: Json[];
				  }
				| {
						Args: {
							tables_and_filters: Json;
							join_cond: Json;
						};
						Returns: Json[];
				  };
			filter_and_join_by_json:
				| {
						Args: {
							filter_and_join: Json;
							join_columns: Json;
						};
						Returns: Json[];
				  }
				| {
						Args: {
							table1_name: string;
							table1_join_column: string;
							table2_name: string;
							table2_join_column: string;
							filter: Json;
						};
						Returns: Json[];
				  };
			filter_by_json: {
				Args: {
					table_name: string;
					filter: Json;
				};
				Returns: Json[];
			};
			fulltext_faction: {
				Args: {
					"": unknown;
				};
				Returns: string;
			};
			fulltext_people: {
				Args: {
					"": unknown;
				};
				Returns: string;
			};
			fulltext_planet: {
				Args: {
					"": unknown;
				};
				Returns: string;
			};
			fulltext_starship: {
				Args: {
					"": unknown;
				};
				Returns: string;
			};
			get_avg_orbital_speed: {
				Args: Record<PropertyKey, never>;
				Returns: number;
			};
			get_birth_year: {
				Args: {
					births: number;
				};
				Returns: {
					name: string;
					birth_year: number;
				}[];
			};
			get_landform_names: {
				Args: Record<PropertyKey, never>;
				Returns: string[];
			};
			get_lightweight_people: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					weight: number;
				}[];
			};
			get_max_height: {
				Args: Record<PropertyKey, never>;
				Returns: number;
			};
			get_min_populated_planet: {
				Args: Record<PropertyKey, never>;
				Returns: string;
			};
			get_obese_people: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					weight: number;
				}[];
			};
			get_oldest_person: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					birth_year: number;
				}[];
			};
			get_people: {
				Args: Record<PropertyKey, never>;
				Returns: {
					age: number | null;
					birth_planet: string | null;
					birth_year: number | null;
					description: string | null;
					faction: string | null;
					gender: string | null;
					height: number | null;
					image: string | null;
					name: string;
					personality: string | null;
					pin: number;
					species: string | null;
					weight: number | null;
				}[];
			};
			get_people_birth_year: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					birth_year: number;
				}[];
			};
			get_people_birth_year_on_planet: {
				Args: {
					planet_name: string;
				};
				Returns: {
					person_name: string;
					birth_year: number;
				}[];
			};
			get_people_by_birth_planet: {
				Args: {
					planet_name: string;
				};
				Returns: {
					name: string;
					birth_planet: string;
				}[];
			};
			get_people_by_faction: {
				Args: {
					pact: string;
				};
				Returns: {
					name: string;
					faction: string;
				}[];
			};
			get_people_by_faction_and_species: {
				Args: {
					faction_name: string;
					species_name: string;
				};
				Returns: {
					name: string;
					faction: string;
					species: string;
				}[];
			};
			get_people_by_gender: {
				Args: {
					gender_filter: string;
				};
				Returns: {
					name: string;
					gender: string;
				}[];
			};
			get_people_by_height: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					height: number;
				}[];
			};
			get_people_by_species: {
				Args: {
					species_name: string;
				};
				Returns: {
					name: string;
				}[];
			};
			get_people_on_planet: {
				Args: {
					planet_name: string;
				};
				Returns: {
					person_name: string;
				}[];
			};
			get_planets: {
				Args: Record<PropertyKey, never>;
				Returns: {
					climate: string | null;
					description: string | null;
					galaxy: string | null;
					gravity: number;
					image: string | null;
					name: string;
					orbital_speed: number | null;
					population: number | null;
					terrain: string | null;
				}[];
			};
			get_species_count: {
				Args: Record<PropertyKey, never>;
				Returns: {
					species_name: string;
					total_count: number;
				}[];
			};
			get_wookie_people: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					species: string;
				}[];
			};
			get_youngest_person: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					birth_year: number;
				}[];
			};
			group_people_by_species: {
				Args: Record<PropertyKey, never>;
				Returns: {
					species: string;
					count: number;
				}[];
			};
			join_multiple_tables:
				| {
						Args: {
							join_operations: Json[];
						};
						Returns: Json[];
				  }
				| {
						Args: {
							table_names: string[];
							join_columns: string[];
						};
						Returns: Json[];
				  };
			join_tables:
				| {
						Args: {
							table1_name: string;
							table1_join_column: string;
							table2_name: string;
							table2_join_column: string;
						};
						Returns: Json[];
				  }
				| {
						Args: {
							tables: string[];
							join_cols: string[];
						};
						Returns: Json[];
				  }
				| {
						Args: {
							tables: string[];
							join_conditions: Json[];
						};
						Returns: Json[];
				  }
				| {
						Args: {
							tables: Json;
							join_cond: Json;
						};
						Returns: Json[];
				  };
			list_people_faction: {
				Args: {
					person_name: string;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
					faction_doi: string;
					faction_advancement_level: string;
					faction_droid_count: number;
					faction_weapon_count: number;
					faction_base_planet: string;
					faction_leader: string;
					faction_description: string;
					faction_image: string;
				}[];
			};
			list_people_planet: {
				Args: {
					person_name: string;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
					planet_name: string;
					gravity: number;
					population: number;
					galaxy: string;
					orbital_speed: number;
					climate: string;
					terrain: string;
					planet_description: string;
					planet_image: string;
				}[];
			};
			list_people_species: {
				Args: {
					person_name: string;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
					species_lifespan: number;
					species_eye_colour: string;
					species_hair_colour: string;
					species_skin_colour: string;
				}[];
			};
			order_planets_by_terrain: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					terrain: string;
				}[];
			};
			search_character_by_gender: {
				Args: {
					gender_name: string;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
				}[];
			};
			search_character_by_height_range: {
				Args: {
					min_height: number;
					max_height: number;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
				}[];
			};
			search_character_by_name: {
				Args: {
					character_name: string;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
				}[];
			};
			search_character_by_name_and_gender: {
				Args: {
					character_name: string;
					gender_name: string;
				};
				Returns: {
					pin: number;
					name: string;
					gender: string;
					height: number;
					weight: number;
					personality: string;
					species: string;
					faction: string;
					birth_planet: string;
					birth_year: number;
					image: string;
					description: string;
				}[];
			};
			sort_table: {
				Args: {
					"": Json;
				};
				Returns: undefined;
			};
			sort_table_data: {
				Args: {
					data: Json;
				};
				Returns: {
					result: string;
				}[];
			};
			update_character_age: {
				Args: {
					name: string;
					birth_year: number;
				};
				Returns: undefined;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
			PublicSchema["Views"])
	? (PublicSchema["Tables"] &
			PublicSchema["Views"])[PublicTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
	? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
	? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
	? PublicSchema["Enums"][PublicEnumNameOrOptions]
	: never;
