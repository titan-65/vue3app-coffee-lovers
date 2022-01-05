import { ref, reactive } from "vue";
import { supabase } from "../../supabase";
const getData = () => {
    const coffees = ref([]);
    const loading = ref(false);
    const errorMessage = ref(null);

    const getCoffees = async () => {
      loading.value = true;
      const { data, error } = await supabase.from("coffee_lovers").select("*");
      console.log(data);
        if (error) throw error;
      coffees.value = data;
    };

    return {
        coffees,
        loading,
        errorMessage,
        getCoffees
    }

 }

 export default getData

