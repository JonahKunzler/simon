function login() {
  const Player = document.querySelector("#name");
  localStorage.setItem("userName", Player.value);
  window.location.href = "play.html";
}
