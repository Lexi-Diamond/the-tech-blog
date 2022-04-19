const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const post_Body = document.querySelector("#post-post_body").value.trim();
    const user_Id = document.querySelector("#post-user_id").value.trim();
    const date_Created = document.querySelector("#post-date_created").value.trim();
    
    if (title) {
      const response = await fetch(`/api/recipes`, {
        method: "POST",
        body: JSON.stringify({
          title,
          post_Body,
          user_Id,
          date_Created,
          
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    console.log("I did it!");
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to delete recipe");
      }
    }
  };