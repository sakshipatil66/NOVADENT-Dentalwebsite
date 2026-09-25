import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
  Heart,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

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

const stats = [
  ["01", "Patient First", "Care designed around comfort."],
  ["02", "Modern Care", "Technology with a human touch."],
  ["03", "Trusted Team", "Experienced dental professionals."],
];

function Stars({ size = 16 }) {
  return (
    <div className="novaReviewStars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentReview = reviews[activeReview];

  const nextReview = () => {
    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  const previousReview = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

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

      {/* ================= HERO ================= */}

      <section
        className="novaReviewsHero"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="novaReviewsHeroGlow"></div>

        <div className="novaReviewsContainer">
          <div className="novaReviewsHeroContent">

            <span className="novaReviewsEyebrow">
              <MessageSquare size={15} />
              NOVADENT · PATIENT STORIES
            </span>

            <h1>
              Smiles that speak
              <em> for themselves.</em>
            </h1>

            <p>
              Discover what our patients say about their experience,
              treatment journey and care at NOVADENT.
            </p>

            <div className="novaReviewsHeroActions">
              <a
                href="#patientReviews"
                className="novaReviewsPrimary"
              >
                Read Patient Stories
                <ArrowUpRight size={18} />
              </a>

              <Link
                to="/appointment"
                className="novaReviewsTextLink"
              >
                Start Your Smile Journey
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>

          <div className="novaReviewsHeroRating">
            <Stars size={17} />

            <strong>5.0</strong>

            <span>Patient Experience</span>

            <div className="novaRatingVerified">
              <CheckCircle2 size={14} />
              <span>Trusted care</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="novaReviewsIntro">
        <div className="novaReviewsContainer novaReviewsIntroGrid">

          <div>
            <span className="novaReviewsOverline">
              THE NOVADENT EXPERIENCE
            </span>

            <small className="novaReviewsNumber">
              01 / PATIENT VOICES
            </small>

            <h2>
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

      {/* ================= FEATURED REVIEW ================= */}

      <section
        id="patientReviews"
        className="novaReviewsFeatured"
      >
        <div className="novaReviewsContainer">

          <div className="novaReviewsSectionHeading">

            <div>
              <span className="novaReviewsOverline">
                PATIENT STORIES
              </span>

              <small className="novaReviewsNumber">
                02 / TESTIMONIALS
              </small>

              <h2>
                Real experiences.
                <em> Real smiles.</em>
              </h2>
            </div>

            <p>
              A few words from patients who trusted NOVADENT
              with their dental care.
            </p>

          </div>

          <div
            className="novaFeaturedReview"
            key={currentReview.name}
          >

            <div className="novaFeaturedQuote">
              <Quote size={42} />
            </div>

            <div className="novaFeaturedContent">

              <Stars size={18} />

              <blockquote>
                “{currentReview.text}”
              </blockquote>

              <div className="novaFeaturedPerson">

                <div className="novaPersonAvatar">
                  {currentReview.initials}
                </div>

                <div>
                  <strong>{currentReview.name}</strong>
                  <span>{currentReview.role}</span>
                </div>

              </div>

            </div>

            <div className="novaFeaturedControls">

              <span>
                {String(activeReview + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>

              <div className="novaReviewButtons">

                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Previous review"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next review"
                >
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          </div>

          <div className="novaReviewDots">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveReview(index)}
                className={
                  index === activeReview ? "active" : ""
                }
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= TRUST POINTS ================= */}

      <section className="novaReviewsTrust">
        <div className="novaReviewsContainer">

          <div className="novaReviewsTrustGrid">

            {stats.map(([number, title, text]) => (
              <article
                className="novaReviewTrustCard"
                key={number}
              >
                <span>{number}</span>

                <div className="novaTrustIcon">
                  <Heart size={20} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= REVIEW CARDS ================= */}

      <section className="novaReviewsCardsSection">
        <div className="novaReviewsContainer">

          <div className="novaReviewsCardsHeading">

            <span className="novaReviewsOverline">
              MORE PATIENT VOICES
            </span>

            <h2>
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
                tabIndex="0"
                role="button"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setActiveReview(index);
                  }
                }}
              >

                <div className="novaReviewCardTop">

                  <div className="novaReviewMiniAvatar">
                    {review.initials}
                  </div>

                  <Stars size={13} />

                </div>

                <Quote
                  className="novaReviewCardQuote"
                  size={30}
                />

                <p>
                  “{review.text}”
                </p>

                <div className="novaReviewCardPerson">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>

                <div className="novaReviewCardLine"></div>

                <span className="novaReviewCardView">
                  View story
                  <ArrowUpRight size={15} />
                </span>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="novaReviewsCTA">
        <div className="novaReviewsContainer">

          <div className="novaReviewsCTACard">

            <div>

              <span className="novaReviewsCTABadge">
                YOUR SMILE · OUR PRIORITY
              </span>

              <h2>
                Ready to create your
                <em> own smile story?</em>
              </h2>

              <p>
                Book a consultation with the NOVADENT team
                and take the first step toward confident,
                comfortable dental care.
              </p>

            </div>

            <Link
              to="/appointment"
              className="novaReviewsCTAButton"
            >
              Book Appointment
              <ArrowUpRight size={19} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}