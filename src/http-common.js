import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:9008",
    headers:{
        "Content-type": "application/json"
    }
})