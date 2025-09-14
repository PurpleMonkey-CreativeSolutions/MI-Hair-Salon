import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero MUST NOT be wrapped by .site-container */}
        <Hero />

        {/* Everything else can be constrained */}
        <section id="services" className="site-container" style={{ padding: "4rem 0" }}>
          <h2>Services</h2>
          <p>…</p>
        </section>
      </main>
    </>
  );
}