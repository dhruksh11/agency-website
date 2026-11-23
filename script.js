gsap.registerPlugin(ScrollTrigger);
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

const projectImages = document.querySelectorAll(".images img");

gsap.set(projectImages, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2, zIndex: 1 });
gsap.set(projectImages[0], { clipPath: "inset(0% 0% 0% 0%)", scale: 1, zIndex: 2 });

let activeImage = 0;

gsap.to(".fleftelm", {
    y: "-300%",
    ease: "none",
    scrollTrigger: {
        trigger: "#fimages",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: function (self) {
            let imageIndex = Math.min(3, Math.floor(self.progress * 4));

            if (imageIndex !== activeImage) {
                let prevImage = projectImages[activeImage];
                let nextImage = projectImages[imageIndex];
                activeImage = imageIndex;

                gsap.set(projectImages, { zIndex: 1 });
                gsap.set(prevImage, { zIndex: 2 });
                gsap.set(nextImage, {
                    zIndex: 3,
                    clipPath: "inset(100% 0% 0% 0%)",
                    scale: 1.2
                });

                gsap.to(nextImage, {
                    clipPath: "inset(0% 0% 0% 0%)",
                    scale: 1,
                    duration: 2,
                    ease: "expo.out",
                    overwrite: true
                });
            }
        }
    }
});