const form = document.querySelector('#iform');


const createPost = async (e) => {
    e.preventDefault();
    const doc = {
      title: form.title.value,
      body: form.body.value,
    };

    
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(doc),
      headers: {
        "Content-Type": "application/json",
      },
    });

   //window.scrollTo(0, document.body.scrollHeight);
}

form.addEventListener('submit', createPost);


