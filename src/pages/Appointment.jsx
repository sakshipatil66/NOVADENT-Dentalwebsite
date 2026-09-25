import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  "General Dental Care",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Cosmetic Dentistry",
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewAppointment = () => {
    setSubmitted(false);

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <main className="novaAppointmentPage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="novaAppointmentHero">

        <div className="appointmentHeroGlow"></div>

        <div className="appointmentContainer appointmentHeroGrid">

          {/* HERO CONTENT */}

          <div className="appointmentHeroContent">

            <span className="appointmentEyebrow">
              <CalendarDays size={16} />
              NOVADENT · APPOINTMENTS
            </span>

            <h1>
              Your smile
              <em> deserves better care.</em>
            </h1>

            <p>
              Schedule a consultation with our dental team and
              take the first step toward a healthier, more confident smile.
            </p>

            <div className="appointmentHeroActions">

              <a
                href="#appointmentForm"
                className="appointmentPrimaryBtn"
              >
                Book Your Visit
                <ArrowUpRight size={18} />
              </a>

              <a
                href="tel:+919876543210"
                className="appointmentPhoneBtn"
              >
                <Phone size={17} />
                <span>+91 98765 43210</span>
              </a>

            </div>

            <div className="appointmentTrustRow">

              <div>
                <CheckCircle size={17} />
                <span>Easy Booking</span>
              </div>

              <div>
                <ShieldCheck size={17} />
                <span>Patient First</span>
              </div>

              <div>
                <Sparkles size={17} />
                <span>Modern Care</span>
              </div>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="appointmentHeroVisual">

            <div className="appointmentHeroImage">

              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90"
                alt="Modern NOVADENT dental clinic"
              />

              <div className="appointmentImageOverlay"></div>

            </div>

            <div className="appointmentFloatingCard">

              <div className="floatingIcon">
                <CalendarDays size={20} />
              </div>

              <div>
                <strong>Flexible Scheduling</strong>
                <span>Choose a convenient time</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="appointmentIntro">

        <div className="appointmentContainer appointmentIntroGrid">

          <div>

            <span className="appointmentOverline">
              PLAN YOUR VISIT
            </span>

            <small>
              01 / APPOINTMENT
            </small>

            <h2>
              Simple booking.
              <em> Comfortable care.</em>
            </h2>

          </div>

          <div className="appointmentIntroText">

            <p>
              Tell us a little about your dental needs and preferred
              appointment time. Our team will help you plan your visit.
            </p>

            <div className="appointmentInfoCards">

              <div className="appointmentInfoCard">

                <Clock3 size={20} />

                <div>
                  <strong>Clinic Hours</strong>
                  <span>Mon – Sat · 9 AM – 6 PM</span>
                </div>

              </div>

              <div className="appointmentInfoCard">

                <MapPin size={20} />

                <div>
                  <strong>Visit Us</strong>
                  <span>Pune, Maharashtra</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          APPOINTMENT FORM
      ===================================================== */}

      <section
        id="appointmentForm"
        className="appointmentFormSection"
      >

        <div className="appointmentContainer">

          <div className="appointmentSectionHeading">

            <div>

              <span className="appointmentOverline">
                BOOK YOUR VISIT
              </span>

              <small>
                02 / YOUR DETAILS
              </small>

              <h2>
                Let's plan your
                <em> next visit.</em>
              </h2>

            </div>

            <p>
              Fill in the details below and our team will get in touch
              regarding your appointment.
            </p>

          </div>

          <div className="appointmentFormLayout">

            {/* =================================================
                FORM CARD
            ================================================= */}

            <div className="appointmentFormCard">

              {!submitted ? (

                <form onSubmit={handleSubmit}>

                  {/* NAME + PHONE */}

                  <div className="formRow">

                    <div className="formField">

                      <label htmlFor="appointment-name">
                        Full Name
                      </label>

                      <input
                        id="appointment-name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="formField">

                      <label htmlFor="appointment-phone">
                        Phone Number
                      </label>

                      <input
                        id="appointment-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* EMAIL + SERVICE */}

                  <div className="formRow">

                    <div className="formField">

                      <label htmlFor="appointment-email">
                        Email Address
                      </label>

                      <input
                        id="appointment-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="formField">

                      <label htmlFor="appointment-service">
                        Dental Service
                      </label>

                      <select
                        id="appointment-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}

                      </select>

                    </div>

                  </div>

                  {/* DATE + TIME */}

                  <div className="formRow">

                    <div className="formField">

                      <label htmlFor="appointment-date">
                        Preferred Date
                      </label>

                      <input
                        id="appointment-date"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="formField">

                      <label htmlFor="appointment-time">
                        Preferred Time
                      </label>

                      <select
                        id="appointment-time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select a time
                        </option>

                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                          >
                            {time}
                          </option>
                        ))}

                      </select>

                    </div>

                  </div>

                  {/* MESSAGE */}

                  <div className="formField">

                    <label htmlFor="appointment-message">
                      Message
                    </label>

                    <textarea
                      id="appointment-message"
                      name="message"
                      rows="5"
                      placeholder="Tell us anything we should know..."
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="appointmentSubmitBtn"
                  >

                    <span>
                      Request Appointment
                    </span>

                    <ArrowUpRight size={19} />

                  </button>

                  <p className="appointmentFormNote">
                    By submitting this form, you agree to be contacted
                    regarding your appointment request.
                  </p>

                </form>

              ) : (

                /* =================================================
                   SUCCESS MESSAGE
                ================================================= */

                <div className="appointmentSuccess">

                  <div className="successIcon">
                    <CheckCircle size={42} />
                  </div>

                  <span>
                    REQUEST RECEIVED
                  </span>

                  <h3>
                    Thank you, {form.name || "there"}!
                  </h3>

                  <p>
                    Your appointment request has been received.
                    Our team will contact you to confirm the
                    appointment details.
                  </p>

                  <button
                    type="button"
                    onClick={handleNewAppointment}
                    className="appointmentAgainBtn"
                  >
                    Book Another Appointment
                    <ArrowUpRight size={18} />
                  </button>

                </div>

              )}

            </div>

            {/* =================================================
                SIDE INFORMATION
            ================================================= */}

            <aside className="appointmentSide">

              {/* CARD 01 */}

              <div className="appointmentSideCard appointmentHighlight">

                <span className="appointmentSideNumber">
                  01
                </span>

                <CalendarDays size={28} />

                <h3>
                  Find a time
                  <br />
                  that works for you.
                </h3>

                <p>
                  Choose your preferred date and time.
                  We'll confirm availability with you.
                </p>

              </div>

              {/* CARD 02 */}

              <div className="appointmentSideCard">

                <span className="appointmentSideNumber">
                  02
                </span>

                <Phone size={24} />

                <h3>
                  Prefer to call?
                </h3>

                <p>
                  Our team is happy to help you schedule
                  your visit over the phone.
                </p>

                <a href="tel:+919876543210">

                  +91 98765 43210

                  <ArrowUpRight size={16} />

                </a>

              </div>

              {/* CARD 03 */}

              <div className="appointmentSideCard">

                <span className="appointmentSideNumber">
                  03
                </span>

                <Mail size={24} />

                <h3>
                  Have a question?
                </h3>

                <p>
                  Send us an email and we'll help you
                  with your dental care questions.
                </p>

                <a href="mailto:hello@novadent.com">

                  hello@novadent.com

                  <ArrowUpRight size={16} />

                </a>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="appointmentFinalCTA">

        <div className="appointmentContainer">

          <div className="appointmentCTACard">

            <div>

              <span>
                YOUR SMILE · OUR PRIORITY
              </span>

              <h2>
                Ready to make your
                <em> next smile move?</em>
              </h2>

              <p>
                Start with a consultation at NOVADENT.
              </p>

            </div>

            <Link
              to="/contact"
              className="appointmentCTAButton"
            >
              Contact NOVADENT
              <ArrowUpRight size={19} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}