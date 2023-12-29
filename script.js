const arrAnim = document.querySelector(".arr-anim");
setInterval(() => {
  arrAnim.classList.toggle("arr-anim-up");
  arrAnim.classList.toggle("arr-anim-down");
}, 1000);
