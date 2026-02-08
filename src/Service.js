import { Link } from "react-router-dom";
import React from "react";

function Service() {
  // Service data
  const servicesData = [
    {
      category: "Facial Treatments",
      categoryImage:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      treatments: [
        {
          name: "Hydrating Facial",
          duration: "60 min",
          price: "$95",
          description:
            "Deep hydration therapy for dry, tired skin with premium serums",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeWuUc2_a8LMR5Z0z3DYCeYKQMUNSuPN6_A&s",
        },
        {
          name: "Anti-Aging Facial",
          duration: "75 min",
          price: "$125",
          description:
            "Advanced treatment to reduce fine lines and restore firmness",
          image:
            "https://lirp.cdn-website.com/bcfa86bb/dms3rep/multi/opt/Anti-Aging+Facials+Techniques+and+Key+Ingredients-640w.jpg",
        },
        {
          name: "Acne Treatment",
          duration: "60 min",
          price: "$105",
          description:
            "Clear breakouts and prevent future acne with medical-grade products",
          image:
            "https://ladermaskinclinic.com/wp-content/uploads/2023/09/young-woman-cosmetology-clinic-undergoing-acne-treatment-with-injections-effective-remedy_168410-1393-removebg-preview.png",
        },
        {
          name: "Brightening Facial",
          duration: "60 min",
          price: "$110",
          description: "Even skin tone and reduce dark spots for radiant glow",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZOOGFeq98RF2dcLr1X3vNpUUR67msCMQ3w&s",
        },
      ],
    },
    {
      category: "Face Lift & Contouring",
      categoryImage:
        "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80",
      treatments: [
        {
          name: "Non-Surgical Face Lift",
          duration: "90 min",
          price: "$280",
          description: "Advanced lifting and tightening without surgery",
          image:
            "https://www.drbasner.com/wp-content/uploads/2024/12/image-surgical-vs-nonsurgical-face-lift.jpg",
        },
        {
          name: "Jawline Contouring",
          duration: "60 min",
          price: "$180",
          description:
            "Define and sculpt your jawline for a youthful appearance",
          image: "https://theaesthetica.com/wp-content/uploads/2025/05/1-3.jpg",
        },
        {
          name: "Cheek Augmentation",
          duration: "75 min",
          price: "$220",
          description: "Add volume and definition to cheekbones naturally",
          image:
            "https://jasonchampagnemd.com/wp-content/uploads/2024/03/Cheek-Augmentation-Beverly-Hills-scaled.jpeg",
        },
      ],
    },
    {
      category: "Body Treatments",
      categoryImage:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      treatments: [
        {
          name: "Full Body Massage",
          duration: "90 min",
          price: "$140",
          description: "Deep relaxation massage for total body wellness",
          image:
            "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80",
        },
        {
          name: "Body Scrub & Wrap",
          duration: "75 min",
          price: "$130",
          description:
            "Exfoliate and nourish your entire body with premium products",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI7BK5iIQnqOUDGCJDIsz880ApOGpne_Xpg&s",
        },
        {
          name: "Aromatherapy Massage",
          duration: "60 min",
          price: "$120",
          description:
            "Therapeutic massage with essential oils for deep relaxation",
          image:
            "https://talkofthetownhairspa.com/wp-content/uploads/2019/07/aromaheroy.jpg",
        },
        {
          name: "Hot Stone Therapy",
          duration: "90 min",
          price: "$155",
          description: "Heated stones to melt away tension and stress",
          image:
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80",
        },
      ],
    },
    {
      category: "Nail Services",
      categoryImage:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      treatments: [
        {
          name: "Classic Manicure",
          duration: "45 min",
          price: "$45",
          description: "Polish and perfection for beautiful hands",
          image:
            "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80",
        },
        {
          name: "Gel Manicure",
          duration: "60 min",
          price: "$65",
          description: "Long-lasting color with brilliant shine",
          image:
            "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&q=80",
        },
        {
          name: "Spa Pedicure",
          duration: "60 min",
          price: "$70",
          description: "Luxurious treatment for relaxed, beautiful feet",
          image:
            "https://spacio10.es/Portals/3/NBStore/images/2258/en-US/Spa-Pedicure-60-min.jpg",
        },
        {
          name: "Deluxe Mani-Pedi",
          duration: "90 min",
          price: "$100",
          description: "Complete pampering package for hands and feet",
          image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
        },
      ],
    },
    {
      category: "Skin Rejuvenation",
      categoryImage:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
      treatments: [
        {
          name: "Microdermabrasion",
          duration: "60 min",
          price: "$135",
          description: "Exfoliate and renew skin for a youthful glow",
          image:
            "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/323/323443/microdermabrasion.jpg?w=1155&h=1541",
        },
        {
          name: "Chemical Peel",
          duration: "45 min",
          price: "$150",
          description:
            "Remove damaged skin layers for fresh, radiant complexion",
          image:
            "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80",
        },
        {
          name: "LED Light Therapy",
          duration: "30 min",
          price: "$85",
          description:
            "Advanced technology to reduce wrinkles and improve texture",
          image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80",
        },
      ],
    },
    {
      category: "Laser Treatments",
      categoryImage:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      treatments: [
        {
          name: "Laser Hair Removal",
          duration: "30-60 min",
          price: "$120+",
          description: "Permanent hair reduction with state-of-the-art laser",
          image:
            "https://expressmedspas.com/wp-content/uploads/Procedure-for-Laser-Hair-Removal-on-the-Face-express-med-spa.jpeg",
        },
        {
          name: "Pigmentation Removal",
          duration: "45 min",
          price: "$200",
          description: "Eliminate dark spots and sun damage safely",
          image:
            "https://melior.ee/wp-content/uploads/2025/04/melior-elos-plus.png",
        },
        {
          name: "Skin Tightening",
          duration: "60 min",
          price: "$250",
          description: "Non-invasive laser treatment for firmer, younger skin",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiucFSsI65ZIM5sdSaWZ5OJrIPnHB5B5BBdX_CXSPXkkRF8XXMJsJJZHcnq7aT1F53wC3lw&s=10",
        },
      ],
    },
  ];

  return (
    <div className="page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <h1 className="services-title-animate">Our Services</h1>
        <p className="services-subtitle-animate">
          Indulge in our comprehensive range of beauty treatments
        </p>
      </section>

      {/* Services Content */}
      <section className="services-content-new">
        {servicesData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="service-category-modern">
            {/* Category Header with large image */}
            <div
              className="category-header"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="category-image-container">
                <img src={category.categoryImage} alt={category.category} />
                <div className="category-overlay">
                  <h2 className="category-title-new">{category.category}</h2>
                </div>
              </div>
            </div>

            {/* Individual Treatment Cards */}
            <div className="service-items-grid">
              {category.treatments.map((treatment, treatmentIndex) => (
                <div
                  key={treatmentIndex}
                  className="service-item-modern"
                  style={{
                    animationDelay: `${categoryIndex * 0.1 + treatmentIndex * 0.05}s`,
                  }}
                >
                  {/* Treatment Image */}
                  <div className="service-image-wrapper">
                    <img src={treatment.image} alt={treatment.name} />
                    <div className="service-badge">
                      <span className="badge-price">{treatment.price}</span>
                    </div>
                  </div>

                  {/* Treatment Details */}
                  <div className="service-details">
                    <h3>{treatment.name}</h3>
                    <p className="service-description">
                      {treatment.description}
                    </p>

                    <div className="service-meta">
                      <span className="meta-duration">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM8 4a.75.75 0 01.75.75v3.44l2.03 2.03a.75.75 0 11-1.06 1.06l-2.25-2.25a.75.75 0 01-.22-.53V4.75A.75.75 0 018 4z" />
                        </svg>
                        {treatment.duration}
                      </span>
                      <button className="book-now-btn">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content-animated">
          <h2>Ready to start Your Beauty Routine?</h2>
          <p>Book your appointment today and experience the difference</p>
          <Link to="/contact" className="cta-button">
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Service;
