const Theme = {

    init() {

        const savedTheme =
            localStorage.getItem("theme") || "light";

        document.documentElement.setAttribute(
            "data-theme",
            savedTheme
        );

        this.updateIcon(savedTheme);

        document
            .getElementById("theme-toggle")
            .addEventListener("click", () => {

                const current =
                    document.documentElement.getAttribute(
                        "data-theme"
                    );

                const next =
                    current === "light"
                        ? "dark"
                        : "light";

                document.documentElement.setAttribute(
                    "data-theme",
                    next
                );

                localStorage.setItem(
                    "theme",
                    next
                );

                this.updateIcon(next);
            });
    },

    updateIcon(theme) {

        document.getElementById(
            "theme-toggle"
        ).textContent =
            theme === "dark"
                ? "☀️"
                : "🌙";
    }
};