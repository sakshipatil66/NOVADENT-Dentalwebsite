import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Users,
  Award,
  Star,
  ChevronRight,
} from "lucide-react";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";

/* =========================================
   HOME INTRO IMAGE SLIDER
========================================= */

const introImages = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=95",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1800&q=95",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1800&q=95",
];

/* =========================================
   SERVICES
========================================= */

const services = [
  {
    title: "General Dentistry",
    text: "Complete preventive and restorative dental care designed to protect your oral health.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=90",
    icon: "✦",
  },
  {
    title: "Teeth Whitening",
    text: "Professional whitening treatments for a brighter, fresher and naturally confident smile.",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=90",
    icon: "✧",
  },
  {
    title: "Dental Implants",
    text: "Advanced implant solutions that restore your smile, comfort and everyday confidence.",
    img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=90",
    icon: "◈",
  },
  {
    title: "Orthodontics",
    text: "Personalized alignment solutions for a healthier bite and beautifully balanced smile.",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=90",
    icon: "＋",
  },
];

/* =========================================
   DOCTORS
========================================= */

const doctors = [
  {
    name: "Dr. Aanya Sharma",
    specialty: "Cosmetic & Restorative Dentist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "Implant & Prosthodontic Specialist",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Dr. Neha Kapoor",
    specialty: "Orthodontist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=90",
  },
];

/* =========================================
   BENEFITS
========================================= */

const benefits = [
  {
    number: "01",
    icon: <ShieldCheck size={25} />,
    title: "Patient First",
    text: "Every treatment is planned around your comfort, concerns and long-term dental health.",
  },
  {
    number: "02",
    icon: <Sparkles size={25} />,
    title: "Modern Dentistry",
    text: "Advanced technology and contemporary techniques help us deliver precise and comfortable care.",
  },
  {
    number: "03",
    icon: <HeartPulse size={25} />,
    title: "Gentle Care",
    text: "A calm environment and compassionate team make every dental visit easier.",
  },
  {
    number: "04",
    icon: <Users size={25} />,
    title: "Expert Team",
    text: "Experienced dental professionals work together to create personalized treatment plans.",
  },
];

/* =========================================
   TESTIMONIALS
========================================= */

const testimonials = [
  {
    quote:
      "The entire experience was wonderful. Everyone explained the treatment clearly and made me feel completely comfortable.",
    name: "Amelia Shah",
    role: "Smile Makeover Patient",
    initials: "AS",
  },
  {
    quote:
      "The clinic feels modern and welcoming. The doctors are professional, patient and genuinely caring.",
    name: "Rohan Desai",
    role: "Dental Care Patient",
    initials: "RD",
  },
  {
    quote:
      "I had been nervous about dental treatment, but the NOVADENT team made the whole process simple and stress-free.",
    name: "Priya Mehta",
    role: "Orthodontic Patient",
    initials: "PM",
  },
];

/* =========================================
   ANIMATED COUNTER
========================================= */

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const end = parseInt(value, 10);
    const duration = 1600;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <strong>
      {count}
      {suffix}
    </strong>
  );
}

/* =========================================
   HOME PAGE
========================================= */

