//마우스 움직임 효과
const mouseCursor = document.querySelector(".mouse_cursor");
const mouseCursor2 = document.querySelector(".mouse_cursor2");
const mouseCursor3 = document.querySelector(".mouse_cursor3");
const header = document.querySelector("#header");
const span = document.querySelectorAll("#mouse_wrap span");
const info = document.querySelector(".mouse_info");
const footer = document.querySelector("#footer");

window.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;

    // mouseCursor.style.left = e.pageX - 5 + "px";
    // mouseCursor.style.top = e.pageY - 5 + "px";
    // mouseCursor2.style.left = e.pageX - 15 + "px";
    // mouseCursor2.style.top = e.pageY - 15 + "px";
    // mouseCursor3.style.left = e.pageX - 25 + "px";
    // mouseCursor3.style.top = e.pageY - 25 + "px";

    //GSAP
    gsap.to(mouse_cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(mouse_cursor2, { duration: 0.5, left: e.pageX - 15, top: e.pageY - 15 });
    gsap.to(mouse_cursor3, { duration: 1.2, left: e.pageX - 25, top: e.pageY - 25 });
});

//마우스 오버 효과
header.addEventListener("mouseover", () => {
    mouse_cursor.classList.add("active");
    mouse_cursor2.classList.add("active");
    mouse_cursor3.classList.add("active");
});
header.addEventListener("mouseout", () => {
    mouse_cursor.classList.remove("active");
    mouse_cursor2.classList.remove("active");
    mouse_cursor3.classList.remove("active");
});

//스팬 효과
span.forEach((item) => {
    mouse_cursor.classList.add("active2");
    mouse_cursor2.classList.add("active2");
    mouse_cursor3.classList.add("active2");
});
item.addEventListener("mouseout", () => {
    mouse_cursor.classList.remove("active2");
    mouse_cursor2.classList.remove("active2");
    mouse_cursor3.classList.remove("active2");
});

info.addEventListener("mouseover", () => {
    mouse_cursor.classList.add("active3");
    mouse_cursor2.classList.add("active3");
    mouse_cursor3.classList.add("active3");
});
info.addEventListener("mouseout", () => {
    mouse_cursor.classList.remove("active3");
    mouse_cursor2.classList.remove("active3");
    mouse_cursor3.classList.remove("active3");
});

footer.addEventListener("mouseover", () => {
    mouse_cursor.classList.add("active4");
    mouse_cursor2.classList.add("active4");
    mouse_cursor3.classList.add("active4");
});
footer.addEventListener("mouseout", () => {
    mouse_cursor.classList.remove("active4");
    mouse_cursor2.classList.remove("active4");
    mouse_cursor3.classList.remove("active4");
});
