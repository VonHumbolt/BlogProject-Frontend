import axios from "axios";

export default class AuthorService{

    url =  "https://blog-app-spring-project.herokuapp.com/api/v1/authors/";

    getall() {
        return axios.get(this.url + "getall");
    }

    getById(authorId) {
        return axios.get(this.url + "getById/" + authorId);
    }

}