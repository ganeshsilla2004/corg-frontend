import { useEffect } from "react";
import gsap from "gsap";

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "back.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};