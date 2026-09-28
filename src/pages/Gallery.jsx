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
    title: "Expert Dental Team",
    category: "Doctors",
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
  "Doctors",
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
          HERO
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

          <p>
            NOVADENT · OUR GALLERY
          </p>

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
          INTRO
      ===================================================== */}

      <section
        className="nova-gallery-intro"
        aria-labelledby="gallery-intro-title"
      >

        <div className="nova-gallery-container">

          <div>

            <small>
              THE NOVADENT EXPERIENCE
            </small>

            <h2 id="gallery-intro-title">
              Designed around
              <br />
              <i>your comfort.</i>
            </h2>

          </div>


          <div className="nova-gallery-intro-text">

            <p>
              At NOVADENT, modern dentistry meets thoughtful
              design. Every space is created to make your
              dental journey calm, comfortable and reassuring.
            </p>

            <p>
              Take a closer look at our clinic, treatments,
              technology and patient experience.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        className="nova-gallery-section"
        id="gallery-grid"
        aria-labelledby="gallery-section-title"
      >

        <div className="nova-gallery-container">

          <div className="nova-gallery-heading">

            <div>

              <small>
                INSIDE NOVADENT
              </small>

              <h2 id="gallery-section-title">
                A closer look at
                <br />
                <i>NOVADENT.</i>
              </h2>

            </div>

            <strong>
              {filteredImages.length}
              <span> Images</span>
            </strong>

          </div>


          {/* FILTERS */}

          <div
            className="nova-gallery-filters"
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
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>

            ))}

          </div>


          {/* GALLERY GRID */}

          <div className="nova-gallery-grid">

            {filteredImages.map((item) => (

              <button
                key={item.id}
                type="button"
                className="nova-gallery-card"
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >

                <img
                  src={item.image}
                  alt={`${item.title} at NOVADENT Dental Care`}
                  loading="lazy"
                />


                <div className="nova-gallery-card-overlay">

                  <div>

                    <small>
                      {item.category}
                    </small>

                    <h3>
                      {item.title}
                    </h3>

                    <span>
                      View Image ↗
                    </span>

                  </div>

                </div>


                <b>
                  {String(item.id).padStart(2, "0")}
                </b>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="nova-gallery-cta"
        aria-labelledby="gallery-cta-title"
      >

        <div className="nova-gallery-container">

          <div className="nova-gallery-cta-box">

            <div>

              <small>
                YOUR SMILE JOURNEY
              </small>

              <h2 id="gallery-cta-title">
                Ready for your
                <br />
                <i>next visit?</i>
              </h2>

              <p>
                Experience thoughtful dental care in a
                modern environment designed around you.
              </p>

            </div>

          </div>

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
            onClick={(event) => event.stopPropagation()}
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


            <small>
              {selectedImage.category}
            </small>


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
