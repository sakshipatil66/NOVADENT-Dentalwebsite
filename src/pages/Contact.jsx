import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle,
  MessageSquare,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="novaContactPage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="novaContactHero">

        <div className="contactHeroGlow"></div>

        <div className="contactContainer contactHeroGrid">

          <div className="contactHeroContent">

            <span className="contactEyebrow">
              <MessageSquare size={15} />
              NOVADENT · GET IN TOUCH
            </span>

            <h1>
              Let's talk about
              <em> your smile.</em>
            </h1>

            <p>
              Have a question, need help choosing a treatment,
              or simply want to know more about NOVADENT?
              Our team is here to help.
            </p>

            <div className="contactHeroActions">

              <a
                href="#contactForm"
                className="contactPrimaryBtn"
              >
                Send an Enquiry
                <ArrowUpRight size={18} />
              </a>

              <a
                href="tel:+919876543210"
                className="contactPhoneLink"
              >
                <Phone size={17} />
                <span>+91 98765 43210</span>
              </a>

            </div>

            <div className="contactHeroTrust">

              <div>
                <CheckCircle size={16} />
                <span>Quick Response</span>
              </div>

              <div>
                <CheckCircle size={16} />
                <span>Patient First</span>
              </div>

              <div>
                <CheckCircle size={16} />
                <span>Professional Care</span>
              </div>

            </div>

          </div>


          <div className="contactHeroVisual">

            <div className="contactHeroImage">

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=90"
                alt="Modern NOVADENT dental clinic"
              />

              <div className="contactHeroImageOverlay"></div>

            </div>

            <div className="contactHeroFloating">

              <div className="contactFloatingIcon">
                <Sparkles size={19} />
              </div>

              <div>
                <strong>We're here for you</strong>
                <span>Mon – Sat · 9 AM – 6 PM</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section className="contactDetailsSection">

        <div className="contactContainer">

          <div className="contactSectionIntro">

            <div>

              <span className="contactOverline">
                REACH NOVADENT
              </span>

              <small>
                01 / CONTACT DETAILS
              </small>

              <h2>
                We'd love to
                <em> hear from you.</em>
              </h2>

            </div>

            <p>
              Whether you are planning your first visit or already
              part of the NOVADENT family, getting in touch is simple.
            </p>

          </div>


          <div className="contactInfoGrid">

            {/* PHONE */}

            <a
              href="tel:+919876543210"
              className="contactInfoCard"
            >

              <span className="contactInfoNumber">
                01
              </span>

              <div className="contactInfoIcon">
                <Phone size={22} />
              </div>

              <div className="contactInfoContent">

                <span>CALL US</span>

                <h3>
                  +91 98765 43210
                </h3>

                <p>
                  Speak directly with our clinic team.
                </p>

              </div>

              <ArrowUpRight
                className="contactInfoArrow"
                size={19}
              />

            </a>


            {/* EMAIL */}

            <a
              href="mailto:contact@novadent.com"
              className="contactInfoCard"
            >

              <span className="contactInfoNumber">
                02
              </span>

              <div className="contactInfoIcon">
                <Mail size={22} />
              </div>

              <div className="contactInfoContent">

                <span>EMAIL US</span>

                <h3>
                  contact@novadent.com
                </h3>

                <p>
                  Send us your questions anytime.
                </p>

              </div>

              <ArrowUpRight
                className="contactInfoArrow"
                size={19}
              />

            </a>


            {/* LOCATION */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="contactInfoCard"
            >

              <span className="contactInfoNumber">
                03
              </span>

              <div className="contactInfoIcon">
                <MapPin size={22} />
              </div>

              <div className="contactInfoContent">

                <span>VISIT US</span>

                <h3>
                  Pune, Maharashtra
                </h3>

                <p>
                  Main Road, Pune, Maharashtra, India.
                </p>

              </div>

              <ArrowUpRight
                className="contactInfoArrow"
                size={19}
              />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENQUIRY FORM
      ===================================================== */}

      <section
        id="contactForm"
        className="contactFormSection"
      >

        <div className="contactContainer">

          <div className="contactFormHeader">

            <span className="contactOverline">
              SEND AN ENQUIRY
            </span>

            <small>
              02 / LET'S CONNECT
            </small>

            <h2>
              Tell us how
              <em> we can help.</em>
            </h2>

            <p>
              Fill in the form and our team will get back
              to you as soon as possible.
            </p>

          </div>


          <div className="contactFormLayout">

            {/* FORM */}

            <div className="contactFormCard">

              {!submitted ? (

                <form onSubmit={handleSubmit}>

                  <div className="contactFormRow">

                    <div className="contactField">

                      <label>
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                      />

                    </div>


                    <div className="contactField">

                      <label>
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>


                  <div className="contactFormRow">

                    <div className="contactField">

                      <label>
                        Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                      />

                    </div>


                    <div className="contactField">

                      <label>
                        Subject
                      </label>

                      <input
                        type="text"
                        name="subject"
                        placeholder="How can we help?"
                        required
                      />

                    </div>

                  </div>


                  <div className="contactField">

                    <label>
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Write your message here..."
                      required
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="contactSubmitBtn"
                  >

                    <span>
                      Send Message
                    </span>

                    <Send size={17} />

                  </button>


                  <p className="contactFormNote">
                    We respect your privacy and will only use
                    your details to respond to your enquiry.
                  </p>

                </form>

              ) : (

                <div className="contactSuccess">

                  <div className="contactSuccessIcon">
                    <CheckCircle size={42} />
                  </div>

                  <span>
                    MESSAGE SENT
                  </span>

                  <h3>
                    Thank you for reaching out!
                  </h3>

                  <p>
                    Your message has been received.
                    Our team will get back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="contactAgainBtn"
                  >
                    Send Another Message
                    <ArrowUpRight size={17} />
                  </button>

                </div>

              )}

            </div>


            {/* SIDE PANEL */}

            <aside className="contactSidePanel">

              {/* CLINIC HOURS */}

              <div className="contactSideCard">

                <div className="contactSideTop">

                  <Clock3 size={21} />

                  <span>
                    CLINIC HOURS
                  </span>

                </div>

                <h3>
                  When we're
                  <em> available.</em>
                </h3>


                <div className="contactHours">

                  <div>
                    <span>
                      Monday – Friday
                    </span>

                    <strong>
                      9:00 AM – 6:00 PM
                    </strong>
                  </div>


                  <div>
                    <span>
                      Saturday
                    </span>

                    <strong>
                      9:00 AM – 4:00 PM
                    </strong>
                  </div>


                  <div>
                    <span>
                      Sunday
                    </span>

                    <strong>
                      Closed
                    </strong>
                  </div>

                </div>

              </div>


              {/* APPOINTMENT */}

              <div className="contactSideCard contactAppointmentCard">

                <CalendarDays size={25} />

                <span>
                  READY TO VISIT?
                </span>

                <h3>
                  Book your
                  <em> appointment.</em>
                </h3>

                <p>
                  Skip the enquiry and directly schedule
                  your preferred appointment.
                </p>

                <Link
                  to="/appointment"
                  className="contactAppointmentBtn"
                >
                  Book Appointment
                  <ArrowUpRight size={17} />
                </Link>

              </div>


              {/* EMAIL */}

              <div className="contactSideCard contactEmailCard">

                <Mail size={24} />

                <span>
                  EMAIL NOVADENT
                </span>

                <h3>
                  We're happy
                  <em> to help.</em>
                </h3>

                <p>
                  Have a question about treatments,
                  appointments or dental care?
                </p>

                <a
                  href="mailto:contact@novadent.com"
                  className="contactSideEmail"
                >
                  contact@novadent.com
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION / MAP
      ===================================================== */}

      <section className="contactLocationSection">

        <div className="contactContainer contactLocationGrid">

          {/* LOCATION CONTENT */}

          <div className="contactLocationContent">

            <span className="contactOverline">
              FIND US
            </span>

            <small>
              03 / OUR LOCATION
            </small>

            <h2>
              Come visit
              <em> NOVADENT.</em>
            </h2>

            <p>
              Our clinic is designed to make every visit
              comfortable, welcoming and stress-free.
            </p>


            <div className="contactLocationAddress">

              <div className="locationAddressIcon">
                <MapPin size={20} />
              </div>

              <div>

                <strong>
                  NOVADENT Dental Care
                </strong>

                <span>
                  Main Road, Pune,
                  Maharashtra, India
                </span>

              </div>

            </div>


            <div className="contactLocationMeta">

              <div>

                <Clock3 size={17} />

                <span>
                  Mon – Sat
                  <strong>
                    9 AM – 6 PM
                  </strong>
                </span>

              </div>


              <div>

                <Phone size={17} />

                <span>
                  Call us
                  <strong>
                    +91 98765 43210
                  </strong>
                </span>

              </div>

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="contactMapLink"
            >
              Open in Google Maps
              <ArrowUpRight size={17} />
            </a>

          </div>


          {/* MAP */}

          <div className="contactMapVisual">

            <div className="contactMapTopBar">

              <div>

                <span>
                  NOVADENT LOCATION
                </span>

                <strong>
                  Pune, Maharashtra
                </strong>

              </div>

              <MapPin size={21} />

            </div>


            <div className="contactMapCanvas">

              <div className="mapGridLines"></div>

              <div className="mapRoad roadOne"></div>
              <div className="mapRoad roadTwo"></div>
              <div className="mapRoad roadThree"></div>
              <div className="mapRoad roadFour"></div>

              <div className="mapArea areaOne">
                Koregaon Park
              </div>

              <div className="mapArea areaTwo">
                Central Pune
              </div>

              <div className="mapArea areaThree">
                Main Road
              </div>


              <div className="mapPinLarge">

                <span className="mapPulse"></span>

                <div>
                  <MapPin size={28} />
                </div>

              </div>


              <div className="mapLocationLabel">

                <strong>
                  NOVADENT
                </strong>

                <span>
                  Dental Care · Pune
                </span>

              </div>

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="mapOpenButton"
            >
              Open Location
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
          No duplicate Book Appointment here.
      ===================================================== */}

      <section className="contactFinalCTA">

        <div className="contactContainer">

          <div className="contactCTACard">

            <div>

              <span>
                YOUR SMILE · OUR PRIORITY
              </span>

              <h2>
                Have a question?
                <em> Let's talk.</em>
              </h2>

              <p>
                Our friendly dental team is ready to help.
              </p>

            </div>


            <div className="contactCTAActions">

              <a
                href="tel:+919876543210"
                className="contactCTASecondary"
              >
                <Phone size={17} />
                Call Clinic
              </a>


              <a
                href="mailto:contact@novadent.com"
                className="contactCTAButton"
              >
                Email NOVADENT
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}