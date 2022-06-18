import axios from "axios";

export default class AuthService {

    url = "http://localhost:8080/api/v1/auth/";

    register(user) {
        return axios.post(this.url + "register", user);
    }
}