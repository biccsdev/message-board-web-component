export class UserService {
    urlService = 'https://jsonplaceholder.typicode.com/users/';

    async getUser(userId) {
        try {
            let response = await fetch(this.urlService + userId)
            let json = await response.json()
            return json;
        } catch (error) {
            return {};
        }
    }
}