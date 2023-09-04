import axios from "axios";
const fetchData = async () => {
    let data = await axios.get(import.meta.env.VITE_REACT_APP_PATH_SERVER)
    return data;
}
export default fetchData