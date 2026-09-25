import { Link } from "react-router-dom";
import { ArrowUpRight, Stethoscope } from "lucide-react";

export default function DoctorCard({
  name,
  specialty,
  img,
}) {
  return (
    <article className="card doctor">

      {/* Doctor Image */}
      <div className="doctorImage">
        <img src={img} alt={name} />

        <div className="doctorOverlay">
          <span className="doctorBadge">
            <Stethoscope size={16} />
            Dental Expert
          </span>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="cardbody doctorBody">

        <span className="doctorLabel">
          PROFESSIONAL DENTIST
        </span>

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
          className="doctorLink"
        >
          <span>Book Consultation</span>
          <ArrowUpRight size={18} />
        </Link>

      </div>
    </article>
  );
}