const cookiesCard = document.getElementById("cookies");
function removeCookiesCard() {
  cookiesCard.classList.add("hidden");
  localStorage.setItem("cookies", true);
}
function getCookiesPreference() {
  if (localStorage.getItem("cookies"))
cookiesCard.classList.add("hidden");
}
getCookiesPreference();
const buttonAccept = document
  .querySelector("#cookies__accept")
  .addEventListener("click", removeCookiesCard);

