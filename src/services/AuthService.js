import axios from "axios";

export default class AuthService {

    url = "http://localhost:8080/api/v1/auth/";

    login(userLoginDto){
        return axios.post("http://localhost:8080/login", userLoginDto);
    }

    register(user) {
        return axios.post(this.url + "register", user);
    }
}