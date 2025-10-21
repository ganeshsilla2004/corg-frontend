// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Lenis from "@studio-freight/lenis";

// export const useAnimations = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Split-type text reveal
//     const splitTypes = document.querySelectorAll(".reveal-type");
//     splitTypes.forEach((el) => {
//       const text = new SplitType(el as HTMLElement, { types: "chars" });
//       gsap.from(text.chars, {
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           end: "top 20%",
//           scrub: true,
//         },
//         opacity: 0.2,
//         stagger: 0.1,
//       });
//     });

//     // Lenis smooth scroll
//     const lenis = new Lenis();
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // Image and video animations
//     gsap.from(".parts img", {
//       opacity: 0,
//       duration: 0.1,
//       scrollTrigger: {
//         trigger: ".parts img",
//         start: "top 50%",
//         end: "top 15%",
//         scrub: 2,
//       },
//     });

//     gsap.from(".scaling img", {
//       scale: 0.8,
//       duration: 3,
//       transformOrigin: "center center",
//       rotateX: 35,
//       scrollTrigger: {
//         trigger: ".scaling img",
//         start: "top 90%",
//         end: "top 20%",
//         scrub: 2,
//       },
//     });

//     gsap.from(".video-container1 video", {
//       scale: 0.7,
//       duration: 3,
//       transformOrigin: "center center",
//       scrollTrigger: {
//         trigger: ".video-container1 video",
//         start: "top 90%",
//         end: "top 20%",
//         scrub: 2,
//       },
//     });

//     gsap.to(".hori2 h1", {
//       xPercent: -185,
//       scrollTrigger: {
//         trigger: ".hori2",
//         start: "top 70%",
//         end: "bottom top",
//         scrub: 2,
//       },
//     });

//     gsap.from(".us", {
//       y: 200,
//       opacity: 0,
//       duration: 0.1,
//       scrollTrigger: {
//         trigger: ".us",
//         start: "top 90%",
//         end: "top 50%",
//         scrub: 2,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       lenis.destroy();
//     };
//   }, []);
// };

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");

    headings.forEach((heading) => {
      const el = heading as HTMLElement;
      const split = new SplitType(el, { types: "chars" });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
        },
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          ease: "power3.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};