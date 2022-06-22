import axios from "axios"

export default class LikedPostService {
    url = "http://localhost:8080/api/v1/likedPosts/"

    getUserLikedPost(userId, postId, token) {
        return axios.get(this.url + "getUserLikedPost/" + userId + "/" + postId, {
            headers:{
                "Authorization": token
            }
        });
    }

    getUsersAllLikedPosts(userId, pageNo=1, token) {
        return axios.get(this.url + "getUsersLikedPost/" + userId + "/?pageNo=" + pageNo + "&" + "pageSize=5",  {
            headers:{
                "Authorization": token
            }
        })
    }

    getNumberOfUsersLikedPosts(userId, token){
        return axios.get(this.url + "getNumberOfUsersLikedPosts/" + userId, {
            headers:{
                "Authorization": token
            }
        });
    }
}