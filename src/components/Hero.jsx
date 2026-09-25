import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=2000&q=95",
    eyebrow: "ADVANCED DENTAL CARE",
    title: "A Healthier Smile\nStarts Here",
    text: "Modern dentistry, gentle care, and personalized treatment designed around you.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=2000&q=95",
    eyebrow: "CONFIDENT SMILES",
    title: "Smile With\nConfidence",
    text: "Beautiful, natural-looking results with technology you can trust.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=95",
    eyebrow: "GENTLE • MODERN • PERSONAL",
    title: "Your Comfort\nComes First",
    text: "Experience thoughtful dental care in a calm and welcoming environment.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  /* =========================================
     AUTO SLIDER
     ========================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");

      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* =========================================
     KEYBOARD
     ========================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setDirection("prev");

        setCurrent(
          (prev) => (prev - 1 + slides.length) % slides.length
        );
      }

      if (event.key === "ArrowRight") {
        setDirection("next");

        setCurrent((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="novaHero">

      {/* BACKGROUND SLIDES */}

      <div className="heroSlides">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`heroSlide ${
              index === current ? "heroSlide-current" : ""
            } ${
              index === current
                ? direction === "next"
                  ? "slide-next"
                  : "slide-prev"
                : ""
            }`}
          >
            <img
              src={slide.image}
              alt="NOVADENT Dental Care"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* OVERLAY */}

      <div className="heroOverlay"></div>

      <div className="heroSoftGlow heroSoftGlowOne"></div>
      <div className="heroSoftGlow heroSoftGlowTwo"></div>

      {/* CONTENT */}

      <div className="heroContent">

        <div className="heroEyebrow">
          <span className="heroEyebrowLine"></span>

          <span>
            {slides[current].eyebrow}
          </span>

          <span className="heroEyebrowLine"></span>
        </div>

        <h1 className="heroTitle">
          {slides[current].title
            .split("\n")
            .map((line, index) => (
              <span key={index}>{line}</span>
            ))}
        </h1>

        <p className="heroDescription">
          {slides[current].text}
        </p>

        <div className="heroActions">

          <Link
            to="/appointment"
            className="heroPrimaryBtn"
          >
            <CalendarDays size={18} />

            <span>
              Book Appointment
            </span>

            <ChevronRight size={17} />
          </Link>

          <Link
            to="/treatments"
            className="heroSecondaryBtn"
          >
            <span>
              Explore Treatments
            </span>

            <ArrowRight size={17} />
          </Link>

        </div>

        {/* TRUST */}

        <div className="heroTrust">

          <div className="heroTrustItem">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div className="heroTrustDivider"></div>

          <div className="heroTrustItem">
            <strong>15K+</strong>
            <span>Happy Patients</span>
          </div>

          <div className="heroTrustDivider"></div>

          <div className="heroTrustItem">
            <strong>4.9</strong>
            <span>Patient Rating</span>
          </div>

        </div>

      </div>

      {/* LEFT */}

      <button
        type="button"
        className="heroArrow heroArrowLeft"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft size={21} />
      </button>

      {/* RIGHT */}

      <button
        type="button"
        className="heroArrow heroArrowRight"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ArrowRight size={21} />
      </button>

      {/* BOTTOM */}

      <div className="heroBottomControls">

        <div className="heroDots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                index === current ? "active" : ""
              }
              onClick={() => {
                setDirection(
                  index > current ? "next" : "prev"
                );

                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="heroSlideNumber">
          <span>0{current + 1}</span>
          <i></i>
          <span>0{slides.length}</span>
        </div>

      </div>

    </section>
  );
}