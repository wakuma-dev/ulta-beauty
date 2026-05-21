import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import heroDesc from "./heroDesc";
import Button from "../../../components/ui/Button";
export default function Hero() {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);

    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;

    el.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener("scroll", checkScroll);

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="relative w-full min-h-[40dvh] px-4 md:px-8 lg:px-12 py-2">
      {/* LEFT BUTTON */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="flex items-center justify-center absolute left-8 rounded-full text-white p-1.5 z-40 bg-black top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <HiChevronLeft size={20} />
        </button>
      )}

      {/* SCROLL AREA */}
      <div ref={scrollRef} className="flex gap-3 overflow-x-hidden scroll-smooth">
        {heroDesc.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-start gap-2 p-4 w-full md:w-1/3 h-[300px] flex-shrink-0 rounded-lg"
            style={{ backgroundColor: product.bg }}
          >
            <span className="font-semibold text-[20px]">{product.title}</span>
            <p className="text-[14px] leading-[16px] font-normal text-[#000000]">{product.desc}</p>
            <Button variant="primary">Shop now</Button>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="flex items-center justify-center absolute right-8 p-1.5 bg-black rounded-full text-white top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <HiChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
