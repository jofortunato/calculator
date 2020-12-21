const pageBody = document.querySelector("body");
const darkThemeToggle = document.querySelector("#dark-theme-input");
let isOnDarkTheme = false;

darkThemeToggle.addEventListener("click", () => {
    if (!isOnDarkTheme) {
        isOnDarkTheme = true;
        pageBody.classList.add("dark-theme");
    }
    else {
        isOnDarkTheme = false;
        pageBody.classList.remove("dark-theme");
    }

}, false);