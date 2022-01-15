const log = console.log;
const container = document.querySelector(".entries");

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";

  const res = await fetch(uri);
  const posts = await res.json();
  log(posts);

  let temp = "";
  posts.forEach((post) => {
    temp += ` <div class="blog-entrie">
                  <h2>${post.title}</h2>
                  <p>${post.body}</p>
                  <div class="bottom">
                      <p><small>${post.likes}</small></p>
                      <button class="like-btn"><i class="far fa-thumbs-up"></i></button>
                  </div>
              </div>`;
  });
  container.innerHTML += temp;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
