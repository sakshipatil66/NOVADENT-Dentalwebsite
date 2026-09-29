import { useState } from "react";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";
import gallery06 from "../assets/gallery/gallery-06.jpg";
import gallery07 from "../assets/gallery/gallery-07.jpg";
import gallery08 from "../assets/gallery/gallery-08.jpg";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ChevronDown,
} from "lucide-react";

const treatments = [
  {
    number: "01",
    category: "PREVENTIVE CARE",
    title: "Dental Check-Up",
    description:
      "Regular dental examinations designed to identify concerns early and keep your oral health on track.",
    image: gallery03,
    duration: "30–45 MIN",
    tags: ["Oral Examination", "Dental Cleaning", "Health Review"],
  },
  {
    number: "02",
    category: "SMILE ENHANCEMENT",
    title: "Teeth Whitening",
    description:
      "Professional whitening care designed to brighten your smile while keeping your treatment comfortable and personalized.",
    image: gallery08,
    duration: "45–60 MIN",
    tags: ["Smile Brightening", "Shade Assessment", "Aftercare"],
  },
  {
    number: "03",
    category: "RESTORATIVE CARE",
    title: "Dental Implants",
    description:
      "Thoughtful implant treatment to help restore missing teeth, improve function and support a confident smile.",
    image: gallery07,
    duration: "TREATMENT PLAN",
    tags: ["Implant Planning", "Tooth Replacement", "Restoration"],
  },
  {
    number: "04",
    category: "ALIGNMENT",
    title: "Orthodontics",
    description:
      "Personalized orthodontic solutions focused on alignment, bite improvement and creating a balanced smile.",
    image: gallery02,
    duration: "45–60 MIN",
    tags: ["Smile Assessment", "Alignment", "Bite Evaluation"],
  },
  {
    number: "05",
    category: "RESTORATIVE CARE",
    title: "Dental Crowns",
    description:
      "Carefully planned restorative treatment that helps protect damaged teeth and restore their shape and function.",
    image: gallery06,
    duration: "CONSULTATION",
    tags: ["Tooth Protection", "Restoration", "Smile Function"],
  },
  {
    number: "06",
    category: "COMFORT & HEALTH",
    title: "Root Canal Care",
    description:
      "Comfort-focused treatment for teeth affected by deep decay or infection, with careful planning at every stage.",
    image: gallery04,
    duration: "60–90 MIN",
    tags: ["Pain Relief", "Tooth Preservation", "Aftercare"],
  },
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We understand your concerns, examine your smile and discuss your goals.",
    icon: <Stethoscope size={23} />,
  },
  {
    number: "02",
    title: "Personalized Plan",
    text: "We explain your treatment options clearly and create a plan around your needs.",
    icon: <HeartPulse size={23} />,
  },
  {
    number: "03",
    title: "Comfortable Care",
    text: "Our team focuses on making every stage of your dental experience calm and comfortable.",
    icon: <ShieldCheck size={23} />,
  },
];

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "A consultation helps our dental team understand your concerns, assess your oral health and discuss suitable treatment options with you.",
  },
  {
    question: "Do treatments require multiple appointments?",
    answer:
      "It depends on the treatment. Some procedures can be completed in one visit, while restorative and orthodontic treatments may require multiple appointments.",
  },
  {
    question: "Can I discuss treatment costs before starting?",
    answer:
      "Yes. You can discuss your concerns and treatment options with our team during your consultation.",
  },
];

