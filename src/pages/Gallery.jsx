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

  return (
    <main className="nova-gallery">

      <section className="nova-gallery-hero">
        <img
          src={gallery01}
          alt="NOVADENT Dental Clinic"
        />

        <div className="nova-gallery-hero-overlay" />

        <div className="nova-gallery-hero-content">
          <p>NOVADENT · OUR GALLERY</p>

          <h1>
            See the space.
            <br />
            <i>Feel the difference.</i>
          </h1>

          <span>
            Explore our modern clinic, advanced technology,
            expert doctors and patient-focused dental experience.
          </span>

          <a href="#gallery-grid">
            Explore Gallery ↓
          </a>
        </div>
      </section>

      <section className="nova-gallery-intro">
        <div className="nova-gallery-container">

          <div>
            <small>THE NOVADENT EXPERIENCE</small>

            <h2>
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

      <section
        className="nova-gallery-section"
        id="gallery-grid"
      >
        <div className="nova-gallery-container">

          <div className="nova-gallery-heading">
            <div>
              <small>INSIDE NOVADENT</small>

              <h2>
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

          <div className="nova-gallery-filters">
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
              >
                {category}
              </button>
            ))}
          </div>

          <div className="nova-gallery-grid">
            {filteredImages.map((item) => (
              <button
                key={item.id}
                type="button"
                className="nova-gallery-card"
                onClick={() =>
                  setSelectedImage(item)
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="nova-gallery-card-overlay">
                  <div>
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                    <span>View Image ↗</span>
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

      <section className="nova-gallery-cta">
        <div className="nova-gallery-container">
<div className="nova-gallery-cta-box">
  <div>
    <small>YOUR SMILE JOURNEY</small>

    <h2>
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

      {selectedImage && (
        <div
          className="nova-gallery-lightbox"
          onClick={() => setSelectedImage(null)}
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
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <small>{selectedImage.category}</small>

            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}

    </main>
  );
}

export default Gallery;