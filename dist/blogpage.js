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
window.addEventListener("DOMContentLoaded", () => {
    const slug = window.location.pathname.split("/").pop();
    console.log(slug);
    const blog = blogs.find(b => b.slug === slug);
    if (!blog) {
        return;
    }
    const container = document.getElementById(`${blog.slug}-container`);
    const title = document.createElement("h1");
    title.classList.add("blog-title");
    title.textContent = blog.title;
    const date = document.createElement("p");
    date.classList.add("blog-post-date");
    date.textContent = blog.date;
    const image = document.createElement("img");
    image.classList.add("blog-post-image");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    const description = document.createElement("p");
    description.classList.add("blog-post-description");
    description.textContent = blog.description;
    container?.appendChild(title);
    container?.appendChild(date);
    container?.appendChild(image);
    container?.appendChild(description);
});
