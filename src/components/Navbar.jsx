import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Doctors", "/doctors"],
  ["Treatments", "/treatments"],
  ["Gallery", "/gallery"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="novaNavbar">
        <div className="novaNavbarInner">

          <Link
            to="/"
            className="novaBrand"
            onClick={() => setOpen(false)}
          >
            <div className="novaLogoWrap">
              <div className="novaLogo">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C12 8 8 13 8 20C8 28 13 34 14 42C15 50 17 56 22 56C27 56 27 47 32 47C37 47 37 56 42 56C47 56 49 50 50 42C51 34 56 28 56 20C56 13 52 8 46 8C40 8 37 12 32 12C27 12 24 8 18 8Z"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="novaSparkle">
                <Sparkles size={10} />
              </span>
            </div>

            <div className="novaBrandText">
              <strong>NOVADENT</strong>
              <span>DENTAL CARE</span>
            </div>
          </Link>

          <nav className={`novaNavigation ${open ? "isOpen" : ""}`}>
            <div className="novaNavLinks">

              {links.map(([name, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `novaNavLink ${isActive ? "isActive" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{name}</span>

                      {isActive && (
                        <span className="activeDot"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

            </div>

            <Link
              to="/appointment"
              className="novaMobileAppointment"
              onClick={() => setOpen(false)}
            >
              <CalendarDays size={18} />
              <span>Book Your Appointment</span>
              <ArrowUpRight size={17} />
            </Link>
          </nav>

          <Link
            to="/appointment"
            className="novaDesktopCTA"
            onClick={() => setOpen(false)}
          >
            <span className="ctaIcon">
              <CalendarDays size={16} />
            </span>

            <span className="ctaText">
              <small>READY TO SMILE?</small>
              <strong>Book Appointment</strong>
            </span>

            <span className="ctaArrow">
              <ArrowUpRight size={17} />
            </span>
          </Link>

          <button
            type="button"
            className="novaMenuButton"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      <div className="novaMobileBar">

        <a href="tel:+919876543210">
          <Phone size={17} />
          <span>Call Clinic</span>
        </a>

        <div className="novaBarDivider"></div>

        <Link to="/appointment">
          <CalendarDays size={17} />
          <span>Book Appointment</span>
        </Link>

      </div>
    </>
  );
}