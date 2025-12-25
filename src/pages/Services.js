import * as bi from "react-icons/bi";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <>
      {/* SHUTTLE SHOWCASE VIDEO */}
      <section className="featured shuttle-video-section" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="video-wrapper">
                <video
                  className="w-100 rounded shadow"
                  
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="../videos/showcase.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section><br/>

      {/* CORE SERVICES */}
     <section id="routes" className="featured" >
        <div className="container">

          <div className="section-title text-center mb-5" >
            <h2>Core Transport Services</h2>
            <p>Efficient mobility solutions for individuals, groups, and organisations</p>
          </div>

          <div className="row">
             <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                  <i><bi.BiSolidPlaneTakeOff /></i>
                  <p><h4>Airport Transfers</h4></p>
                  <p>
                  Seamless pickups and drop-offs to and from major airports including
                  OR Tambo, King Shaka, Kruger Mpumalanga, King Mswati III, Lanseria,
                  Maputo International, Gaborone Sir Seretse Khama, and Moshoeshoe I.
                </p>
              </div>
            </div>

             <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiTransfer className="service-icon" /></i>
                <p><h4>Cross-Border Shuttles</h4></p>
                <p>
                  Reliable cross-border transport between South Africa, Eswatini,
                  Mozambique, Botswana, and Lesotho. Ideal for business travel,
                  families, tourists, and long-distance commuters.
                </p>
              </div>
            </div>

             <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiBriefcase className="service-icon" /></i>
                <p><h4>Corporate Transportation</h4></p>
                <p>
                  Professional transport solutions for meetings, conferences,
                  staff movement, executive travel, and institutional contracts
                  with punctuality and discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOURS & LEISURE */}
      <section id="routes" className="featured" >
        <div className="container">

          <div className="section-title text-center mb-5" >
            <h2>Tours & Leisure Experiences</h2>
            <p>Curated travel experiences for families, couples, adults, and children</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiCamera className="service-icon" /></i>
                <p><h4>Sightseeing & Nature Tours</h4></p>
                <p>
                  Guided trips to Kruger National Park, Panorama Route, Blyde River
                  Canyon, Hazyview, White River, Mlilwane, Mantenga, and Malolotja.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiHeart className="service-icon" /></i>
                <p><h4>Couple & Romantic Getaways</h4></p>
                <p>
                  Private transfers for honeymoons, anniversaries, beach escapes,
                  safari lodges, spa retreats, and intimate weekend getaways.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiHappyAlt className="service-icon" /></i>
                <p><h4>Family & Kids-Friendly Tours</h4></p>
                <p>
                  Comfortable family travel to resorts, wildlife parks, beaches,
                  malls, cultural villages, and entertainment destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM & EVENTS */}
      <section id="routes" className="featured">
        <div className="container">

          <div className="section-title text-center mb-5">
            <h2>Premium, Events & Lifestyle Transport</h2>
            <p>Discreet, stylish and dependable transport for special occasions</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiStar className="service-icon" /></i>
                <p><h4>Executive & Lifestyle Transport</h4></p>
                <p>
                  Premium transfers for business leaders, celebrities, diplomats,
                  nightlife venues, private functions, and exclusive locations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiCalendarEvent className="service-icon" /></i>
                <p><h4>Events & Group Transport</h4></p>
                <p>
                  Transport solutions for weddings, funerals, concerts, festivals,
                  conferences, sporting events, and group tours.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="icon-box h-100">
                <i><bi.BiTimeFive className="service-icon" /></i>
                <p><h4>24/7 On-Demand Services</h4></p>
                <p>
                  Flexible scheduling with emergency response and round-the-clock
                  availability to meet urgent or time-sensitive travel needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta text-center">
        <div className="container">
          <p>
            Let Rapid Dynamic Reach (Pty) Ltd handle your other needs
            professionally, safely, and reliably.
          </p>
          <Link to="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20services." className="btn btn-primary btn-lg">
            Make a Booking
          </Link><br/>
        </div><br/>
        
      </section>

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
</section>

    </>
  );
};

export default Services;