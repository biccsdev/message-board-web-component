export class PostService {
    urlService = 'https://jsonplaceholder.typicode.com/posts/';
    urlComments = '/comments/';

    async getPost(postId) {
        try {
            let response = await fetch(this.urlService + postId)
            let json = await response.json()
            return json;
        } catch (error) {
            return {};
        }
    }

    async getComments(postId) {
        try {
            let response = await fetch(this.urlService + postId + this.urlComments)
            let json = await response.json()
            return json;
        } catch (error) {
            return {};
        }
    }
}