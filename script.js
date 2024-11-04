import { Comments } from "./src/components/comments/comments.component.js";
import { Post } from "./src/components/post/post.component.js";

window.customElements.define("post-info", Post);
window.customElements.define("comments-info", Comments);