import { PostService } from "../../services/post.service.js";

export class Comments extends HTMLElement {

    postService = new PostService();

    constructor() {
        super();
    }

    connectedCallback() {
        const postId = this.getAttribute('postId');
        const shadow = this.attachShadow({ mode: 'open' });
        this.#addStyles(shadow);
        this.#render(shadow);
        this.#consultComments(postId, shadow);
    }


    #render(shadow) {
        shadow.innerHTML += `
        <details>
            <summary class="date">
                <img src="../../../src/assets/gifts/comment.gif" alt="comment-gif">
                <a href="#">Comentarios (<span id="quantity">?</span>)</a>
                </summary>
                <div id="div-comments" class="comments">

                </div>
        </details>
        <template id="pmpComment">
            <div class="commentsbox">
                <p id="user"><br></p>
                <p id="body"></p>
            </div>
        </template>
        `;
    }

    #addStyles(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/components/comments/comments.component.css");
        shadow.appendChild(link);
    }

    #consultComments(postId, shadow) {
        if (!postId) {
            console.error('No postId provided');
            return;
        }

        this.postService.getComments(postId)
            .then(comment => {
                if (!comment) return;
                let span = shadow.querySelector('#quantity');
                span.innerHTML = comment.length;
                let div = shadow.querySelector('#div-comments');
                let template = shadow.querySelector('#pmpComment');
                comment.forEach(element => {
                    this.#displayComments(template, div, element)
                });
            })
            .catch(error => {
                console.error('Error fetching comment:', error);
            });
    }

    #displayComments(template, div, comment) {
        let clone = template.content.cloneNode(true);
        let element = clone.querySelector('#user')
        element.innerHTML = comment.email;
        element = clone.querySelector('#body')
        element.innerHTML = comment.body;
        div.appendChild(clone)
    }
}