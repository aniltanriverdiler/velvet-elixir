import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "@constants/index";
import type { NavLink } from "@/types";

const Navbar = (): React.JSX.Element => {
  // Navbar animation
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        {/* Navbar logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Elixir</p>
        </a>

        {/* Navbar links */}
        <ul>
          {navLinks.map((link: NavLink) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
