const tabs = document.querySelectorAll(".tabs-tab");
const contents = document.querySelectorAll(".swiper-slide");

const swiper = new Swiper(".content-swiper", {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    // mousewheel: {
    //     sensitivity: 1,
    // },

    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween: 20,
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

tabs[0].click();
