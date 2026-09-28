import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
  Heart,
  MessageSquare,
} from "lucide-react";

/* =========================================================
   REVIEWS DATA
========================================================= */

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Smile Makeover Patient",
    initials: "AM",
    rating: 5,
    text: "The entire experience at NOVADENT was incredibly comfortable. The team explained every step clearly and made me feel completely relaxed.",
  },
  {
    name: "Priya Sharma",
    role: "Dental Care Patient",
    initials: "PS",
    rating: 5,
    text: "Beautiful clinic, friendly staff and excellent care. I especially appreciated how patiently the doctor answered all my questions.",
  },
  {
    name: "Rohan Kulkarni",
    role: "Implant Treatment Patient",
    initials: "RK",
    rating: 5,
    text: "From the consultation to the treatment, everything felt professional and well organised. The modern technology really made a difference.",
  },
  {
    name: "Ananya Deshmukh",
    role: "Orthodontic Patient",
    initials: "AD",
    rating: 5,
    text: "I had always been nervous about dental appointments, but NOVADENT completely changed that experience. The team is genuinely caring.",
  },
];

/* =========================================================
   TRUST POINTS
========================================================= */

const stats = [
  ["01", "Patient First", "Care designed around comfort."],
  ["02", "Modern Care", "Technology with a human touch."],
  ["03", "Trusted Team", "Experienced dental professionals."],
];

/* =========================================================
   STAR COMPONENT
========================================================= */

