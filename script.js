document.addEventListener("DOMContentLoaded", function () {
    let selectedRole = "seeker"; // Default: Job Seeker
    let selectedAuth = "login";  // Default: Login

    function updateToggleUI() {
        // Update Job Role Toggle
        document.getElementById("seekerBtn").classList.toggle("active", selectedRole === "seeker");
        document.getElementById("providerBtn").classList.toggle("active", selectedRole === "provider");

        // Update Login-Signup Toggle
        document.querySelector('.toggle-btn[onclick="toggleAuth(\'login\')"]').classList.toggle("active", selectedAuth === "login");
        document.querySelector('.toggle-btn[onclick="toggleAuth(\'register\')"]').classList.toggle("active", selectedAuth === "register");

        // Move Slider Effect (Fix)
        const roleSlider = document.querySelector("#roleSlider");
        const authSlider = document.querySelector("#authSlider");

        if (selectedRole === "seeker") {
            roleSlider.style.transform = "translateX(0%)";
        } else {
            roleSlider.style.transform = "translateX(100%)";
        }

        if (selectedAuth === "login") {
            authSlider.style.transform = "translateX(0%)";
        } else {
            authSlider.style.transform = "translateX(100%)";
        }
    }

    function updateForm() {
        if (selectedRole === "seeker" && selectedAuth === "login") {
            window.location.href = "job_seeker_login.html";
        } else if (selectedRole === "seeker" && selectedAuth === "register") {
            window.location.href = "job_seeker_signup.html";
        } else if (selectedRole === "provider" && selectedAuth === "login") {
            window.location.href = "job_provider_login.html";
        } else if (selectedRole === "provider" && selectedAuth === "register") {
            window.location.href = "job_provider_signup.html";
        }
    }

    window.toggleRole = function (role) {
        selectedRole = role;
        updateToggleUI();
    };

    window.toggleAuth = function (authType) {
        selectedAuth = authType;
        updateToggleUI();
        updateForm();
    };

    updateToggleUI();
});
