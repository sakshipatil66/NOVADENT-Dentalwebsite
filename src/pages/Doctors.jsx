import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Rohan Mehta",
    role: "Lead Dental Surgeon",
    specialty: "General & Restorative Dentistry",
    experience: "12+ Years",
    image: `${import.meta.env.BASE_URL}images/doctors/doctor-01.jpg`,
    description:
      "Focused on preventive, restorative and patient-centered dental care with a gentle and thoughtful approach.",
    skills: [
      "General Dentistry",
      "Restorative Care",
      "Preventive Dentistry",
    ],
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Cosmetic Dental Specialist",
    specialty: "Cosmetic & Smile Dentistry",
    experience: "10+ Years",
    image: `${import.meta.env.BASE_URL}images/doctors/doctor-02.jpg`,
    description:
      "Specializes in creating natural-looking smile improvements through modern cosmetic dental techniques.",
    skills: [
      "Smile Design",
      "Cosmetic Dentistry",
      "Teeth Whitening",
    ],
  },
  {
    name: "Dr. Priya Deshmukh",
    role: "Orthodontic Consultant",
    specialty: "Orthodontics & Alignment",
    experience: "9+ Years",
    image: `${import.meta.env.BASE_URL}images/doctors/doctor-03.jpg`,
    description:
      "Dedicated to comfortable orthodontic care and personalized treatment plans for healthier alignment.",
    skills: [
      "Braces",
      "Clear Aligners",
      "Orthodontics",
    ],
  },
  {
    name: "Dr. Arjun Kulkarni",
    role: "Implant & Oral Care Specialist",
    specialty: "Implant & Restorative Dentistry",
    experience: "11+ Years",
    image: `${import.meta.env.BASE_URL}images/doctors/doctor-04.jpg`,
    description:
      "Provides advanced implant and restorative solutions with a strong focus on comfort and long-term oral health.",
    skills: [
      "Dental Implants",
      "Restorative Dentistry",
      "Oral Care",
    ],
  },
];

const values = [
  {
    icon: HeartPulse,
    title: "Patient First",
    text: "Every treatment plan begins with understanding your needs, comfort and goals.",
  },
  {
    icon: Sparkles,
    title: "Modern Dentistry",
    text: "We combine advanced dental technology with thoughtful clinical care.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    text: "Clear communication, transparent treatment and a comfortable experience.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    text: "Skilled professionals committed to delivering dependable dental care.",
  },
];

const process = [
  {
    number: "01",
    title: "Meet Your Dentist",
    text: "Discuss your concerns, goals and dental history with our team.",
  },
  {
    number: "02",
    title: "Personalized Assessment",
    text: "We carefully assess your oral health and recommend suitable options.",
  },
  {
    number: "03",
    title: "Comfortable Treatment",
    text: "Receive modern dental care in a calm and supportive environment.",
  },
];

