import { Link } from "react-router-dom";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";
import gallery06 from "../assets/gallery/gallery-06.jpg";
import gallery07 from "../assets/gallery/gallery-07.jpg";
import gallery08 from "../assets/gallery/gallery-08.jpg";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
} from "lucide-react";

const services = [
  {
    number: "01",
    category: "PREVENTIVE CARE",
    title: "General Dentistry",
    description:
      "Complete everyday dental care focused on prevention, early detection and maintaining a healthy smile.",
    image: gallery03,
    duration: "30–45 MIN",
    points: [
      "Dental Check-Ups",
      "Professional Cleaning",
      "Oral Health Assessment",
    ],
  },
  {
    number: "02",
    category: "SMILE ENHANCEMENT",
    title: "Teeth Whitening",
    description:
      "Professional whitening care designed to brighten your smile while keeping your experience comfortable.",
    image: gallery08,
    duration: "45–60 MIN",
    points: [
      "Smile Brightening",
      "Shade Assessment",
      "Personalized Aftercare",
    ],
  },
  {
    number: "03",
    category: "RESTORATIVE CARE",
    title: "Dental Implants",
    description:
      "Modern implant solutions designed to restore missing teeth, improve function and support a natural-looking smile.",
    image: gallery07,
    duration: "TREATMENT PLAN",
    points: [
      "Implant Consultation",
      "Tooth Replacement",
      "Restorative Planning",
    ],
  },
  {
    number: "04",
    category: "ORTHODONTIC CARE",
    title: "Braces & Aligners",
    description:
      "Personalized alignment solutions using modern orthodontic techniques for healthier and more confident smiles.",
    image: gallery02,
    duration: "45–60 MIN",
    points: [
      "Smile Assessment",
      "Clear Aligners",
      "Alignment Planning",
    ],
  },
  {
    number: "05",
    category: "RESTORATIVE CARE",
    title: "Dental Crowns",
    description:
      "Carefully planned restorative care that helps protect damaged teeth and restore their strength and appearance.",
    image: gallery06,
    duration: "CONSULTATION",
    points: [
      "Tooth Protection",
      "Custom Restoration",
      "Natural Appearance",
    ],
  },
  {
    number: "06",
    category: "COMFORT & HEALTH",
    title: "Root Canal Care",
    description:
      "Comfort-focused treatment designed to relieve dental pain while preserving your natural tooth.",
    image: gallery04,
    duration: "60–90 MIN",
    points: [
      "Pain Relief",
      "Tooth Preservation",
      "Careful Aftercare",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Patient-First Care",
    text: "Treatment recommendations are designed around your needs, comfort and goals.",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques",
    text: "We combine contemporary dental methods with thoughtful clinical care.",
  },
  {
    icon: HeartPulse,
    title: "Comfort Focused",
    text: "Every visit is designed to feel calm, clear and supportive.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Team",
    text: "Our dental professionals bring experience across different areas of care.",
  },
];

export default function Services() {
  return (
    <main className="novaServicesPage">

      {/* HERO */}
      <section className="novaServicesHero">

        <div className="novaServicesHeroImage"></div>
        <div className="novaServicesHeroOverlay"></div>

        <div className="novaServicesContainer novaServicesHeroContent">

          <div className="novaServicesEyebrow">
            <Sparkles size={15} />
            <span>MODERN DENTISTRY · PERSONAL CARE</span>
          </div>

          <span className="novaServicesOverline">
            OUR DENTAL SERVICES
          </span>

          <h1>
            Complete care for
            <span> your confident smile.</span>
          </h1>

          <p>
            From preventive dental care to restorative and smile-enhancing
            treatments, NOVADENT provides personalized care in a comfortable
            modern environment.
          </p>

          <div className="novaServicesHeroActions">

            <Link
              to="/appointment"
              className="novaServicesPrimaryButton"
            >
              <Stethoscope size={18} />
              Book a Consultation
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/treatments"
              className="novaServicesSecondaryButton"
            >
              Explore Treatments
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="novaServicesTrust">

            <span>
              <CheckCircle2 size={16} />
              Personalized Plans
            </span>

            <span>
              <CheckCircle2 size={16} />
              Modern Care
            </span>

            <span>
              <CheckCircle2 size={16} />
              Comfort Focused
            </span>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="novaServicesIntro">

        <div className="novaServicesContainer novaServicesIntroGrid">

          <div>

            <span className="novaServicesMiniTitle">
              OUR APPROACH
            </span>

            <small className="novaServicesSectionNumber">
              01 / CARE WITH PURPOSE
            </small>

            <h2>
              More than a dental
              <span> appointment.</span>
            </h2>

          </div>

          <div className="novaServicesIntroText">

            <p className="novaServicesLead">
              Great dental care starts with understanding what you need.
              Our approach combines clinical expertise, modern techniques
              and genuine attention to your comfort.
            </p>

            <p>
              Whether you need routine preventive care or a more advanced
              treatment plan, our team takes the time to explain your
              options clearly.
            </p>

            <div className="novaServicesIntroList">

              <span>
                <CheckCircle2 size={17} />
                Clear treatment recommendations
              </span>

              <span>
                <CheckCircle2 size={17} />
                Modern dental technology
              </span>

              <span>
                <CheckCircle2 size={17} />
                Comfortable patient experience
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="novaServicesSection">

        <div className="novaServicesContainer">

          <div className="novaServicesHeading">

            <div>

              <span className="novaServicesMiniTitle">
                WHAT WE OFFER
              </span>

              <small className="novaServicesSectionNumber">
                02 / SERVICE MENU
              </small>

              <h2>
                Dental care for
                <span> every stage.</span>
              </h2>

            </div>

            <p>
              Explore our core services designed to support prevention,
              restoration, comfort and smile confidence.
            </p>

          </div>

          <div className="novaServicesGrid">

            {services.map((service) => (
              <article
                className="novaServiceCard"
                key={service.number}
              >

                <div className="novaServiceImage">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="novaServiceImageOverlay"></div>

                  <span className="novaServiceNumber">
                    {service.number}
                  </span>

                  <span className="novaServiceCategory">
                    {service.category}
                  </span>

                  <span className="novaServiceDuration">
                    <Clock3 size={13} />
                    {service.duration}
                  </span>

                  <span className="novaServiceImageArrow">
                    <ArrowUpRight size={18} />
                  </span>

                </div>

                <div className="novaServiceBody">

                  <div className="novaServiceTitleRow">

                    <div>
                      <small>NOVADENT CARE</small>
                      <h3>{service.title}</h3>
                    </div>

                    <div className="novaServiceIcon">
                      <Smile size={20} />
                    </div>

                  </div>

                  <p>
                    {service.description}
                  </p>

                  <div className="novaServicePoints">

                    {service.points.map((point) => (
                      <span key={point}>
                        <CheckCircle2 size={13} />
                        {point}
                      </span>
                    ))}

                  </div>

                  <Link
                    to="/appointment"
                    className="novaServiceLink"
                  >
                    Book This Service
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="novaServicesBenefits">

        <div className="novaServicesContainer">

          <div className="novaServicesBenefitsHeading">

            <span className="novaServicesMiniTitle">
              WHY NOVADENT
            </span>

            <h2>
              Care designed around
              <span> you.</span>
            </h2>

            <p>
              Every part of your experience is designed to make dental
              care clearer, calmer and more comfortable.
            </p>

          </div>

          <div className="novaServicesBenefitsGrid">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="novaServicesBenefitCard"
                  key={benefit.title}
                >

                  <div className="novaServicesBenefitIcon">
                    <Icon size={23} />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.text}</p>

                  <span className="novaServicesBenefitArrow">
                    <ArrowUpRight size={17} />
                  </span>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* SERVICE JOURNEY */}
      <section className="novaServicesJourney">

        <div className="novaServicesContainer">

          <div className="novaServicesJourneyGrid">

            <div className="novaServicesJourneyImage">

              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                alt="Modern dental consultation"
                loading="lazy"
              />

              <div className="novaServicesJourneyBadge">
                <HeartPulse size={19} />

                <div>
                  <strong>Personalized</strong>
                  <span>Dental care</span>
                </div>
              </div>

            </div>

            <div className="novaServicesJourneyContent">

              <span className="novaServicesMiniTitle">
                YOUR DENTAL JOURNEY
              </span>

              <h2>
                Clear care from
                <span> first visit to follow-up.</span>
              </h2>

              <p>
                We keep your dental journey simple and transparent,
                helping you understand what happens at every stage.
              </p>

              <div className="novaServicesJourneySteps">

                <div className="novaServicesJourneyStep">
                  <span>01</span>

                  <div>
                    <h3>Understand</h3>
                    <p>
                      We listen to your concerns and understand your
                      dental goals.
                    </p>
                  </div>
                </div>

                <div className="novaServicesJourneyStep">
                  <span>02</span>

                  <div>
                    <h3>Plan</h3>
                    <p>
                      We explain suitable options and create a clear
                      treatment approach.
                    </p>
                  </div>
                </div>

                <div className="novaServicesJourneyStep">
                  <span>03</span>

                  <div>
                    <h3>Care</h3>
                    <p>
                      Our team provides thoughtful treatment with a
                      focus on your comfort.
                    </p>
                  </div>
                </div>

              </div>

              <Link
                to="/appointment"
                className="novaServicesJourneyButton"
              >
                Start Your Dental Journey
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="novaServicesCTA">

        <div className="novaServicesCTAOverlay"></div>

        <div className="novaServicesContainer novaServicesCTAContent">

          <span className="novaServicesCTAIcon">
            <Sparkles size={23} />
          </span>

          <span className="novaServicesMiniTitle light">
            READY TO TAKE THE NEXT STEP?
          </span>

          <h2>
            Your healthier smile
            <span> starts with a conversation.</span>
          </h2>

          <p>
            Tell us about your dental concerns and let our team help
            you understand the right next step.
          </p>

          <div className="novaServicesCTAActions">

            <Link
              to="/appointment"
              className="novaServicesCTAPrimary"
            >
              <Stethoscope size={18} />
              Book an Appointment
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="novaServicesCTASecondary"
            >
              Contact NOVADENT
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}