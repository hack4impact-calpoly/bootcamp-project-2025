// src/blog.ts
// 2) Create a few blog entries
var blogs = [
    {
        title: "Learning TypeScript",
        date: "2025-10-10",
        description: "What I learned setting up TS and compiling to JS.",
        image: "./images/ts.png",
        imageAlt: "TypeScript logo",
        slug: "learning-typescript",
    },
    {
        title: "DOM Manipulation Basics",
        date: "2025-10-09",
        description: "Creating elements, setting attributes, and appending to the page.",
        image: "./images/dom.png",
        imageAlt: "DOM nodes",
        slug: "dom-manipulation-basics",
    },
];
// 3) Render function: turns each Blog into DOM nodes and appends to the page
function renderBlogs(list) {
    var container = document.getElementById("blog-container");
    if (!container) {
        console.error("No #blog-container found on the page.");
        return;
    }
    list.forEach(function (blog) {
        // outer card
        var card = document.createElement("div");
        card.className = "blog-card";
        // optional link to a detail page using slug
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html"); // You can create these files later
        link.style.textDecoration = "none";
        link.style.color = "inherit";
        // title
        var h1 = document.createElement("h1");
        h1.textContent = blog.title;
        // date
        var small = document.createElement("small");
        small.textContent = blog.date;
        // image
        var img = document.createElement("img");
        img.src = blog.image;
        img.alt = blog.imageAlt;
        img.width = 320; // quick styling
        // description
        var p = document.createElement("p");
        p.textContent = blog.description;
        // build the structure
        link.appendChild(h1);
        link.appendChild(small);
        link.appendChild(img);
        link.appendChild(p);
        card.appendChild(link);
        container.appendChild(card);
    });
}
// 4) Run when the page loads
document.addEventListener("DOMContentLoaded", function () {
    renderBlogs(blogs);
});
