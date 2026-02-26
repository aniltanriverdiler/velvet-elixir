import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "@constants/index";
import type { Beverage } from "@/types";

const Cocktails = (): React.JSX.Element => {
  // Cocktails section leaf parallax animation
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeLine
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      {/* Cocktails section left and right leaf images */}
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      {/* Cocktails section list */}
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>

          {/* Cocktails section popular list */}
          <ul>
            {cocktailLists.map(({ name, country, detail, price }: Beverage) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cocktails section loved list */}
        <div className="loved">
          <h2>Most Loved Mocktails:</h2>

          {/* Cocktails section loved list */}
          <ul>
            {mockTailLists.map(({ name, country, detail, price }: Beverage) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
