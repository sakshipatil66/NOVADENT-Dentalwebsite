import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Stethoscope,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function DoctorCard({
  name,
  specialty,
  img,
}) {
  return (
    <article className="card doctor novaDoctorMiniCard">
      {/* Doctor Image */}
      <div className="doctorImage novaDoctorMiniImage">
        <img src={img} alt={name} loading="lazy" />

        <div className="doctorOverlay novaDoctorMiniOverlay">
          <span className="doctorBadge">
            <Stethoscope size={15} />
            Dental Expert
          </span>

          <span className="novaDoctorMiniSparkle">
            <Sparkles size={15} />
          </span>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="cardbody doctorBody novaDoctorMiniBody">
        <div className="novaDoctorMiniTop">
          <span className="doctorLabel">
            PROFESSIONAL DENTIST
          </span>

          <span className="novaDoctorMiniYears">
            10+ YRS
          </span>
        </div>

        <h3>{name}</h3>

        <p className="doctorSpecialty">
          {specialty}
        </p>

        <div className="doctorExperience">
          <span>10+</span>
          <small>Years Experience</small>
        </div>

        <p className="doctorText">
          Dedicated to providing comfortable, personalized
          and modern dental care for every patient.
        </p>

        <Link
          to="/appointment"
          className="doctorLink novaDoctorMiniLink"
        >
          <span>
            <CalendarDays size={16} />
            Book Consultation
          </span>

          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}