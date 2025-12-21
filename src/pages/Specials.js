import Special1 from "../images/travel4.jpg";
import Special2 from "../images/travel2.jpg";
import Special3 from "../images/travel1.jpg";
import Special4 from "../images/travel5.jpg";
import Special5 from "../images/travel3.jpg";


import SpecialsCarousel from "../components/SpecialsCarousel";

const Specials = () => {
  const Special = [Special1, Special2, Special3, Special4, Special5];

  return (
    <>

<section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
              <div className="section-title">
              
              <div className="row info mb-6">
              <h2>Special Tours </h2>
              </div><br/>
              <SpecialsCarousel images={Special} interval={2000} /><br/>
          
          </div>
          </div>
        </section>
    </>
  );
};

export default Specials;