export default function Doctors() {
  return (
    <main className="novaDoctorsPage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="novaDoctorsHero"
        aria-labelledby="doctors-hero-title"
      >
        <div
          className="novaDoctorsHeroOverlay"
          aria-hidden="true"
        ></div>

        <div className="novaDoctorsHeroContent">

          <span className="novaDoctorsEyebrow">
            <span aria-hidden="true"></span>
            MEET OUR DENTAL TEAM
          </span>

          <h1 id="doctors-hero-title">
            Experts behind
            <span> your healthiest smile.</span>
          </h1>

          <p>
            Meet our experienced dental professionals dedicated to
            personalized care, modern treatment and confident smiles.
          </p>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="novaDoctorsIntro"
        aria-labelledby="doctors-intro-title"
      >
        <div className="novaDoctorsContainer">

          <div className="novaDoctorsIntroLabel">
            <span>OUR EXPERTISE</span>
            <div aria-hidden="true"></div>
          </div>

          <div className="novaDoctorsIntroGrid">

            <div>
              <h2 id="doctors-intro-title">
                Dentistry with
                <span> skill, care &amp; precision.</span>
              </h2>
            </div>

            <div>
              <p>
                At NOVADENT, our dental team combines clinical experience,
                modern techniques and a patient-first approach to make every
                visit comfortable and meaningful.
              </p>

              <Link
                to="/about"
                className="doctorsTextLink"
                aria-label="Learn more about NOVADENT"
              >
                Learn more about NOVADENT
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DOCTORS
      ===================================================== */}

      <section
        className="novaDoctorsSection"
        aria-labelledby="specialists-title"
      >
        <div className="novaDoctorsContainer">

          <div className="novaDoctorsSectionHeading">

            <div>
              <span className="novaDoctorsMiniTitle">
                OUR SPECIALISTS
              </span>

              <h2 id="specialists-title">
                Meet the people
                <span> behind the care.</span>
              </h2>
            </div>

            <p>
              A multidisciplinary team working together to give you
              personalized and comfortable dental care.
            </p>

          </div>


          <div className="novaDoctorsGrid">

            {doctors.map((doctor) => (
              <article
                className="novaDoctorCard"
                key={doctor.name}
              >

                <div className="novaDoctorImageWrap">

                  <img
                    src={doctor.image}
                    alt={`${doctor.name}, ${doctor.specialty}`}
                    loading="lazy"
                  />

                  <div
                    className="novaDoctorImageOverlay"
                    aria-hidden="true"
                  ></div>

                  <div className="novaDoctorSpecialty">
                    {doctor.specialty}
                  </div>

                  <div className="novaDoctorExperience">
                    <Clock3
                      size={15}
                      aria-hidden="true"
                    />
                    <span>{doctor.experience}</span>
                  </div>

                </div>


                <div className="novaDoctorContent">

                  <span className="novaDoctorRole">
                    {doctor.role}
                  </span>

                  <h3>{doctor.name}</h3>

                  <p>
                    {doctor.description}
                  </p>


                  <div className="novaDoctorSkills">

                    {doctor.skills.map((skill) => (
                      <span key={skill}>
                        <CheckCircle2
                          size={14}
                          aria-hidden="true"
                        />
                        {skill}
                      </span>
                    ))}

                  </div>


                  <div className="novaDoctorCardFooter">

                    <span>
                      Book with our team
                    </span>

                    <Link
                      to="/appointment"
                      aria-label={`Book an appointment with ${doctor.name}`}
                    >
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section
        className="novaDoctorsValues"
        aria-labelledby="why-novadent-title"
      >
        <div className="novaDoctorsContainer">

          <div className="novaDoctorsValuesHeading">

            <span className="novaDoctorsMiniTitle">
              WHY NOVADENT
            </span>

            <h2 id="why-novadent-title">
              Care that feels
              <span> genuinely personal.</span>
            </h2>

            <p>
              Our approach combines modern dentistry with the human side
              of healthcare.
            </p>

          </div>


          <div className="novaDoctorsValuesGrid">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="novaDoctorsValueCard"
                  key={item.title}
                >

                  <div
                    className="novaDoctorsValueIcon"
                    aria-hidden="true"
                  >
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CONSULTATION PROCESS
      ===================================================== */}

      <section
        className="novaDoctorsProcess"
        aria-labelledby="visit-title"
      >
        <div className="novaDoctorsContainer">

          <div className="novaDoctorsProcessGrid">

            <div className="novaDoctorsProcessImage">

              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                alt="Modern dental consultation at NOVADENT"
                loading="lazy"
              />

              <div className="novaDoctorsProcessBadge">

                <Stethoscope
                  size={20}
                  aria-hidden="true"
                />

                <div>
                  <strong>Patient-focused</strong>
                  <span>Dental care</span>
                </div>

              </div>

            </div>


            <div className="novaDoctorsProcessContent">

              <span className="novaDoctorsMiniTitle">
                YOUR VISIT
              </span>

              <h2 id="visit-title">
                A simple approach to
                <span> better dental care.</span>
              </h2>

              <p>
                From your first consultation to your treatment journey,
                our team keeps the experience clear, comfortable and
                personalized.
              </p>


              <div className="novaDoctorsProcessSteps">

                {process.map((item) => (
                  <div
                    className="novaDoctorsProcessStep"
                    key={item.number}
                  >

                    <span className="processNumber">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>

                      <p>{item.text}</p>
                    </div>

                  </div>
                ))}

              </div>


              <Link
                to="/appointment"
                className="doctorsProcessBtn"
                aria-label="Schedule a dental visit with NOVADENT"
              >
                Schedule Your Visit

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