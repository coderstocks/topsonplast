// JavaScript for Cursor Effect
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});
// aos
AOS.init(3000);