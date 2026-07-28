const Router = {

    routes: {

        dashboard: `
            <div class="page-container">
                <h2>Dashboard</h2>
                <br>
                <p>
                    Business Intelligence Dashboard Framework.
                </p>
                <br>
                <p>
                    KPI cards, reports and charts
                    will be added later.
                </p>
            </div>
        `,

        profile: `
            <div class="page-container">
                <h2>User Profile</h2>
                <br>
                <p>Name: User Name</p>
                <p>Role: Business Analyst</p>
                <p>Status: Active</p>
            </div>
        `,

        settings: `
            <div class="page-container">
                <h2>Settings</h2>
                <br>
                <p>
                    Application configuration,
                    preferences and system settings.
                </p>
            </div>
        `
    },

    load() {

        const route =
            location.hash.replace("#", "")
            || "dashboard";

        document.getElementById(
            "content"
        ).innerHTML =
            this.routes[route]
            || this.routes.dashboard;
    }
};