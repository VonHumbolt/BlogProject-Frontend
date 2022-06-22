import axios from "axios";

export default class PostService{
    
    url = "http://localhost:8080/api/v1/posts/";

    getall() {
        return axios.get(this.url + "getall");
    }
    
    getSortedDate(pageNo=1) {
        return axios.get(this.url + "sortedDate/?pageNo=" + pageNo + "&" + "pageSize=" + 5)
    }

    getMostLiked() {
        return axios.get(this.url + "sortedLikeCount")
    }

    getByAuthorId(authorId, pageNo=1) {
        return axios.get(this.url + "getByAuthorId/" + authorId + "/?pageNo=" + pageNo + "&" + "pageSize=" + 5);
    }

    getByPostId(postId) {
        return axios.get(this.url + postId);
    }

    filterByTitle(title) {
        return axios.get(this.url + "getByTitle/" + title);
    }

    filterByDescription(description) {
        return axios.get(this.url + "getByDescription/" + description);
    }

    filterByContent(content) {
        return axios.get(this.url + "getByContent/" + content);
    }

    add(userId, post, token) {
   
        return axios.post(this.url + "add/" + userId, post, {
            headers:{
                "Authorization": token
            }
        });
    }

    delete(postId, token) {
        return axios.post(this.url + "delete/" + postId, null, {
            headers: {
                "Authorization": token
            }
        });
    }

    edit(postId, userId, editedPost, token) {
        return axios.post(this.url + "edit/" + postId + "/" + userId, editedPost, {
            headers: {
                "Authorization": token
            }
        });
    }

    getNumberOfPosts(){
        return axios.get(this.url + "getNumberOfPosts");
    }

    getAuthorPostCount(authorId){
        return axios.get(this.url + "getAuthorPostCount/" + authorId);
    }
}