import { supabase } from "../utils/supabase";

const getLanguages = async () => {
	const { data, error } = await supabase
		.from("distinct_language")
		.select("*");
	return data?.map((item) => item.specieslanguage);
};

const SpeciesService = {
	getLanguages,
};

export default SpeciesService;
