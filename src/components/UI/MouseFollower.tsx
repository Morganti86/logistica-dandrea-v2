"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function MouseFollower() {
  const mouseRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - target.current.x;
      if (Math.abs(dx) > 2) {
        setFlipped(dx < 0);
      }
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (mouseRef.current) {
        mouseRef.current.style.left = `${pos.current.x}px`;
        mouseRef.current.style.top = `${pos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      className="fixed pointer-events-none z-[999] translate-x-1/2 translate-y-1/2 hidden md:block"
    >
      <Image
        src="/Icons/van.webp"
        width={35}
        height={20}
        alt="Camión"
        priority
        style={{
          width: "35px",
          height: "auto",
          transform: flipped ? "scaleX(-1)" : "scaleX(1)",
          transition: "transform 0.2s ease",
        }}
      />
    </div>
  );
}
