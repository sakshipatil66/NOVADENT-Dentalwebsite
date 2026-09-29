import { useState } from "react";

import gallery01 from "../assets/gallery/gallery-01.jpg";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";
import gallery05 from "../assets/gallery/gallery-05.jpg";
import gallery06 from "../assets/gallery/gallery-06.jpg";
import gallery07 from "../assets/gallery/gallery-07.jpg";
import gallery08 from "../assets/gallery/gallery-08.jpg";

const galleryImages = [
  {
    id: 1,
    image: gallery01,
    title: "Modern Dental Clinic",
    category: "Clinic",
  },
  {
    id: 2,
    image: gallery02,
    title: "Advanced Dental Care",
    category: "Treatment",
  },
  {
    id: 3,
    image: gallery03,
    title: "Comfortable Environment",
    category: "Clinic",
  },
  {
    id: 4,
    image: gallery04,
    title: "Advanced Dental Technology",
    category: "Technology",
  },
  {
    id: 5,
    image: gallery05,
    title: "Modern Technology",
    category: "Technology",
  },
  {
    id: 6,
    image: gallery06,
    title: "Patient Care",
    category: "Patients",
  },
  {
    id: 7,
    image: gallery07,
    title: "Dental Excellence",
    category: "Clinic",
  },
  {
    id: 8,
    image: gallery08,
    title: "Beautiful Smiles",
    category: "Patients",
  },
];

const categories = [
  "All",
  "Clinic",
  "Treatment",
  "Technology",
  "Patients",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="nova-gallery">

      {/* =====================================================
          HERO — KEEP EXACTLY AS IT IS
      ===================================================== */}

      <section
        className="nova-gallery-hero"
        aria-labelledby="gallery-hero-title"
      >
        <img
          src={gallery01}
          alt="Modern NOVADENT Dental Clinic interior"
        />

        <div
          className="nova-gallery-hero-overlay"
          aria-hidden="true"
        />

        <div className="nova-gallery-hero-content">
          <p>NOVADENT · OUR GALLERY</p>

          <h1 id="gallery-hero-title">
            See the space.
            <br />
            <i>Feel the difference.</i>
          </h1>

          <span>
            Explore our modern clinic, advanced technology,
            expert doctors and patient-focused dental experience.
          </span>
        </div>
      </section>


      {/* =====================================================
          PROFESSIONAL INTRO
      ===================================================== */}

      <section
        className="nova-gallery-intro-pro"
        aria-labelledby="gallery-intro-title"
      >
        <div className="nova-gallery-intro-pro-inner">

          <div className="nova-gallery-intro-pro-left">
            <span>THE NOVADENT EXPERIENCE</span>

            <h2 id="gallery-intro-title">
              Designed around
              <br />
              <i>your comfort.</i>
            </h2>
          </div>

          <div className="nova-gallery-intro-pro-right">

            <div className="nova-gallery-intro-line" />

            <p>
              At NOVADENT, modern dentistry meets thoughtful
              design. Every space is created to make your
              dental journey calm, comfortable and reassuring.
            </p>

            <p>
              From advanced treatment rooms to welcoming
              patient spaces, every detail reflects our
              commitment to comfortable dental care.
            </p>

            <div className="nova-gallery-intro-meta">
              <span>01</span>
              <span>MODERN · CALM · PATIENT FIRST</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          GALLERY COLLECTION
      ===================================================== */}

      <section
        className="nova-gallery-collection-pro"
        aria-labelledby="gallery-collection-title"
      >
        <div className="nova-gallery-collection-inner">

          <div className="nova-gallery-collection-header">

            <div>
              <span>INSIDE NOVADENT</span>

              <h2 id="gallery-collection-title">
                Moments from
                <br />
                <i>our clinic.</i>
              </h2>
            </div>

            <div className="nova-gallery-image-count">
              <strong>{filteredImages.length}</strong>
              <span>Images</span>
            </div>

          </div>


          {/* FILTERS */}

          <div
            className="nova-gallery-filters-pro"
            aria-label="Gallery categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
                aria-pressed={
                  activeCategory === category
                }
              >
                {category}
              </button>
            ))}
          </div>


          {/* IMAGE GRID */}

          <div className="nova-gallery-grid-pro">

            {filteredImages.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="nova-gallery-item-pro"
                onClick={() => setSelectedImage(item)}
                style={{
                  "--gallery-delay": `${index * 0.08}s`,
                }}
                aria-label={`View ${item.title}`}
              >

                <img
                  src={item.image}
                  alt={`${item.title} at NOVADENT Dental Care`}
                  loading="lazy"
                />

                <div className="nova-gallery-item-shade" />

                <div className="nova-gallery-item-content">
                  <span>{item.category}</span>

                  <h3>{item.title}</h3>

                  <small>
                    View Image <b>↗</b>
                  </small>
                </div>

                <strong className="nova-gallery-item-number">
                  {String(item.id).padStart(2, "0")}
                </strong>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PREMIUM CTA
      ===================================================== */}

      <section
        className="nova-gallery-final-cta"
        aria-labelledby="gallery-cta-title"
      >

        <div className="nova-gallery-final-cta-image">
          <img
            src={gallery03}
            alt="Comfortable NOVADENT dental care"
          />
        </div>

        <div className="nova-gallery-final-cta-overlay" />

        <div className="nova-gallery-final-cta-content">

          <div className="nova-gallery-hours">
            <span>◷</span>
            MONDAY – SATURDAY · 9 AM – 6 PM
          </div>

          <span className="nova-gallery-cta-label">
            YOUR SMILE DESERVES CARE
          </span>

          <h2 id="gallery-cta-title">
            Ready for your
            <br />
            <i>next step?</i>
          </h2>

          <p>
            Talk with our team about your dental concerns,
            treatment options and the next step for your smile.
          </p>

          <a
            href="/contact"
            className="nova-gallery-final-button"
          >
            Contact NOVADENT
            <b>→</b>
          </a>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="nova-gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
        >
          <div
            className="nova-gallery-lightbox-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="nova-gallery-close"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={`${selectedImage.title} at NOVADENT Dental Care`}
            />

            <span>{selectedImage.category}</span>

            <h3 id="gallery-lightbox-title">
              {selectedImage.title}
            </h3>

          </div>
        </div>
      )}

    </main>
  );
}

export default Gallery;