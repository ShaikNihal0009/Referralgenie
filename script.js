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

        // Check if Job Seeker is selected before opening signup page
        if (document.querySelector('.toggle-btn.active').innerText === "Job Seeker") {
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