export default function Treatments() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <main className="ndtPage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="ndtHero"
        aria-labelledby="treatments-hero-title"
      >
        <img
          className="ndtHeroImage"
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=2000&q=90"
          alt="Modern dental care at NOVADENT"
        />

        <div
          className="ndtHeroOverlay"
          aria-hidden="true"
        ></div>

        <div className="ndtContainer ndtHeroContent">

          <div className="ndtEyebrow ndtLight">

            <Sparkles
              size={15}
              aria-hidden="true"
            />

            <span>
              MODERN DENTISTRY · PERSONAL CARE
            </span>

          </div>


          <span className="ndtOverline">
            TREATMENTS DESIGNED AROUND YOU
          </span>


          <h1 id="treatments-hero-title">
            Care for your
            <em> confident smile.</em>
          </h1>


          <p>
            From preventive check-ups to restorative and smile-enhancing
            treatments, NOVADENT brings together modern dental care,
            thoughtful planning and a comfortable patient experience.
          </p>


          {/* HERO BUTTONS REMOVED AS REQUESTED */}


          
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="ndtIntro"
        aria-labelledby="treatments-intro-title"
      >

        <div className="ndtContainer ndtIntroGrid">

          <div>

            <span className="ndtOverline ndtTeal">
              OUR APPROACH
            </span>

            <small className="ndtSectionNumber">
              01 / CARE WITH PURPOSE
            </small>

            <h2 id="treatments-intro-title">
              Every treatment
              <em> starts with understanding.</em>
            </h2>

          </div>


          <div className="ndtIntroText">

            <p className="ndtLead">
              Great dental care is not only about the treatment. It is about
              understanding what you need and helping you feel confident
              throughout the process.
            </p>

            <p>
              At NOVADENT, we take time to understand your concerns, explain
              your options and create a treatment approach that fits your
              individual needs.
            </p>


            <div className="ndtIntroList">

              <span>
                <CheckCircle
                  size={18}
                  aria-hidden="true"
                />
                Clear treatment recommendations
              </span>

              <span>
                <CheckCircle
                  size={18}
                  aria-hidden="true"
                />
                Modern dental techniques
              </span>

              <span>
                <CheckCircle
                  size={18}
                  aria-hidden="true"
                />
                Comfort-focused experience
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TREATMENTS
      ===================================================== */}

      <section
        id="ndtTreatments"
        className="ndtTreatments"
        aria-labelledby="treatments-menu-title"
      >

        <div className="ndtContainer">

          <div className="ndtHeading">

            <div>

              <span className="ndtOverline ndtTeal">
                WHAT WE OFFER
              </span>

              <small className="ndtSectionNumber">
                02 / TREATMENT MENU
              </small>

              <h2 id="treatments-menu-title">
                Complete care for
                <em> every smile.</em>
              </h2>

            </div>


            <p>
              Explore our core dental services designed around prevention,
              restoration, comfort and confidence.
            </p>

          </div>


          <div className="ndtCards">

            {treatments.map((item) => (

              <article
                className="ndtCard"
                key={item.number}
              >

                <div className="ndtCardImage">

                  <img
                    src={item.image}
                    alt={`${item.title} treatment at NOVADENT`}
                    loading="lazy"
                  />

                  <div
                    className="ndtImageOverlay"
                    aria-hidden="true"
                  ></div>


                  <div className="ndtCardNumber">
                    {item.number}
                  </div>


                  <div className="ndtCardCategory">
                    {item.category}
                  </div>


                  <div className="ndtCardDuration">

                    <Clock3
                      size={13}
                      aria-hidden="true"
                    />

                    {item.duration}

                  </div>


                  <div className="ndtImageBottom">

                    <span
                      className="ndtImageArrow"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={18} />
                    </span>

                  </div>

                </div>


                <div className="ndtCardBody">

                  <div className="ndtCardTitle">

                    <div>

                      <small>
                        NOVADENT CARE
                      </small>

                      <h3>
                        {item.title}
                      </h3>

                    </div>


                    <div
                      className="ndtCardIcon"
                      aria-hidden="true"
                    >
                      <HeartPulse size={20} />
                    </div>

                  </div>


                  <p>
                    {item.description}
                  </p>


                  <div className="ndtTags">

                    {item.tags.map((tag) => (

                      <span key={tag}>

                        <CheckCircle
                          size={12}
                          aria-hidden="true"
                        />

                        {tag}

                      </span>

                    ))}

                  </div>


                  <Link
                    to="/appointment"
                    className="ndtCardLink"
                    aria-label={`Discuss ${item.title} with NOVADENT`}
                  >
                    Discuss This Treatment

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="ndtProcess"
        aria-labelledby="treatment-process-title"
      >

        <div className="ndtContainer">

          <div className="ndtHeading ndtProcessHeading">

            <div>

              <span className="ndtOverline ndtTeal">
                YOUR CARE JOURNEY
              </span>

              <small className="ndtSectionNumber">
                03 / SIMPLE PROCESS
              </small>

              <h2 id="treatment-process-title">
                Simple steps.
                <em> Thoughtful care.</em>
              </h2>

            </div>


            <p>
              From your first conversation to your treatment plan, we keep
              every step clear and comfortable.
            </p>

          </div>


          <div className="ndtSteps">

            {steps.map((step) => (

              <article
                className="ndtStep"
                key={step.number}
              >

                <div className="ndtStepTop">

                  <span>
                    {step.number}
                  </span>

                  <div aria-hidden="true">
                    {step.icon}
                  </div>

                </div>


                <h3>
                  {step.title}
                </h3>


                <p>
                  {step.text}
                </p>


                <ArrowUpRight
                  className="ndtStepArrow"
                  size={18}
                  aria-hidden="true"
                />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="ndtFAQ"
        aria-labelledby="treatment-faq-title"
      >

        <div className="ndtContainer ndtFAQGrid">

          <div className="ndtFAQIntro">

            <span className="ndtOverline ndtTeal">
              GOOD TO KNOW
            </span>

            <small className="ndtSectionNumber">
              04 / COMMON QUESTIONS
            </small>

            <h2 id="treatment-faq-title">
              Before you
              <em> begin.</em>
            </h2>


            <p>
              Have questions about treatment? Here are a few common things
              patients ask before getting started.
            </p>


            <Link
              to="/contact"
              className="ndtOutlineButton"
              aria-label="Talk to the NOVADENT team"
            >
              Talk to Our Team

              <ArrowRight
                size={17}
                aria-hidden="true"
              />

            </Link>

          </div>


          <div className="ndtFAQList">

            {faqs.map((faq, index) => {

              const isOpen = activeFAQ === index;

              return (
                <div
                  className={`ndtFAQItem ${
                    isOpen ? "open" : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFAQ(
                        isOpen ? -1 : index
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >

                    <span>
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      aria-hidden="true"
                    />

                  </button>


                  <div
                    id={`faq-answer-${index}`}
                    className="ndtFAQAnswer"
                  >

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="ndtCTA"
        aria-labelledby="treatment-cta-title"
      >

        <div className="ndtContainer">

          <div className="ndtCTACard">

            <div className="ndtCTABadge">

              <Clock3
                size={14}
                aria-hidden="true"
              />

              MONDAY – SATURDAY · 9 AM – 6 PM

            </div>


            <span className="ndtOverline ndtLight">
              YOUR SMILE DESERVES CARE
            </span>


            <h2 id="treatment-cta-title">
              Ready for your
              <em> next step?</em>
            </h2>


            <p>
              Talk with our team about your dental concerns, treatment
              options and the next step for your smile.
            </p>


            <div className="ndtCTAButtons">

              <Link
                to="/contact"
                className="ndtCTASecondary"
                aria-label="Contact NOVADENT"
              >
                Contact NOVADENT

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}