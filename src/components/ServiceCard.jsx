import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServiceCard({ title, text, img, icon = "✦" }) {
  return (
    <article className="serviceCard">
      {/* Image */}
      <div className="serviceCardImage">
        <img src={img} alt={title} loading="lazy" />

        <div className="serviceCardImageOverlay"></div>

        <div className="serviceCardIcon">
          <span>{icon}</span>
        </div>

        <div className="serviceCardImageLabel">
          <span>01</span>
          <span>NOVADENT CARE</span>
        </div>
      </div>

      {/* Content */}
      <div className="serviceCardContent">
        <div className="serviceCardTop">
          <span className="serviceCardSmallTitle">
            DENTAL CARE
          </span>

          <span className="serviceCardCheck">
            <CheckCircle2 size={18} />
          </span>
        </div>

        <h3>{title}</h3>

        <p>{text}</p>

        <div className="serviceCardBottom">
          <Link to="/services" className="serviceCardLink">
            <span>Explore Service</span>

            <span className="serviceCardArrow">
              <ArrowUpRight size={18} />
            </span>
          </Link>

          <span className="serviceCardLine"></span>
        </div>
      </div>
    </article>
  );
}