import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onFinish }) => {
  const loaderRef = useRef();
  const textRef = useRef();

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
      // 👉 Slide loader up from bottom to top
      .to(loaderRef.current, {
  y: "-100%",
  duration: 1,
  ease: "power2.inOut",
  onComplete: onFinish, // 👈 triggers setLoading(false)
});
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center "
    >
      <h1
        ref={textRef}
        className="text-6xl font-extrabold text-white tracking-tight select-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        {"</>"}
      </h1>
    </div>
  );
};

export default Loader;
