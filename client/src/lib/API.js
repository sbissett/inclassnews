import axios from "axios";


const API = {

    getArticles: function () {
        return axios.get("/api/articles");

    }

};

export default API;

