const tabs = document.querySelectorAll(".tabs-tab");
const contents = document.querySelectorAll(".swiper-slide");
const bg = document.querySelectorAll(".skills__item");
const burger = document.querySelector(".menu__icon"),
    headerMenu = document.querySelector(".header__list"),
    headerLink = document.querySelectorAll(".header__link");

if (burger) {
    burger.addEventListener("click", (event) => {
        burger.classList.toggle("_active");
        headerMenu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}

headerLink.forEach((el) => {
    el.addEventListener("click", (e) => {
        headerMenu.classList.remove("_active");
        burger.classList.toggle("_active");
    });
});

// header
window.addEventListener("scroll", function () {
    scrollY > 0
        ? document.querySelector(".header").classList.add("scroll")
        : document.querySelector(".header").classList.remove("scroll");
});

//animation
for (let i = 0; i < bg.length; i++) {
    window.addEventListener("mousemove", function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        // let r = Math.random() * 22;
        // console.log(r);
        bg[i].style.transform =
            "translate(-" + (x * (40 * i)) / 2 + "px, -" + y * 40 + "px)";
    });
}
//navigation

document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let href = this.getAttribute("href").substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 70;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});

//swiper
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

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

//tabs
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
