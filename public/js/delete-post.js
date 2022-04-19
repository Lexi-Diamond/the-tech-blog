const delButtonHandler = async (event) => {
    console.log("I did it!");
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to delete post");
      }
    }
  };
  
  document.getElementById("upload_widget").addEventListener(
    "click",
    function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      myWidget.open();
    },
    false
  );
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
  
  document
    .querySelectorAll(".gettingridof")
    .forEach((el) => el.addEventListener("click", delButtonHandler));
  