import axios from "axios";

export default class UserService {

    url = "http://localhost:8080/api/v1/users/";

    likePost(postId, userId) {
        return axios.post(this.url + "like/" + postId + "/" + userId);
    }

    removeLikePost(postId, userId) {
        return axios.post(this.url + "removeLike/" + postId + "/" + userId);
    }
}