// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Back to top button
    const topButton = document.getElementById("backToTop");

    if (topButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

const themeButton = document.getElementById("themeToggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
}