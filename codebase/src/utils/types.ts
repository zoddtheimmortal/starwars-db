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
						referencedRelation: "faction";
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
				Relationships: [];
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
						referencedRelation: "planet";
						referencedColumns: ["name"];
					}
				];
			};
			faction: {
				Row: {
					advancement_level: string | null;
					base_planet: string | null;
					doi: string;
					droid_count: number | null;
					leader: string | null;
					name: string;
					weapon_count: number | null;
				};
				Insert: {
					advancement_level?: string | null;
					base_planet?: string | null;
					doi: string;
					droid_count?: number | null;
					leader?: string | null;
					name: string;
					weapon_count?: number | null;
				};
				Update: {
					advancement_level?: string | null;
					base_planet?: string | null;
					doi?: string;
					droid_count?: number | null;
					leader?: string | null;
					name?: string;
					weapon_count?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "public_faction_base_planet_fkey";
						columns: ["base_planet"];
						isOneToOne: false;
						referencedRelation: "planet";
						referencedColumns: ["name"];
					}
				];
			};
			people: {
				Row: {
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
				};
				Insert: {
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
						referencedRelation: "planet";
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
					galaxy: string | null;
					gravity: number;
					name: string;
					orbital_speed: number | null;
					population: number | null;
					terrain: string | null;
				};
				Insert: {
					climate?: string | null;
					galaxy?: string | null;
					gravity: number;
					name: string;
					orbital_speed?: number | null;
					population?: number | null;
					terrain?: string | null;
				};
				Update: {
					climate?: string | null;
					galaxy?: string | null;
					gravity?: number;
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
					language: string;
					species: string;
				};
				Insert: {
					language: string;
					species: string;
				};
				Update: {
					language?: string;
					species?: string;
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
					Crew: string | null;
					Fuel_capacity: number | null;
					Fuel_type: string | null;
					Manufacturer: string | null;
					Max_speed: number | null;
					name: string | null;
					Owned_by: string | null;
					Payload: string | null;
					Price: number | null;
					VIN: number;
				};
				Insert: {
					Crew?: string | null;
					Fuel_capacity?: number | null;
					Fuel_type?: string | null;
					Manufacturer?: string | null;
					Max_speed?: number | null;
					name?: string | null;
					Owned_by?: string | null;
					Payload?: string | null;
					Price?: number | null;
					VIN?: number;
				};
				Update: {
					Crew?: string | null;
					Fuel_capacity?: number | null;
					Fuel_type?: string | null;
					Manufacturer?: string | null;
					Max_speed?: number | null;
					name?: string | null;
					Owned_by?: string | null;
					Payload?: string | null;
					Price?: number | null;
					VIN?: number;
				};
				Relationships: [];
			};
			weapon: {
				Row: {
					damage: number | null;
					manufacturer: string | null;
					model_no: string;
					name: string;
					range: number | null;
					type: string | null;
				};
				Insert: {
					damage?: number | null;
					manufacturer?: string | null;
					model_no: string;
					name: string;
					range?: number | null;
					type?: string | null;
				};
				Update: {
					damage?: number | null;
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
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
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
