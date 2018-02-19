window.addEventListener("mousemove", (e) => {
  const about = document.querySelector(".about");
  about.style.width = e.pageX;
  about.style.height = e.pageY;
  //   about.innerText = "you have no products in your shopping basket.";
  const blog = document.querySelector(".blog");
  blog.style.width = window.innerWidth - e.pageX;
  blog.style.height = e.pageY;
  const work = document.querySelector(".work");
  work.style.width = e.pageX;
  work.style.height = window.innerHeight - e.pageY;
  const contact = document.querySelector(".contact");
  contact.style.width = window.innerWidth - e.pageX;
  contact.style.height = window.innerHeight - e.pageY;
});
