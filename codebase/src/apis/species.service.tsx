import { supabase } from "../utils/supabase";

const getLanguages = async () => {
	const { data, error } = await supabase
		.from("distinct_language")
		.select("*");
	return data?.map((item) => item.specieslanguage);
};

const getSpeciesNames = async () => {
	const { data, error } = await supabase.from("species").select("name");
	return data?.map((item) => item.name);
};

const SpeciesService = {
	getLanguages,
	getSpeciesNames,
};

export default SpeciesService;
