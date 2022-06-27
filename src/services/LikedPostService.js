import axios from "axios"

export default class LikedPostService {
    url = "https://blog-app-spring-project.herokuapp.com/api/v1/likedPosts/"

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

    getPostLikeCount(postId) {
        return axios.get(this.url + "getPostLikeCount/" + postId);
    }
}