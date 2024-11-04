import { PostService } from "../../services/post.service.js";
import { UserService } from "../../services/user.service.js";

export class Post extends HTMLElement {
    userService = new UserService();
    postService = new PostService();

    constructor() {
        super();
    }

    connectedCallback() {
        const postId = this.getAttribute('postId');
        const shadow = this.attachShadow({ mode: 'open' }); // Fixed 'node' to 'mode'
        console.log('postid: ', postId);
        this.#addStyles(shadow);
        this.#render(shadow);
        this.#consultPosts(postId, shadow);
    }

    #render(shadow) {
        shadow.innerHTML += `
        <section>
            <h2><a href="#" id="titulo"></a></h2>
            <p id="content"></p>
            <p class="date">Publicado por <span id="user">...</span></p>
        </section>
        `;
    }

    #addStyles(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        // Consider using an absolute path or adjusting the relative path based on your project structure
        link.setAttribute("href", "/src/components/post/post.component.css");
        shadow.appendChild(link);
    }

    #consultPosts(postId, shadow) {
        if (!postId) {
            console.error('No postId provided');
            return;
        }

        this.postService.getPost(postId)
            .then(post => {
                if (!post) return;
                let element = shadow.querySelector('#titulo');
                element.innerHTML = post.title;
                element = shadow.querySelector('#content');
                element.innerHTML = post.body;
                if (post.userId) {
                    this.#consultUser(post.userId, shadow);
                }
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }

    #consultUser(userId, shadow) {
        this.userService.getUser(userId)
            .then(user => {
                if (!user) return;
                let element = shadow.querySelector("#user");
                element.innerHTML = user.name;
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }
}