// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 70%",
        end: "top 30%",
        // markers: true,
        pin: ".square",
        pinSpacing: true,
        scrub: 4,
        toggleActions: "restart none none none"
    }
});



// scroll trigger.html

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,

    }
});

tl.to(".box", { x: 500, duration: 3 })
    .to(".box", { y: 300, duration: 2 })
    .to(".box", { x: 0, duration: 2 })


gsap.to(".scroller", {
    scrollTrigger: {
        start: "top 0%",
        pin: ".scroller",
        scrub: 1,
        pinSpacing: false
    }
})


document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".bgvideo");

    // Create a GSAP timeline for video scrub
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroller",
            start: "top 0%",
            scrub: 2,
            pin: ".scroller",
            pinSpacing: false
        }
    });

    // Animate video time based on scroll position
    tl.to(video, {
        currentTime: video.duration,
        ease: "power1.inOut", // No easing for scrub effect
        onUpdate: () => {
            // Ensure the video is updated smoothly
            video.currentTime = tl.progress() * video.duration;
        }
    });
});