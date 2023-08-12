let bars = document.querySelector('.bars')
let nav = document.querySelector('nav')
let x = document.querySelector('.x')

bars.addEventListener("click", () => {
  nav.setAttribute("data-aberto", "aberto")
  bars.style.visibility = "hidden"
  x.style.visibility = "visible"
})