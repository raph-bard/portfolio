"use client";

import { useEffect, useState } from "react";
import SpotlightEffect from "./SpotlightEffect";

const Spotlight = () => {
  const [style, setStyle] = useState<React.CSSProperties>({
    background: "radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)",
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      setStyle({
        background: `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <SpotlightEffect />
      <div
        className="pointer-events-none hidden lg:block fixed inset-0 z-30 transition duration-300"
        style={style}
      />
    </>
  );
};

export default Spotlight;
