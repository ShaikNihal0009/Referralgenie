document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const seekerBtn = document.getElementById("seekerBtn");
    const providerBtn = document.getElementById("providerBtn");

    let loginActive = true;
    let seekerActive = true;

    // Toggle between Login and Signup
    loginBtn.addEventListener("click", function () {
        document.querySelector(".toggle .slider").style.left = "0px";
        loginActive = true;
    });

    signupBtn.addEventListener("click", function () {
        document.querySelector(".toggle .slider").style.left = "50%";
        loginActive = false;
        if (seekerActive) {
            window.location.href = "signup.html"; 
        }
    });

    // Toggle between Job Seeker and Job Provider
    seekerBtn.addEventListener("click", function () {
        document.querySelector(".role-toggle .slider").style.left = "0px";
        seekerActive = true;
    });

    providerBtn.addEventListener("click", function () {
        document.querySelector(".role-toggle .slider").style.left = "50%";
        seekerActive = false;
    });

    // Show Sections on Click
    window.showSection = function (section) {
        document.querySelectorAll(".hidden").forEach(sec => sec.style.display = "none");
        document.getElementById(section).style.display = "block";
    };
});
