import * as bi from "react-icons/bi";

const Services = () => {
  return (
    <>
      {/* ================= CORE SERVICES ================= */}
      <section className="featured">
        <div className="container">

          {/* VIDEO HERO */}
          <div className="video-hero">
            <video
              className="video-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src={`${process.env.PUBLIC_URL}/videos/showcase.mp4`}
                type="video/mp4"
              />
            </video>

            <div className="video-overlay">
              <div className="section-title text-center mb-4">
                <h2>Core Transport Services</h2>
                <p>Efficient mobility solutions for individuals, groups, and organisations</p>
              </div>

              <a
                href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20services."
                className="video-cta"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          <br /><br />

          {/* SERVICE CARDS */}
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiSolidPlaneTakeOff /></i>
                <h4>Airport Transfers</h4>
                <p>
                  Seamless pickups and drop-offs to OR Tambo, King Shaka, Kruger
                  Mpumalanga, King Mswati III, Lanseria, Maputo, Gaborone,
                  and Moshoeshoe I.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiTransfer /></i>
                <h4>Cross-Border Shuttles</h4>
                <p>
                  Reliable transport between South Africa, Eswatini,
                  Mozambique, Botswana, and Lesotho.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiBriefcase /></i>
                <h4>Corporate Transportation</h4>
                <p>
                  Professional transport for meetings, conferences,
                  staff movement, and executive travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><br/>

      {/* ================= TOURS & LEISURE ================= */}
      <section className="featured">
        <div className="container">

          <div className="video-hero">
            <video
              className="video-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src={`${process.env.PUBLIC_URL}/videos/tour.mp4`}
                type="video/mp4"
              />
            </video>

            <div className="video-overlay">
              <div className="section-title text-center mb-4">
                <h2>Tours & Leisure Experiences</h2>
                <p>Curated travel experiences for families, couples, adults, and children</p>
              </div>

              <a
                href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20tour%20packages."
                className="video-cta"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          <br /><br />

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiCamera /></i>
                <h4>Sightseeing & Nature Tours</h4>
                <p>
                  Guided trips to Kruger National Park, Panorama Route,
                  Mlilwane, Mantenga, and Malolotja.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiHeart /></i>
                <h4>Couple & Romantic Getaways</h4>
                <p>
                  Private transfers for honeymoons, anniversaries,
                  beach escapes, and safari lodges.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiHappyAlt /></i>
                <h4>Family & Kids-Friendly Tours</h4>
                <p>
                  Comfortable family travel to resorts, wildlife parks,
                  beaches, and entertainment destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><br/>

      {/* ================= PREMIUM & EVENTS ================= */}
      <section className="featured">
        <div className="container">

          <div className="video-hero">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src={`${process.env.PUBLIC_URL}/videos/Tour5.mp4`}
            type="video/mp4"
          />
        </video>

        <div className="video-overlay">
          <div className="section-title text-center mb-5">
            <h2>Premium, Events & Lifestyle Transport</h2>
            <p>Discreet, stylish and dependable transport for special occasions</p>
          </div>
          <a
            href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20tour%20packages."
            className="video-cta"
          >
            Book Now
          </a>
        </div>
      </div><br/><br/>

          

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiStar /></i>
                <h4>Executive & Lifestyle Transport</h4>
                <p>
                  Premium transfers for business leaders, diplomats,
                  nightlife venues, and private functions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiCalendarEvent /></i>
                <h4>Events & Group Transport</h4>
                <p>
                  Transport solutions for weddings, funerals, concerts,
                  conferences, and sporting events.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiTimeFive /></i>
                <h4>24/7 On-Demand Services</h4>
                <p>
                  Flexible scheduling with emergency response and
                  round-the-clock availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA VIDEO ================= */}
      
         {/* ON-DEMAND & PROJECT SERVICES */}
<section id="routes" className="featured">
  <div className="container">

    <div className="section-title text-center mb-5">
      <h2>Other On-Demand & Project Services</h2>
      <p>
        Specialist technical and construction solutions available upon request,
        delivered with the same reliability and professionalism.
      </p>
    </div>

    <div className="row">

      {/* Construction & Renovations */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="icon-box h-100">
          <i><bi.BiBuildingHouse className="service-icon" /></i>
          <p><h4>Construction & Renovations</h4></p>
          <p>
            Residential and commercial construction services including renovations,
            remodeling, structural upgrades, tiling, painting, roofing, and
            property improvements tailored to client requirements.
          </p>
        </div>
      </div>

      {/* Electrical Engineering */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="icon-box h-100">
          <i><bi.BiBoltCircle className="service-icon" /></i>
          <p><h4>Electrical Engineering Services</h4></p>
          <p>
            Certified electrical solutions covering installations, maintenance,
            fault diagnosis, power systems, lighting, backup solutions, and
            compliance-focused electrical work.
          </p>
        </div>
      </div>

      {/* Mechanical Engineering */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="icon-box h-100">
          <i><bi.BiCog className="service-icon" /></i>
          <p><h4>Mechanical Engineering Services</h4></p>
          <p>
            On-demand mechanical expertise including equipment servicing,
            machinery support, installations, maintenance, and technical
            problem-solving across various industries.
          </p>
        </div>
      </div>

    </div>
  </div>
</section><br/>
    </>
  );
};

export default Services;
