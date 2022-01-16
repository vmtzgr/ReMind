const log = console.log;
const container = document.querySelector(".entries");

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts?_sort=id&_order=desc";

  const res = await fetch(uri);
  const posts = await res.json();
  log(posts);

  let temp = "";
  posts.forEach((post) => {
    temp += ` <div class="blog-entrie">
                  <h2>${post.title}</h2>
                  <p>${post.body}</p>
              </div>`;
  });
  container.innerHTML += temp;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
