import WOW from "wow.js/dist/wow.js";





const wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
})
wow.init()


let ticking = false;

function addWowBox() {
    for (var i = 0; i < wow.all.length; i++) {
        var box = wow.all[i];
        if (box) {
            // console.log(box, wow.boxes.indexOf(box)==-1,!wow.isVisible(box));
            if (wow.boxes.indexOf(box) == -1 && !wow.isVisible(box)) {
                // console.log(3);
                box.classList.remove("animate__animated");
                box.style.visibility = "hidden";
                box.style.animationName = "none";
                wow.boxes.push(box);

            }
        }
    }

}

window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            addWowBox();
            ticking = false;
        });
    }
    ticking = true;
});


export default wow;

