import { sliderLists } from "@constants/index";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { SliderItem } from "@/types";

const Menu = (): React.JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Menu section text animation
  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);

  // Menu leaf parallax animation
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#m-left-leaf", { x: -80, y: 120, rotate: -6 }, 0)
      .from("#m-right-leaf", { x: 80, y: 120, rotate: 6 }, 0);
  }, []);

  // Menu slider logic
  const totalCocktails: number = sliderLists.length;

  const goToSlide = (index: number): void => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number): SliderItem => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail: SliderItem = getCocktailAt(0);
  const prevCocktail: SliderItem = getCocktailAt(-1);
  const nextCocktail: SliderItem = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* Menu left and right leaf images */}
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      {/* Menu heading */}
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      {/* Menu cocktail tabs */}
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail: SliderItem, index: number) => {
          const isActive: boolean = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`
              ${isActive ? "text-white border-white" : "text-white/50 border-white/50"}
            `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      {/* Menu content */}
      <div className="content">
        {/* Menu arrows */}
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          {/* Menu next button */}
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Menu cocktail image */}
        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="object-contain"
          />
        </div>

        {/* Menu recipe */}
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          {/* Menu recipe details */}
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
