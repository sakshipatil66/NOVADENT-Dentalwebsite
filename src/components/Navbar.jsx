import { useEffect, useState } from "react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu when window becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className={`novaNavbar ${open ? "menuOpen" : ""}`}>
        <div className="novaNavbarInner">

          {/* ================= BRAND ================= */}

          <Link
            to="/"
            className="novaBrand"
            onClick={closeMenu}
            aria-label="NOVADENT Dental Care Home"
          >

            <div className="novaLogoWrap">

              <div className="novaLogo">

                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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

              <strong>
                NOVADENT
              </strong>

              <span>
                DENTAL CARE
              </span>

            </div>

          </Link>


          {/* ================= DESKTOP / MOBILE NAV ================= */}

          <nav
            className={`novaNavigation ${open ? "isOpen" : ""}`}
            aria-label="Main navigation"
          >

            <div className="novaNavLinks">

              {links.map(([name, path]) => (

                <NavLink
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `novaNavLink ${isActive ? "isActive" : ""}`
                  }
                >

                  {({ isActive }) => (
                    <>
                      <span>
                        {name}
                      </span>

                      {isActive && (
                        <span
                          className="activeDot"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}

                </NavLink>

              ))}

            </div>


            {/* MOBILE APPOINTMENT INSIDE MENU */}

            <Link
              to="/appointment"
              className="novaMobileAppointment"
              onClick={closeMenu}
            >

              <span className="mobileAppointmentIcon">
                <CalendarDays size={18} />
              </span>

              <span className="mobileAppointmentText">
                <small>
                  READY TO SMILE?
                </small>

                <strong>
                  Book Your Appointment
                </strong>
              </span>

              <ArrowUpRight size={18} />

            </Link>

          </nav>


          {/* ================= DESKTOP CTA ================= */}

          <Link
            to="/appointment"
            className="novaDesktopCTA"
            onClick={closeMenu}
          >

            <span className="ctaIcon">
              <CalendarDays size={16} />
            </span>


            <span className="ctaText">

              <small>
                READY TO SMILE?
              </small>

              <strong>
                Book Appointment
              </strong>

            </span>


            <span className="ctaArrow">
              <ArrowUpRight size={17} />
            </span>

          </Link>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            className={`novaMenuButton ${open ? "isOpen" : ""}`}
            onClick={() => setOpen((current) => !current)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="main-navigation"
          >

            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>


        {/* MOBILE MENU OVERLAY */}

        {open && (
          <button
            type="button"
            className="novaMenuOverlay"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />
        )}

      </header>


      {/* =====================================================
          MOBILE QUICK ACTION BAR
      ===================================================== */}

      <div className="novaMobileBar">

        <a
          href="tel:+919876543210"
          aria-label="Call NOVADENT clinic"
        >

          <Phone size={17} />

          <span>
            Call Clinic
          </span>

        </a>


        <div
          className="novaBarDivider"
          aria-hidden="true"
        />


        <Link
          to="/appointment"
          onClick={closeMenu}
        >

          <CalendarDays size={17} />

          <span>
            Book Appointment
          </span>

        </Link>

      </div>

    </>
  );
}