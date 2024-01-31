const tabs = document.querySelectorAll(".tabs-tab");
const contents = document.querySelectorAll(".swiper-slide");
const swiper = new Swiper(".content-swiper", {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const showContent = (tab) => {
    [...contents].forEach((content) => {
        const contentStyle = content.dataset.name;
        if (tab === "all") {
            content.style.display = "block";
        } else if (contentStyle === tab) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
    [...tabs].forEach((btn) => {
        if (btn.dataset.name === tab) {
            btn.classList.add("add");
        } else {
            btn.classList.remove("add");
        }
    });
};

[...tabs].forEach((btn) => {
    btn.onclick = (e) => {
        const tabName = e.target.dataset.name;
        showContent(tabName);
    };
});

[...tabs][0].click();
