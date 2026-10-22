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

// Load the saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeButton) {
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    }

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
}
