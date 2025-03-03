function toggleAuth(option) {
    let slider = document.querySelectorAll('.toggle .slider')[0];
    let buttons = document.querySelectorAll('.toggle-btn');

    if (option === 'login') {
        slider.style.left = "0";
        buttons[0].classList.add("active");
        buttons[1].classList.remove("active");
    } else {
        slider.style.left = "50%";
        buttons[0].classList.remove("active");
        buttons[1].classList.add("active");

        // Redirect to signup if job seeker is selected
        if (document.getElementById("seekerBtn").classList.contains("active")) {
            window.location.href = "signup.html";
        }
    }
}

function toggleRole(option) {
    let slider = document.querySelectorAll('.toggle .slider')[1];
    let buttons = document.querySelectorAll('.toggle-btn');

    if (option === 'seeker') {
        slider.style.left = "0";
        buttons[2].classList.add("active");
        buttons[3].classList.remove("active");
    } else {
        slider.style.left = "50%";
        buttons[2].classList.remove("active");
        buttons[3].classList.add("active");
    }
}

function showSection(sectionId) {
    document.getElementById("about").classList.add("hidden");
    document.getElementById("offer").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");

    document.getElementById(sectionId).classList.remove("hidden");
}
