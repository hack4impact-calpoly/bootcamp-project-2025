var blogs = [
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
    var blogContainer = document.getElementById("blog-articles");
    if (!blogContainer) {
        return;
    }
    blogs.forEach(function (blog) {
        var blogLink = document.createElement("a");
        blogLink.href = "./blog/".concat(blog.slug);
        var blogPost = document.createElement("div");
        blogPost.classList.add("article");
        var title = document.createElement("h1");
        title.classList.add("article-title");
        title.textContent = blog.title;
        var image = document.createElement("img");
        image.classList.add("article-image");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var description = document.createElement("p");
        description.classList.add("article-description");
        description.textContent = blog.description;
        var button = document.createElement("input");
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
