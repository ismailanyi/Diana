Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const filePath = url.pathname === "/" ? "./index.html" : "." + decodeURIComponent(url.pathname);
    const file = Bun.file(filePath);
    return new Response(file);
  },
});

console.log(" Diana's Birthday site preview running at: http://localhost:3000");
