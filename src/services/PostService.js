import axios from "axios";

export default class PostService{
    
    url = "http://localhost:8080/api/v1/posts/";

    getall() {
        return axios.get(this.url + "getall");
    }
    
    getSortedDate() {
        return axios.get(this.url + "sortedDate")
    }

    getMostLiked() {
        return axios.get(this.url + "sortedLikeCount")
    }

    getByAuthorId(authorId) {
        return axios.get(this.url + "getByAuthorId/" + authorId);
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

    add(userId, post) {
   
        return axios.post(this.url + "add/" + userId, post);
    }

    delete(postId) {
        return axios.post(this.url + "delete/" + postId);
    }

    edit(postId, userId, editedPost) {
        return axios.post(this.url + "edit/" + postId + "/" + userId, editedPost);
    }
}