import React, { useLayoutEffect, useEffect, useRef } from "react";
import "./Navbar.css";

/*
  Sticky nav (no logo/brand in the header)
  - Centered links with underline-on-hover
  - Right-aligned BOOK NOW pill
  - Active link highlight via IntersectionObserver
  - Smooth in-page scroll
  - --header-h kept in sync with actual sticky header height
*/

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "restoration", label: "Hair Restoration" },
  { id: "hours", label: "Opening Hours & Socials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const headerRef = useRef(null);

  // Keep CSS var --header-h in sync with actual header height (sticky)
  useLayoutEffect(() => {
    const setHeaderHeight = () => {
      const h = headerRef.current ? headerRef.current.offsetHeight : 72;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setHeaderHeight();

    const ro = new ResizeObserver(setHeaderHeight);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", setHeaderHeight);

    return () => {
      window.removeEventListener("resize", setHeaderHeight);
      ro.disconnect();
    };
  }, []);

  // Active link highlight while scrolling
  useEffect(() => {
    const linkById = new Map(); // id -> <a>
    document.querySelectorAll(".nav-center a[data-id]").forEach((a) => {
      linkById.set(a.dataset.id, a);
    });

    const onIntersect = (entries) => {
      entries.forEach((e) => {
        const id = e.target.getAttribute("id");
        const link = linkById.get(id);
        if (!link) return;
        if (e.isIntersecting) {
          document
            .querySelectorAll(".nav-center a")
            .forEach((x) => x.classList.remove("active"));
          link.classList.add("active");
        }
      });
    };

    const headerH =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-h")
        .trim() || "72px";

    const io = new IntersectionObserver(onIntersect, {
      rootMargin: `-${headerH} 0px -60% 0px`,
      threshold: 0.01,
    });

    document.querySelectorAll("section[id]").forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, []);

  // Smooth in-page navigation
  const handleNavClick = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header ref={headerRef} className="site-header">
      {/* 3-column grid: left spacer | centered links | right CTA */}
      <div className="nav-row site-container">
        <div className="nav-spacer" aria-hidden="true" />
        <nav className="nav-center" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              data-id={link.id}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a
            href="#book"
            className="cta"
            onClick={(e) => handleNavClick(e, "book")}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}