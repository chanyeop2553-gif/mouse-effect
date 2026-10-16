//마우스 움직임 효과
const mouseCursor = document.querySelector(".mouse_cursor");
const header = document.querySelector("#header");
const span = document.querySelectorAll("#mouse_wrap span");
const info = document.querySelector(".mouse_info");
const footer = document.querySelector("#footer");

const width = mouse_cursor.offsetWidth;
const height = mouse_cursor.offsetHeight;

window.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;

    gsap.to(mouse_cursor, { left: e.pageX - width, top: e.pageY - height, duration: 0.4 });
});

//마우스 오바 효과
span.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        mouse_cursor.classList.add("show");
    });
    element.addEventListener("mouseleave", () => {
        mouse_cursor.classList.remove("show");
    });
});
header.addEventListener("mouseenter", () => {
    mouse_cursor.classList.add("show");
});
header.addEventListener("mouseleave", () => {
    mouse_cursor.classList.remove("show");
});

//스팬 효과
span.forEach((item) => {
    "mouseenter";
    mouse_cursor.classList.add("show");
});
item.addEventListener("mouseleave", () => {
    mouse_cursor.classList.remove("show");
});

info.addEventListener("mouseenter", () => {
    mouse_cursor.classList.add("show");
});
info.addEventListener("mouseleave", () => {
    mouse_cursor.classList.remove("show");
});

footer.addEventListener("mouseenter", () => {
    mouse_cursor.classList.add("show");
});
footer.addEventListener("mouseleave", () => {
    mouse_cursor.classList.remove("show");
});
