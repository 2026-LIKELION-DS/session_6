function writeNew() {
    let newArticleBox = document.querySelector(".post-new-article");
    let writeForm = document.querySelector(".write");

    newArticleBox.style.display = "none";
    writeForm.style.display = "flex"; 
}

function toggleNav() {
    const sideHamburger = document.querySelector(".side-hamburger");
    sideHamburger.classList.toggle("active");
}

const menuLinks = document.querySelectorAll(".side-hamburger .banner-top a");

if (menuLinks.length > 0) {
    menuLinks[0].classList.add("active-menu");
}

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("mouseover", function() {
        if (!this.classList.contains("active-menu")) {
            this.style.backgroundColor = "#f9f9f9";
            this.style.color = "#f91f15";
        }
    });

    menuLinks[i].addEventListener("mouseout", function() {
        if (!this.classList.contains("active-menu")) {
            this.style.backgroundColor = "";
            this.style.color = "#1b1a1a";
        }
    });

    menuLinks[i].addEventListener("click", function(event) {
        for (let j = 0; j < menuLinks.length; j++) {
            menuLinks[j].classList.remove("active-menu");
            menuLinks[j].style.backgroundColor = "";
            menuLinks[j].style.color = "#1b1a1a";
        }
        
        this.classList.add("active-menu");
        this.style.backgroundColor = "#f9f9f9";
        this.style.color = "#f91f15";
    });
}




document.addEventListener("click", function(event) {
    const sideHamburger = document.querySelector(".side-hamburger");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    if (sideHamburger.classList.contains("active")) {
        const isClickedInsideSidebar = sideHamburger.contains(event.target);
        const isClickedHamburgerIcon = hamburgerIcon.contains(event.target);

        if (!isClickedInsideSidebar && !isClickedHamburgerIcon) {
            sideHamburger.classList.remove("active");
        }
    }
});