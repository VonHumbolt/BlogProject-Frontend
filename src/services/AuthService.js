import axios from "axios";

export default class AuthService {

    url = "https://blog-app-spring-project.herokuapp.com/api/v1/auth/";

    login(userLoginDto){
        return axios.post("https://blog-app-spring-project.herokuapp.com/login", userLoginDto);
    }

    register(user) {
        return axios.post(this.url + "register", user);
    }
}