export default function Home() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  /* =========================================
     INTRO IMAGE SLIDER STATE
  ========================================= */

  const [introImage, setIntroImage] = useState(0);
  const [introDirection, setIntroDirection] = useState("next");

  /* =========================================
     INTRO IMAGE AUTO SLIDER
  ========================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setIntroDirection("next");

      setIntroImage(
        (prev) => (prev + 1) % introImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================
     TESTIMONIAL AUTO SLIDER
  ========================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview(
        (current) => (current + 1) % testimonials.length
      );
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="homePage">

      {/* =========================================
          HERO
      ========================================= */}

      <Hero />

      {/* =========================================
          WELCOME / ABOUT INTRO
      ========================================= */}

      <section className="homeIntro section">
        <div className="container homeIntroGrid">

          {/* IMAGE SLIDER */}

          <div className="homeIntroImage">

            <div className="introImageBadge">
              <Sparkles size={16} />
              <span>Modern • Gentle • Personal</span>
            </div>

            <div className="introImageSlider">

              {introImages.map((image, index) => (

                <img
                  key={image}
                  src={image}
                  alt="NOVADENT Dental Care"
                  className={`introSlide ${
                    index === introImage
                      ? "introSlideActive"
                      : ""
                  } ${
                    index === introImage
                      ? `introSlide${introDirection}`
                      : ""
                  }`}
                />

              ))}

            </div>

            <div className="introImageOverlay"></div>

            <div className="introImageCard">
              <strong>10+</strong>
              <span>Years of Dental Excellence</span>
            </div>

            {/* LEFT ARROW */}

            <button
              type="button"
              className="introSliderArrow introSliderArrowLeft"
              onClick={() => {
                setIntroDirection("prev");

                setIntroImage(
                  (prev) =>
                    (prev - 1 + introImages.length) %
                    introImages.length
                );
              }}
              aria-label="Previous dental image"
            >
              <ArrowRight
                size={20}
                className="introArrowLeftIcon"
              />
            </button>

            {/* RIGHT ARROW */}

            <button
              type="button"
              className="introSliderArrow introSliderArrowRight"
              onClick={() => {
                setIntroDirection("next");

                setIntroImage(
                  (prev) =>
                    (prev + 1) % introImages.length
                );
              }}
              aria-label="Next dental image"
            >
              <ArrowRight size={20} />
            </button>

            {/* DOTS */}

            <div className="introSliderDots">

              {introImages.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  className={
                    index === introImage ? "active" : ""
                  }
                  onClick={() => {
                    setIntroDirection(
                      index > introImage
                        ? "next"
                        : "prev"
                    );

                    setIntroImage(index);
                  }}
                  aria-label={`Show dental image ${index + 1}`}
                />

              ))}

            </div>

          </div>

          {/* CONTENT */}

          <div className="homeIntroContent">

            <span className="homeIntroEyebrow">
              YOUR SMILE. YOUR CONFIDENCE.
            </span>

            <h2>
              A smile worth feeling confident about
            </h2>

            <h3 className="homeIntroTagline">
              Feel good. Smile freely.
              <br />
              <em>Live confidently.</em>
            </h3>

            <p>
              Because a healthy smile is not only about how
              you look. It is about how confidently you laugh,
              speak and enjoy every moment.
            </p>

            <Link
              to="/about"
              className="homeIntroButton"
            >
              Discover NOVADENT
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================
          STATS
      ========================================= */}

      <section className="homeStats">

        <div className="statsGlow"></div>

        <div className="container homeStatsGrid">

          <div className="homeStat interactiveStat">

            <div className="statIcon">
              <Award size={21} />
            </div>

            <AnimatedCounter
              value="10"
              suffix="+"
            />

            <span>Years of Experience</span>

            <small>
              Trusted dental expertise
            </small>

          </div>

          <div className="homeStat interactiveStat">

            <div className="statIcon">
              <Users size={21} />
            </div>

            <AnimatedCounter
              value="5000"
              suffix="+"
            />

            <span>Smiles Transformed</span>

            <small>
              Personalized patient care
            </small>

          </div>

          <div className="homeStat interactiveStat">

            <div className="statIcon">
              <HeartPulse size={21} />
            </div>

            <AnimatedCounter
              value="15"
              suffix="+"
            />

            <span>Dental Treatments</span>

            <small>
              Complete oral care
            </small>

          </div>

          <div className="homeStat interactiveStat">

            <div className="statIcon">
              <Star size={21} />
            </div>

            <strong>4.9</strong>

            <span>Patient Rating</span>

            <small>
              Based on sample reviews
            </small>

          </div>

        </div>

      </section>

      {/* =========================================
          TREATMENTS
      ========================================= */}

      <section className="homeServices section">

        <div className="container">

          <div className="sectionHeader enhancedSectionHeader">

            <div>

              <span className="eyebrow">
                WHAT WE OFFER
              </span>

              <div className="sectionNumber">
                02 / TREATMENTS
              </div>

              <h2>
                Complete care for
                <span> every smile.</span>
              </h2>

              <p>
                From everyday dental care to advanced smile
                treatments, discover thoughtful solutions
                designed for your needs.
              </p>

            </div>

            <Link
              to="/treatments"
              className="outlineButton animatedButton"
            >
              <span>Explore Treatments</span>
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="serviceGrid premiumServiceGrid">

            {services.map((service, index) => (

              <div
                className="serviceReveal"
                key={service.title}
                style={{
                  "--delay": `${index * 120}ms`,
                }}
              >

                <ServiceCard
                  title={service.title}
                  text={service.text}
                  img={service.img}
                  icon={service.icon}
                />

              </div>

            ))}

          </div>

          <div className="servicesBottomNote">

            <div className="noteIcon">
              <CheckCircle size={18} />
            </div>

            <div>

              <strong>
                Not sure what treatment you need?
              </strong>

              <span>
                Start with a consultation and our dental
                team will guide you.
              </span>

            </div>

            <Link to="/appointment">
              Book Consultation
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================
          WHY NOVADENT
      ========================================= */}

      <section className="homeWhy section">

        <div className="homeWhyDecor homeWhyDecorOne"></div>
        <div className="homeWhyDecor homeWhyDecorTwo"></div>

        <div className="container homeWhyGrid">

          <div className="homeWhyImage">

            <div className="imageNumber">
              03
            </div>

            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1300&q=90"
              alt="Modern dental treatment at NOVADENT"
            />

            <div className="imageShine"></div>

            <div className="homeWhyFloating">

              <div className="floatingIcon">
                <ShieldCheck size={24} />
              </div>

              <div>
                <strong>Comfort First</strong>
                <span>Your care matters</span>
              </div>

            </div>

            <div className="floatingExperience">
              <strong>10+</strong>
              <span>Years</span>
            </div>

          </div>

          <div className="homeWhyContent">

            <span className="eyebrow">
              WHY NOVADENT
            </span>

            <div className="sectionNumber">
              03 / THE NOVADENT DIFFERENCE
            </div>

            <h2>
              More than dentistry.
              <span> A better experience.</span>
            </h2>

            <p className="homeWhyLead">
              We believe great dental care should combine
              expertise, technology and empathy. That is why
              every detail of your experience is thoughtfully
              designed.
            </p>

            <div className="interactiveBenefits">

              {benefits.map((item, index) => (

                <button
                  type="button"
                  key={item.title}
                  className={`interactiveBenefit ${
                    activeBenefit === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveBenefit(index)
                  }
                >

                  <span className="benefitNumber">
                    {item.number}
                  </span>

                  <span className="benefitIcon">
                    {item.icon}
                  </span>

                  <span className="benefitText">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.text}
                    </span>

                  </span>

                  <ChevronRight
                    className="benefitArrow"
                    size={20}
                  />

                </button>

              ))}

            </div>

            <Link
              to="/about"
              className="primaryButton animatedButton"
            >
              <span>Why Choose NOVADENT</span>
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================
          DOCTORS
      ========================================= */}

      <section className="homeDoctors section">

        <div className="container">

          <div className="sectionHeader enhancedSectionHeader">

            <div>

              <span className="eyebrow">
                MEET THE EXPERTS
              </span>

              <div className="sectionNumber">
                04 / OUR DENTISTS
              </div>

              <h2>
                Meet your
                <span> dental care team.</span>
              </h2>

              <p>
                Experienced professionals dedicated to
                creating healthy, confident smiles in a
                comfortable environment.
              </p>

            </div>

            <Link
              to="/doctors"
              className="outlineButton animatedButton"
            >
              <span>Meet Our Doctors</span>
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="doctorGrid premiumDoctorGrid">

            {doctors.map((doctor, index) => (

              <div
                className="doctorReveal"
                key={doctor.name}
                style={{
                  "--delay": `${index * 150}ms`,
                }}
              >

                <DoctorCard
                  name={doctor.name}
                  specialty={doctor.specialty}
                  img={doctor.img}
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          SMILE BANNER
      ========================================= */}

      <section className="homeSmileBanner">

        <img
          src="https://images.unsplash.com/photo-1606265752439-1f18756aa2d3?auto=format&fit=crop&w=1800&q=90"
          alt="Comfortable dental experience"
          className="smileBannerImage"
        />

        <div className="homeSmileOverlay"></div>
        <div className="smileBannerGlow"></div>

        <div className="container homeSmileContent">

          <div className="bannerFloatingTag">
            <Sparkles size={15} />

            <span>
              A smile worth feeling confident about
            </span>
          </div>

          <span className="eyebrow lightEyebrow">
            YOUR SMILE. YOUR CONFIDENCE.
          </span>

          <h2 className="homeSmileTitle">
            Feel good. Smile freely.
            <br />
            <span>Live confidently.</span>
          </h2>

          <p>
            Because a healthy smile is not only about how
            you look. It is about how confidently you laugh,
            speak and enjoy every moment.
          </p>

          <div className="bannerActions">

            <Link
              to="/treatments"
              className="lightButton animatedButton"
            >
              <span>Explore Treatments</span>
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================
          TESTIMONIAL
      ========================================= */}

      <section className="homeTestimonial section">

        <div className="container">

          <div className="testimonialTop">

            <div>

              <span className="eyebrow">
                PATIENT STORIES
              </span>

              <div className="sectionNumber">
                05 / EXPERIENCES
              </div>

            </div>

            <div className="testimonialRatingTop">

              <div className="stars">
                ★★★★★
              </div>

              <strong>
                4.9 / 5
              </strong>

              <span>
                Patient experience
              </span>

            </div>

          </div>

          <div className="testimonialBox">

            <div className="testimonialQuote">
              “
            </div>

            <div className="testimonialContent">

              <span className="testimonialSmall">
                VERIFIED EXPERIENCE
              </span>

              <blockquote>
                “{testimonials[activeReview].quote}”
              </blockquote>

              <div className="testimonialAuthor">

                <div className="testimonialAvatar">
                  {testimonials[activeReview].initials}
                </div>

                <div>

                  <strong>
                    {testimonials[activeReview].name}
                  </strong>

                  <span>
                    {testimonials[activeReview].role}
                  </span>

                </div>

              </div>

            </div>

            <div className="testimonialControls">

              <button
                type="button"
                onClick={() =>
                  setActiveReview(
                    (activeReview - 1 + testimonials.length) %
                      testimonials.length
                  )
                }
                aria-label="Previous review"
              >
                <ArrowRight
                  size={18}
                  className="rotateLeft"
                />
              </button>

              <div className="testimonialDots">

                {testimonials.map((_, index) => (

                  <button
                    type="button"
                    key={index}
                    className={
                      activeReview === index
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveReview(index)
                    }
                    aria-label={`Review ${index + 1}`}
                  />

                ))}

              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveReview(
                    (activeReview + 1) % testimonials.length
                  )
                }
                aria-label="Next review"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          FINAL BOOK APPOINTMENT CTA
          IS IN FOOTER
      ========================================= */}

    </main>
  );
}