window.addEventListener("DOMContentLoaded", () => {

    const splash =
        document.getElementById(
            "splash-screen"
        );

    const loading =
        document.getElementById(
            "loading-screen"
        );

    const app =
        document.getElementById(
            "app"
        );

    loading.style.display = "none";

    setTimeout(() => {

        splash.style.display = "none";
        loading.style.display = "flex";

        setTimeout(() => {

            loading.style.display = "none";

            app.classList.remove(
                "hidden"
            );

            Router.load();

            Theme.init();

            Navigation.init();

            Helpers.createNotification(
                "Welcome to Enterprise BI Dashboard"
            );

        }, 1000);

    }, 1500);
});

window.addEventListener(
    "hashchange",
    () => Router.load()
);