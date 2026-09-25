import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  HeartPulse,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  Stethoscope,
  Clock3,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: <HeartPulse size={25} />,
    title: "Patient First",
    text: "Your comfort, concerns and individual dental goals guide every treatment decision.",
  },
  {
    number: "02",
    icon: <ShieldCheck size={25} />,
    title: "Trusted Care",
    text: "Clear communication and thoughtful treatment planning are part of every visit.",
  },
  {
    number: "03",
    icon: <Sparkles size={25} />,
    title: "Modern Approach",
    text: "We combine contemporary dental techniques with a calm, welcoming environment.",
  },
  {
    number: "04",
    icon: <Users size={25} />,
    title: "Personal Attention",
    text: "Every patient receives care that is tailored to their needs and expectations.",
  },
];

const technologyPoints = [
  "Digital treatment planning",
  "Modern diagnostic technology",
  "Comfort-focused procedures",
  "Personalized treatment plans",
];

export default function About() {
  return (
    <main className="aboutPage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="aboutHero pageHero">

        <div className="aboutHeroImage">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=90"
            alt="Modern NOVADENT dental clinic"
          />
        </div>

        <div className="aboutHeroOverlay"></div>

        <div className="container aboutHeroContent">

          <div className="aboutHeroBadge">
            <Sparkles size={15} />
            <span>ABOUT NOVADENT DENTAL CARE</span>
          </div>

          <span className="eyebrow aboutLightEyebrow">
            WHERE CARE MEETS CONFIDENCE
          </span>

          <h1>
            Dentistry designed
            <span>around you.</span>
          </h1>

          <p>
            Modern dental care with a human approach — thoughtful,
            comfortable and personalized for every smile.
          </p>

          <div className="aboutHeroActions">

            <Link to="/appointment" className="lightButton">
              <span>Book an Appointment</span>
              <ArrowUpRight size={18} />
            </Link>

            <a href="#our-story" className="aboutScrollLink">
              Discover Our Story
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

        <div className="aboutHeroScroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section id="our-story" className="aboutIntro section">

        <div className="container aboutIntroGrid">

          <div className="aboutIntroImage">

            <div className="aboutImageNumber">
              01 / OUR STORY
            </div>

            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1100&q=90"
              alt="NOVADENT dental team"
              loading="lazy"
            />

            <div className="aboutImageGlow"></div>

            <div className="floatingAboutCard">

              <div className="aboutFloatingIcon">
                <Award size={23} />
              </div>

              <div>
                <strong>10+ Years</strong>
                <span>Dental Experience</span>
              </div>

            </div>

          </div>


          <div className="aboutIntroContent">

            <span className="eyebrow">
              OUR STORY
            </span>

            <div className="aboutSectionNumber">
              01 / WHO WE ARE
            </div>

            <h2>
              A better dental
              <span>experience starts with care.</span>
            </h2>

            <p className="aboutLead">
              NOVADENT Dental Care was created around a simple idea:
              dental treatment should feel professional, comfortable
              and personal at the same time.
            </p>

            <p>
              We bring together experienced dental professionals,
              modern techniques and a patient-first approach to create
              an environment where you can feel informed and confident
              about your care.
            </p>

            <p>
              Whether you are visiting us for a routine check-up,
              improving your smile or exploring restorative treatment,
              our goal remains the same — to provide thoughtful care
              that fits your needs.
            </p>

            <div className="aboutChecklist">

              <div>
                <CheckCircle size={19} />
                <span>
                  Comfortable and welcoming environment
                </span>
              </div>

              <div>
                <CheckCircle size={19} />
                <span>
                  Clear and personalized treatment planning
                </span>
              </div>

              <div>
                <CheckCircle size={19} />
                <span>
                  Modern dental care and technology
                </span>
              </div>

            </div>

            <Link to="/contact" className="primaryButton">
              <span>Talk to Our Team</span>
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="valuesSection section">

        <div className="container">

          <div className="aboutSectionHeading">

            <div>

              <span className="eyebrow">
                WHAT WE BELIEVE
              </span>

              <div className="aboutSectionNumber">
                02 / OUR VALUES
              </div>

              <h2>
                Care that feels
                <span>genuinely personal.</span>
              </h2>

            </div>

            <p>
              Every interaction at NOVADENT is guided by our
              commitment to comfort, transparency, expertise
              and long-term oral health.
            </p>

          </div>


          <div className="valueGrid">

            {values.map((value) => (

              <article
                className="valueCard"
                key={value.number}
              >

                <div className="valueCardTop">

                  <span className="valueNumber">
                    {value.number}
                  </span>

                  <div className="valueIcon">
                    {value.icon}
                  </div>

                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

                <span className="valueArrow">
                  <ArrowUpRight size={18} />
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="aboutTechnology section">

        <div className="container technologyGrid">


          {/* LEFT CONTENT */}

          <div className="technologyContent">

            <span className="eyebrow">
              MODERN DENTISTRY
            </span>

            <div className="aboutSectionNumber">
              03 / TECHNOLOGY & CARE
            </div>

            <h2>
              Technology that{" "}
              <span>supports better care.</span>
            </h2>

            <p>
              Modern dental technology helps our team understand
              your needs, plan treatments carefully and create
              a more comfortable experience from consultation
              to completion.
            </p>


            <div className="technologyPoints">

              {technologyPoints.map((point, index) => (

                <div
                  className="technologyPoint"
                  key={point}
                >

                  <span className="techNumber">
                    0{index + 1}
                  </span>

                  <div className="techIcon">
                    <CheckCircle size={17} />
                  </div>

                  <span>
                    {point}
                  </span>

                </div>

              ))}

            </div>


            <Link
              to="/treatments"
              className="outlineButton"
            >
              <span>Explore Treatments</span>
              <ArrowRight size={18} />
            </Link>

          </div>


          {/* RIGHT IMAGE */}

          <div className="technologyImage">

            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=90"
              alt="Modern dental treatment room"
              loading="lazy"
            />

            <div className="technologyImageOverlay"></div>


            <div className="imageOverlayCard">

              <div className="overlayCardIcon">
                <Stethoscope size={22} />
              </div>

              <div>
                <strong>
                  Precision Dentistry
                </strong>

                <span>
                  Modern • Comfortable • Personal
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="aboutStats">

        <div className="aboutStatsGlow"></div>

        <div className="container aboutStatsGrid">

          <div className="aboutStatItem">
            <strong>10+</strong>
            <span>Years Experience</span>
            <small>Dedicated dental care</small>
          </div>

          <div className="aboutStatItem">
            <strong>5K+</strong>
            <span>Smiles Transformed</span>
            <small>Sample clinic statistic</small>
          </div>

          <div className="aboutStatItem">
            <strong>15+</strong>
            <span>Treatment Options</span>
            <small>Comprehensive care</small>
          </div>

          <div className="aboutStatItem">
            <strong>4.9</strong>
            <span>Patient Rating</span>
            <small>Sample review statistic</small>
          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PROMISE
      ===================================================== */}

      <section className="aboutPromise section">

        <div className="container aboutPromiseGrid">


          <div className="aboutPromiseImage">

            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=90"
              alt="Comfortable patient care"
              loading="lazy"
            />

            <div className="promiseBadge">
              <HeartPulse size={19} />
              <span>
                Care Beyond Treatment
              </span>
            </div>

          </div>


          <div className="aboutPromiseContent">

            <span className="eyebrow">
              OUR PROMISE
            </span>

            <h2>
              You deserve to feel
              <span>comfortable at the dentist.</span>
            </h2>

            <p>
              We understand that visiting the dentist can sometimes
              feel stressful. Our team focuses on creating a calm
              experience where you can ask questions, understand
              your options and feel confident in every decision.
            </p>


            <div className="promisePoints">

              <div>

                <div className="promisePointIcon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <strong>
                    Transparent Communication
                  </strong>

                  <span>
                    Understand your treatment before making decisions.
                  </span>
                </div>

              </div>


              <div>

                <div className="promisePointIcon">
                  <HeartPulse size={20} />
                </div>

                <div>
                  <strong>
                    Comfort-Focused Care
                  </strong>

                  <span>
                    A calm environment designed around your experience.
                  </span>
                </div>

              </div>


              <div>

                <div className="promisePointIcon">
                  <Award size={20} />
                </div>

                <div>
                  <strong>
                    Professional Expertise
                  </strong>

                  <span>
                    Modern dental solutions from an experienced team.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


    {/* =====================================================
    FINAL CTA
===================================================== */}

<section className="aboutCTA">

  <div className="ctaGlow"></div>

  <div className="container">

    <div className="aboutCTACard">

      <div className="aboutCTABadge">
        <Clock3 size={15} />
        <span>
          MONDAY – SATURDAY · 9 AM – 6 PM
        </span>
      </div>

      <span className="eyebrow lightEyebrow">
        START YOUR SMILE JOURNEY
      </span>

      <h2>
        Let's take care of
        <span>your smile.</span>
      </h2>

      <p>
        Have questions about your dental health or a treatment
        you are considering? Our team is ready to help.
      </p>

      <div className="ctaActions">

        <Link
          to="/contact"
          className="aboutCTASecondary aboutCTAContactButton"
        >
          Contact NOVADENT
          <ArrowRight size={17} />
        </Link>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}