function Stars({ size = 16 }) {
  return (
    <div
      className="novaReviewStars"
      aria-label="5 star rating"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill="currentColor"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/* =========================================================
   REVIEWS PAGE
========================================================= */

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentReview = reviews[activeReview];

  /* =======================================================
     NEXT REVIEW
  ======================================================= */

  const nextReview = () => {
    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  /* =======================================================
     PREVIOUS REVIEW
  ======================================================= */

  const previousReview = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveReview((current) =>
        current === reviews.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <main className="novaReviewsPage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="novaReviewsHero"
        aria-labelledby="reviews-hero-title"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div
          className="novaReviewsHeroGlow"
          aria-hidden="true"
        ></div>

        <div className="novaReviewsContainer">

          <div className="novaReviewsHeroContent">

            {/* EYEBROW */}

            <span className="novaReviewsEyebrow">

              <MessageSquare
                size={15}
                aria-hidden="true"
              />

              NOVADENT · PATIENT STORIES

            </span>


            {/* HEADING */}

            <h1 id="reviews-hero-title">
              Smiles that speak
              <em> for themselves.</em>
            </h1>


            {/* DESCRIPTION */}

            <p>
              Discover what our patients say about their experience,
              treatment journey and care at NOVADENT.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="novaReviewsIntro"
        aria-labelledby="reviews-intro-title"
      >

        <div className="novaReviewsContainer novaReviewsIntroGrid">

          <div>

            <span className="novaReviewsOverline">
              THE NOVADENT EXPERIENCE
            </span>

            <small className="novaReviewsNumber">
              01 / PATIENT VOICES
            </small>

            <h2 id="reviews-intro-title">
              Care you can feel.
              <em> Confidence you can see.</em>
            </h2>

          </div>


          <div className="novaReviewsIntroText">

            <p>
              Every patient arrives with a different concern,
              expectation and smile goal.
            </p>

            <p>
              Our approach is simple — listen carefully, explain
              clearly and create a comfortable experience from
              consultation to care.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED REVIEW
      ===================================================== */}

      <section
        id="patientReviews"
        className="novaReviewsFeatured"
        aria-labelledby="patient-reviews-title"
      >

        <div className="novaReviewsContainer">

          {/* SECTION HEADING */}

          <div className="novaReviewsSectionHeading">

            <div>

              <span className="novaReviewsOverline">
                PATIENT STORIES
              </span>

              <small className="novaReviewsNumber">
                02 / TESTIMONIALS
              </small>

              <h2 id="patient-reviews-title">
                Real experiences.
                <em> Real smiles.</em>
              </h2>

            </div>

            <p>
              A few words from patients who trusted NOVADENT
              with their dental care.
            </p>

          </div>


          {/* FEATURED REVIEW */}

          <div
            className="novaFeaturedReview"
            key={currentReview.name}
          >

            {/* QUOTE ICON */}

            <div
              className="novaFeaturedQuote"
              aria-hidden="true"
            >
              <Quote size={42} />
            </div>


            {/* REVIEW CONTENT */}

            <div className="novaFeaturedContent">

              <Stars size={18} />

              <blockquote>
                “{currentReview.text}”
              </blockquote>

              <div className="novaFeaturedPerson">

                <div
                  className="novaPersonAvatar"
                  aria-hidden="true"
                >
                  {currentReview.initials}
                </div>

                <div>

                  <strong>
                    {currentReview.name}
                  </strong>

                  <span>
                    {currentReview.role}
                  </span>

                </div>

              </div>

            </div>


            {/* CONTROLS */}

            <div className="novaFeaturedControls">

              <span>
                {String(activeReview + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>

              <div className="novaReviewButtons">

                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Previous patient review"
                >
                  <ArrowLeft
                    size={18}
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next patient review"
                >
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </button>

              </div>

            </div>

          </div>


          {/* REVIEW DOTS */}

          <div
            className="novaReviewDots"
            aria-label="Patient review navigation"
          >

            {reviews.map((review, index) => (

              <button
                key={review.name}
                type="button"
                onClick={() => setActiveReview(index)}
                className={
                  index === activeReview ? "active" : ""
                }
                aria-label={`Show review ${index + 1} by ${review.name}`}
                aria-current={
                  index === activeReview
                    ? "true"
                    : undefined
                }
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST POINTS
      ===================================================== */}

      <section
        className="novaReviewsTrust"
        aria-labelledby="reviews-trust-title"
      >

        <div className="novaReviewsContainer">

          <h2
            id="reviews-trust-title"
            className="sr-only"
          >
            Why patients trust NOVADENT
          </h2>

          <div className="novaReviewsTrustGrid">

            {stats.map(([number, title, text]) => (

              <article
                className="novaReviewTrustCard"
                key={number}
              >

                <span>
                  {number}
                </span>

                <div
                  className="novaTrustIcon"
                  aria-hidden="true"
                >
                  <Heart size={20} />
                </div>

                <div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MORE PATIENT VOICES
      ===================================================== */}

      <section
        className="novaReviewsCardsSection"
        aria-labelledby="more-patient-voices-title"
      >

        <div className="novaReviewsContainer">

          <div className="novaReviewsCardsHeading">

            <span className="novaReviewsOverline">
              MORE PATIENT VOICES
            </span>

            <h2 id="more-patient-voices-title">
              What our patients
              <em> remember.</em>
            </h2>

          </div>


          <div className="novaReviewsCardsGrid">

            {reviews.map((review, index) => (

              <article
                className={`novaReviewCard ${
                  index === activeReview ? "isActive" : ""
                }`}
                key={review.name}
                onClick={() => setActiveReview(index)}
                tabIndex={0}
                role="button"
                aria-pressed={index === activeReview}
                aria-label={`View review from ${review.name}`}
                onKeyDown={(event) => {

                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setActiveReview(index);
                  }

                }}
              >

                {/* CARD TOP */}

                <div className="novaReviewCardTop">

                  <div
                    className="novaReviewMiniAvatar"
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>

                  <Stars size={13} />

                </div>


                {/* QUOTE */}

                <Quote
                  className="novaReviewCardQuote"
                  size={30}
                  aria-hidden="true"
                />


                {/* REVIEW */}

                <p>
                  “{review.text}”
                </p>


                {/* PERSON */}

                <div className="novaReviewCardPerson">

                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.role}
                  </span>

                </div>


                {/* VIEW STORY LINE */}

                <span className="novaReviewCardView">

                  <span>
                    View story
                  </span>

                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                  />

                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="novaReviewsCTA"
        aria-labelledby="reviews-cta-title"
      >

        <div className="novaReviewsContainer">

          <div className="novaReviewsCTACard">

            <div>

              <span className="novaReviewsCTABadge">
                YOUR SMILE · OUR PRIORITY
              </span>

              <h2 id="reviews-cta-title">
                Ready to create your
                <em> own smile story?</em>
              </h2>

              <p>
                Take the first step toward confident,
                comfortable and personalized dental care
                with the NOVADENT team.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}