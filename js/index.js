const log = console.log;
const container = document.querySelector(".entries");

const delPost = (id) => {
  fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
    /*      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      }, */
  });
  console.log(id);
};

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts?_sort=id&_order=desc";

  const res = await fetch(uri);
  const posts = await res.json();
  log(posts);

  let temp = "";
  posts.forEach((post) => {
    temp += ` 
      <div class="blog-entrie">
        <div class="card-header">
          <h2>${post.title}</h2>
          <button class="del-btn" type="submit"  onclick="delPost(${post.id})"><img src="./asstes/img/del-btn.svg" alt="Delete Posts"  ></button>
        </div>
        <p>${post.body}</p>
      </div>
`;
  });
  container.innerHTML += temp;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
