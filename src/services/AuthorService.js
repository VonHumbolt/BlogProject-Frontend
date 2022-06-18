import axios from "axios";

export default class AuthorService{

    url =  "http://localhost:8080/api/v1/users/";

    getall() {
        return axios.get(this.url + "getall");
    }

    getById(authorId) {
        return axios.get(this.url + "getById/" + authorId);
    }
}