import axios from "axios";

export default class UserService {

    url = "http://localhost:8080/api/v1/users/";
    
    getUserByEmail(email){
        return axios.get(this.url + "getByEmail/" + email)
    }

    updateUser(userId, user, token) {
        return axios.post(this.url + "update/" + userId, user, {
            headers: {
                "Authorization": token
            }
        })
    }


    likePost(postId, userId, token) {
        return axios.post(this.url + "like/" + postId + "/" + userId, null, {
            headers: {
                "Authorization": token
            }
        });
    }

    removeLikePost(postId, userId, token) {
        return axios.post(this.url + "removeLike/" + postId + "/" + userId, null, {
            headers: {
                "Authorization": token
            }
        });
    }
}