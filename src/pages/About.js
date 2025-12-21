

import * as biicons from "react-icons/bi";

const About = () => {
  return (
  <>
      <section id="featured" className="featured" style={{alignContent:"center"}}>

          <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>ABOUT US</h2>
            </div><br/>
            <div className="row">
            <div className="col-lg-4">
              <div className="icon-box">
              <div className="count-box">
                <i className="bi bi-card-checklist"></i>
                
                <i>
                  <biicons.BiSmile />
                </i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p><strong>Sustainability and Responsible Tourism</strong></p>
                <p>
                Rapid Dynamic Reach Tours and Shuttling (Pty) Ltd is committed to operating in a responsible and sustainable manner. We support eco-conscious tourism by promoting efficient route planning, responsible fuel usage, and respectful engagement with local communities. Our services are designed to complement destinations that value environmental preservation and sustainable travel practices.
                </p>                
              </div>
              </div>
            </div><br></br>


            <div className="col-lg-4">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <div className="count-box">
                <i>
                  <biicons.BiSolidPlaneLand />
                </i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p><strong>Professional Transport & Shuttle Services</strong></p>
                <p>
                We provide reliable shuttle and transport solutions tailored for tourists, corporate clients, and hospitality partners. Our services include airport transfers, local and cross-border shuttles, corporate transportation, and special event travel, delivered with professionalism, punctuality, and attention to detail.
                </p>

                </div>
              </div>
            </div><br></br>


            <div className="col-lg-4">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <div className="count-box"></div>
                <i>
                  <biicons.BiPhotoAlbum />
                </i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                 <p><strong>Tours and Travel Experiences</strong></p>
                  <p>
                  Rapid Dynamic Reach offers guided sightseeing tours and custom travel experiences designed to showcase local destinations and regional attractions. Whether for leisure, exploration, or group travel, we ensure comfortable and well-coordinated journeys that allow clients to focus on the experience.
                  </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact" style={{padding: "90px 0"}}>
          <div className="container" data-aos="fade-up">
              <div className="section-title">
              
              <div className="row info mb-6">
              <h2>Transparency</h2>
              
              <p>
                  Rapid Dynamic Reach Tours and Shuttling (Pty) Ltd is a registered transportation and tours company providing safe, reliable, and customer-focused mobility solutions across Eswatini, South Africa, and selected neighboring countries. Our services are designed to support seamless travel for individuals, corporate clients, and hospitality partners.

                  We specialize in airport transfers to and from King Mswati III International Airport and OR Tambo International Airport, local and cross-border shuttle services, sightseeing tours, corporate transportation, and long-distance travel for special events. Our operations are structured to accommodate both scheduled and customized transport needs.

                  Safety, compliance, and reliability are central to our operations. Our drivers are experienced, properly licensed, and familiar with both local and cross-border travel requirements. All vehicles are well maintained and operated in accordance with relevant transport regulations. We also offer 24/7 availability to support time-sensitive and emergency travel requirements.

                  Customer satisfaction is at the core of our service delivery. From booking to journey completion, we prioritize clear communication, punctuality, and respectful service. Through consistency, integrity, and continuous improvement, Rapid Dynamic Reach Tours and Shuttling strives to be a dependable transport partner and a trusted name in regional transportation and tourism.
             </p>
              
          </div>
          </div>
          </div>
        </section>


      <section id="featured" className="featured" style={{ padding: "0px 0px", textAlign:"center"}}>
          <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="icon-box">
              <div className="count-box">
                <i className="bi bi-card-checklist"></i>
          
                <i>
                  <biicons.BiHomeHeart />
                </i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p><strong>Cultural Respect and Inclusivity</strong></p>
                <p>
                We operate with respect for diverse cultures, traditions, and communities across all destinations we serve. Our team is committed to providing courteous and inclusive service, ensuring that every client feels valued, respected, and comfortable throughout their journey.
                </p>

              </div>
              </div>
            </div><br></br>


            <div className="col-lg-4">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <div className="count-box">
                <i>
                  <biicons.BiSolidBinoculars />
                </i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
               <p><strong>Safety and Security</strong></p>
              <p>
              The safety of our clients is a top priority. We adhere strictly to transport regulations, maintain high vehicle safety standards, and ensure that all drivers are fully licensed and experienced. Our operations are designed to provide secure, dependable transportation at all times.
              </p>

                </div>
              </div>
            </div><br></br>


            <div className="col-lg-4">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <div className="count-box"></div>
                <i>
                  <biicons.BiSmile />
                </i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                 <p><strong>Reliable and Comfortable Travel</strong></p>
                <p>
                Whether traveling for business, leisure, or special occasions, we focus on delivering smooth, comfortable, and well-coordinated journeys. Our goal is to remove the stress from travel and allow clients to focus on their purpose and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><br/>


      
    </>
  );
};
export default About;
