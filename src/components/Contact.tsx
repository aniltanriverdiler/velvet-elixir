import { openingHours, socials } from "@constants/index";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import type { OpeningHour, Social } from "@/types";

const Contact = (): React.JSX.Element => {
  // Contact section text animation
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <footer id="contact">
      {/* Contact section right and left leaf images */}
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      {/* Contact section content */}
      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        {/* Contact section opening hours */}
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time: OpeningHour) => (
            <p key={time.day}>
              {" "}
              {time.day} : {time.time}{" "}
            </p>
          ))}
        </div>

        {/* Contact section socials */}
        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social: Social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
