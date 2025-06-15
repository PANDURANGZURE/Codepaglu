import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onFinish }) => {
  const loaderRef = useRef();
  const textRef = useRef();
  const barRef = useRef(); // New ref for the last sliding div

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { scale: 0, opacity: 0, rotate: -90 },
      {
        scale: 1.5,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.7)",
      }
    )
      .to(textRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      })
      .to(textRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
      })
      // Step 1: Slide loader off screen
      .to(loaderRef.current, {
  y: "-100%",
  duration: 1,
  ease: "power3.inOut",
}, "<") // 👈 starts at same time as next one

.fromTo(
  barRef.current,
  { y: "100%" },
  {
    y: "-100%",
    duration: 1,
    ease: "power2.inOut",
    onComplete: onFinish,
  },
  "<" // 👈 starts at same time as previous
);
  }, [onFinish]);

  return (
    <>
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      >
        <h1
          ref={textRef}
          className="text-6xl font-extrabold text-white tracking-tight select-none"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          {"</>"}
        </h1>
      </div>

      {/* Last div that slides up after loader */}
      <div
        ref={barRef}
        className="fixed inset-0 bg-cyan-200 z-40"
      ></div>
    </>
  );
};

export default Loader;
