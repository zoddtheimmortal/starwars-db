import { supabase } from "../utils/supabase";

const getGalaxy = async () => {
	const { data, error } = await supabase.from("distinct_galaxy").select("*");
	return data?.map((item) => item.galaxy);
};

const getPlanetNames = async () => {
	const { data, error } = await supabase.from("planet").select("name");
	return data?.map((item) => item.name);
};

const PlanetService = {
	getGalaxy,
	getPlanetNames,
};

export default PlanetService;
