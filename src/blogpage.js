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
window.addEventListener("DOMContentLoaded", function () {
    var slug = window.location.pathname.split("/").pop();
    console.log(slug);
    var blog = blogs.find(function (b) { return b.slug === slug; });
    if (!blog) {
        return;
    }
    var container = document.getElementById("".concat(blog.slug, "-container"));
    var title = document.createElement("h1");
    title.classList.add("blog-title");
    title.textContent = blog.title;
    var date = document.createElement("p");
    date.classList.add("blog-post-date");
    date.textContent = blog.date;
    var image = document.createElement("img");
    image.classList.add("blog-post-image");
    image.src = "../".concat(blog.image);
    image.alt = blog.imageAlt;
    var description = document.createElement("p");
    description.classList.add("blog-post-description");
    description.textContent = blog.description;
    container === null || container === void 0 ? void 0 : container.appendChild(title);
    container === null || container === void 0 ? void 0 : container.appendChild(date);
    container === null || container === void 0 ? void 0 : container.appendChild(image);
    container === null || container === void 0 ? void 0 : container.appendChild(description);
});
