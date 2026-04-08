const text = document.getElementById("text");
const showMoreBtn = document.getElementById("showMore");

let isTrue = true;
showMoreBtn.addEventListener("click", () => {
if (isTrue) {
    text.style.display = "block";
    showMoreBtn.textContent = "Show Less";
    isTrue = false;
} else {
    text.style.display = "none";
    showMoreBtn.textContent = "Show More";
    isTrue = true;
}
});
