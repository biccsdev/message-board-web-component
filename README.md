# Message Board Web Components

A simple and modern message board implementation using vanilla Web Components, demonstrating the power of native browser features for creating reusable UI components.

![image](https://github.com/user-attachments/assets/82621b28-2fe2-46e2-9db7-c27ee2f112ad)

## 🚀 Features

- Pure Web Components implementation (no framework required)
- Shadow DOM for style encapsulation
- Modular architecture
- Fetch API integration with JSONPlaceholder
- Custom post and user components
- Responsive design

## 📋 Prerequisites

- Modern web browser with Web Components support
- Local development server (recommended: Live Server for VS Code or similar)
- Basic understanding of HTML, CSS, and JavaScript

## 🛠️ Project Structure

```
myblog/
├── src/
│   ├── assets/
│   │   ├── gifts/
│   │   └── images/
│   ├── components/
│   │   ├── comments/
│   │       ├── comments.component.js
│   │       ├── comments.component.css
│   │       └── comments.component.html
│   │   └── post/
│   │       ├── post.component.js
│   │       ├── post.component.css
│   │       └── post.component.html
│   └── services/
│       ├── post.service.js
│       └── user.service.js
├── index.html
├── script.js
└── styles.css
```

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/biccsdev/web-components-blog.git
```

2. Navigate to the project directory
```bash
cd message-board-web-component
```

3. Start a local development server
   - Using VS Code Live Server: Right click on `index.html` and select "Open with Live Server"
   - Using Python:
     ```bash
     python -m http.server
     ```
   - Using Node.js:
     ```bash
     npx http-server
     ```

## 💻 Usage

1. The blog posts are fetched from JSONPlaceholder API
2. Each post is rendered as a custom web component `<post-info>`
3. To display a specific post, use the `postId` attribute:
```html
<post-info postId="1"></post-info>
```

## 🔍 Component Documentation

### Post Component
The `<post-info>` component displays a blog post with its title, content, and author information.

#### Attributes
- `postId` (required): The ID of the post to display

#### Example
```html
<post-info postId="2"></post-info>
```

### Comments Component
The `<comments-info>` component displays a list of comments for a specific blog post.

#### Attributes
- `postId` (required): The ID of the post to display

#### Example
```html
<comments-info postId="2"></comments-info>
```

### Services

#### PostService
Handles all post-related API calls to JSONPlaceholder.

Methods:
- `getPost(postId)`: Fetches a specific post
- `getComments(postId)`: Fetches comments for a specific post

#### UserService
Handles all user-related API calls.

Methods:
- `getUser(userId)`: Fetches user information

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the fake API
- Web Components specification
- Shadow DOM specification

## ⚠️ Common Issues and Solutions

1. **Components not rendering**
   - Make sure you're using a web server (not opening files directly)
   - Check browser console for errors
   - Verify all file paths are correct

2. **Styles not applying**
   - Verify CSS file paths
   - Check Shadow DOM encapsulation
   - Ensure styles are being loaded correctly

3. **API calls failing**
   - Check internet connection
   - Verify API endpoints
   - Look for CORS issues in browser console

## 📫 Contact

X (twitter) - [@itsbiccs](https://x.com/itsbiccs) 

Project Link: [https://github.com/biccsdev/message-board-web-component](https://github.com/biccsdev/message-board-web-component)
