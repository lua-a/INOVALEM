import axios from "axios";

const api = new axios.create({
    baseURL: "http://localhost:9000",
    method: "post"
})

export default api;