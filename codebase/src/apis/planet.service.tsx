import { supabase } from "../utils/supabase";

const getGalaxy = async () => {
	const { data, error } = await supabase.from("distinct_galaxy").select("*");
	return data?.map((item) => item.galaxy);
};

const PlanetService = {
	getGalaxy,
};

export default PlanetService;
