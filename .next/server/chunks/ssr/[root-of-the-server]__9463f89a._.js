module.exports = [
"[project]/.next-internal/server/app/blog/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/blog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogs",
    ()=>blogs
]);
const blogs = [
    {
        title: "Blog Post 1",
        author: "Joe Smith",
        date: "Oct 9, 2025",
        description: "This is a short description of the article. I am going to keep " + "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "",
        imageAlt: "",
        tags: [
            "Important"
        ],
        slug: "b1"
    },
    {
        title: "Blog Post 2",
        author: "Joe Smith",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " + "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "",
        imageAlt: "",
        slug: "b2"
    }
];
/**
 * @deprecated For Milestone 1 demonstration purposes only
 */ function createBlogs() {
    const blogContainer = document.querySelector("#blog-container-name");
    if (!blogContainer) {
        return;
    }
    blogs.forEach((blog)=>{
        const blogLink = document.createElement("a");
        blogLink.href = `/blog/${blog.slug}`;
        const blogPost = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = blog.title;
        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        const description = document.createElement("p");
        description.textContent = blog.description;
        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(description);
        blogLink.appendChild(blogPost);
        blogContainer.appendChild(blogLink);
    });
}
}),
"[project]/src/app/blog/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/blog.ts [app-rsc] (ecmascript)");
;
;
async function generateMetadata({ params }) {
    const { id } = await params;
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((blog)=>blog.slug === id);
    return {
        title: blog ? blog.title : "Blog Not Found"
    };
}
async function Page({ params }) {
    const { id } = await params;
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((blog)=>blog.slug === id);
    //TODO date, image
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "pb-2 text-3xl capitalize",
                                children: blog?.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[id]/page.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: blog?.author
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[id]/page.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[id]/page.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: blog?.date
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[id]/page.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg",
                children: blog?.description
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[id]/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[id]/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Page;
}),
"[project]/src/app/blog/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9463f89a._.js.map