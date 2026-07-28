const Helpers = {
    qs(selector) {
        return document.querySelector(selector);
    },

    qsa(selector) {
        return document.querySelectorAll(selector);
    },

    createNotification(message) {

        const container =
            document.getElementById("notifications");

        const notification =
            document.createElement("div");

        notification.className = "notification";
        notification.textContent = message;

        container.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
};