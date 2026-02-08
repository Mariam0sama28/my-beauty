import React from "react";
import { Link } from "react-router-dom";
import "./Experts.css";

function Experts() {
  // Our team of expert doctors
  const teamMembers = [
    {
      id: 1,
      fullName: "Dr. Sarah Mitchell",
      jobTitle: "Lead Aesthetician",
      specialty: "Anti-Aging & Skin Rejuvenation",
      profilePhoto:
        "https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1698752331464-pexels-tessy-agbonome-18828741-min.jpg",
      yearsOfExperience: "15+ Years",
      credentials: [
        "Board Certified",
        "Laser Specialist",
        "Dermatology Expert",
      ],
      aboutDoctor:
        "Dr. Mitchell is renowned for her innovative approach to non-surgical facial rejuvenation and has helped thousands achieve their beauty goals.",
      clientReviews: [
        {
          clientName: "Emma Thompson",
          stars: 5,
          reviewText:
            "Dr. Mitchell transformed my skin! Her expertise and gentle approach made all the difference. Highly recommend!",
          treatmentReceived: "Anti-Aging Facial",
        },
        {
          clientName: "Lisa Rodriguez",
          stars: 5,
          reviewText:
            "Absolutely amazing results! Dr. Mitchell is a true artist. My skin has never looked better.",
          treatmentReceived: "Skin Rejuvenation",
        },
      ],
    },
    {
      id: 2,
      fullName: "Dr. James Chen",
      jobTitle: "Cosmetic Specialist",
      specialty: "Face Lift & Contouring",
      profilePhoto:
        "https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg",
      yearsOfExperience: "12+ Years",
      credentials: [
        "Master Injector",
        "Facial Contouring Expert",
        "Advanced Aesthetics",
      ],
      aboutDoctor:
        "Dr. Chen specializes in non-surgical face lifts and contouring, delivering natural-looking results that enhance your beauty.",
      clientReviews: [
        {
          clientName: "Jennifer Park",
          stars: 5,
          reviewText:
            "Dr. Chen's skill is unmatched. The face lift treatment was painless and the results are incredible!",
          treatmentReceived: "Non-Surgical Face Lift",
        },
        {
          clientName: "Maria Garcia",
          stars: 5,
          reviewText:
            "I look 10 years younger! Dr. Chen understood exactly what I wanted and delivered beyond my expectations.",
          treatmentReceived: "Jawline Contouring",
        },
      ],
    },
    {
      id: 3,
      fullName: "Dr. Emily Davis",
      jobTitle: "Laser Treatment Specialist",
      specialty: "Laser Therapy & Hair Removal",
      profilePhoto: "https://shantimukand.com/images/doctor-single.jpg",
      yearsOfExperience: "10+ Years",
      credentials: [
        "Laser Certified",
        "Medical Aesthetics",
        "Safety Specialist",
      ],
      aboutDoctor:
        "Dr. Davis brings precision and expertise to every laser treatment, ensuring safe and effective results for all skin types.",
      clientReviews: [
        {
          clientName: "Rachel Kim",
          stars: 5,
          reviewText:
            "Dr. Davis made laser hair removal so easy! Professional, knowledgeable, and the results are perfect.",
          treatmentReceived: "Laser Hair Removal",
        },
        {
          clientName: "Sophie Anderson",
          stars: 5,
          reviewText:
            "My pigmentation issues are completely gone! Dr. Davis is a miracle worker.",
          treatmentReceived: "Pigmentation Removal",
        },
      ],
    },
    {
      id: 4,
      fullName: "Dr. Michael Brown",
      jobTitle: "Wellness & Body Specialist",
      specialty: "Body Treatments & Massage Therapy",
      profilePhoto:
        "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*",
      yearsOfExperience: "17+ Years",
      credentials: [
        "Licensed Therapist",
        "Holistic Wellness",
        "Sports Medicine",
      ],
      aboutDoctor:
        "Dr. Brown combines traditional massage techniques with modern wellness practices for comprehensive body care.",
      clientReviews: [
        {
          clientName: "Amanda White",
          stars: 5,
          reviewText:
            "Best massage therapist ever! Dr. Brown's technique relieved all my tension and stress.",
          treatmentReceived: "Full Body Massage",
        },
        {
          clientName: "Jessica Taylor",
          stars: 5,
          reviewText:
            "Dr. Brown's holistic approach is amazing. I feel rejuvenated after every session!",
          treatmentReceived: "Aromatherapy Massage",
        },
      ],
    },
  ];

  return (
    <div className="experts-page">
      {/* Header*/}
      <section className="experts-hero">
        <div className="experts-hero-background"></div>
        <div className="experts-hero-content">
          <h1 className="experts-hero-title">Meet Our Expert Team</h1>
          <p className="experts-hero-subtitle">
            World-class professionals dedicated to your beauty and wellness
          </p>
        </div>
      </section>

      {/* Main experts  */}
      <section className="experts-section">
        <div className="experts-container">
          {teamMembers.map((doctor, index) => (
            <div
              key={doctor.id}
              className="expert-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Doctor photo and hes info */}
              <div className="expert-main">
                <div className="expert-image-wrapper">
                  <img
                    src={doctor.profilePhoto}
                    alt={doctor.fullName}
                    className="expert-image"
                  />
                  <div className="expert-badge">
                    <span>{doctor.yearsOfExperience}</span>
                  </div>
                  <div className="image-shine"></div>
                </div>

                <div className="expert-info">
                  <h2 className="expert-name">{doctor.fullName}</h2>
                  <h3 className="expert-title">{doctor.jobTitle}</h3>
                  <p className="expert-specialization">
                    <span className="spec-icon">⭐</span>
                    {doctor.specialty}
                  </p>
                  <p className="expert-bio">{doctor.aboutDoctor}</p>

                  {/*  badges */}
                  <div className="certifications">
                    {doctor.credentials.map((cert, idx) => (
                      <span key={idx} className="cert-badge">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client reviews  */}
              <div className="expert-reviews">
                <h4 className="reviews-title">Client Reviews</h4>
                <div className="reviews-grid">
                  {doctor.clientReviews.map((review, idx) => (
                    <div key={idx} className="review-card">
                      <div className="review-header">
                        <div className="review-stars">
                          {/*reviews with stars  */}
                          {[...Array(review.stars)].map((_, starIdx) => (
                            <span key={starIdx} className="star">
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className="review-treatment">
                          {review.treatmentReceived}
                        </span>
                      </div>
                      <p className="review-text">"{review.reviewText}"</p>
                      <p className="review-client">- {review.clientName}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bookbutton */}
              <div className="expert-actions">
                <Link to="/contact" className="book-expert-btn">
                  <span>Book Appointment</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experts-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number" data-target="5000">
              5000+
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="15">
              15+
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="50">
              50+
            </div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="98">
              98%
            </div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experts;
