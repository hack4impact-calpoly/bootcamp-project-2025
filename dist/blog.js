export const blogs = [
    {
        title: "Blog Post 1",
        date: "Oct 9, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "../public/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "blog-post-1.html",
    },
    {
        title: "Blog Post 2",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "../public/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "blog-post-2.html",
    },
];
function createBlogs() {
    const blogContainer = document.getElementById("blog-articles");
    if (!blogContainer) {
        return;
    }
    blogs.forEach(blog => {
        const blogLink = document.createElement("a");
        blogLink.href = `./blog/${blog.slug}`;
        const blogPost = document.createElement("div");
        blogPost.classList.add("article");
        const title = document.createElement("h1");
        title.classList.add("article-title");
        title.textContent = blog.title;
        const image = document.createElement("img");
        image.classList.add("article-image");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        const description = document.createElement("p");
        description.classList.add("article-description");
        description.textContent = blog.description;
        const button = document.createElement("input");
        button.type = "button";
        button.value = "Learn More";
        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(description);
        blogPost.appendChild(button);
        blogLink.appendChild(blogPost);
        blogContainer.appendChild(blogLink);
    });
}
createBlogs();
