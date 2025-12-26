
import * as bi from "react-icons/bi";

const Features = () => {
  return (
    <>
      {/* ===== SECTION 1: TRANSPORT ROUTES ===== */}
      <section id="routes" className="featured" style={{ padding: "50px 0" }}>
        <div className="container">

          <div className="section-title text-center mb-5">
            <h2>Popular Shuttle Routes, Tours & Leisure</h2>
            <p>Reliable transport across South Africa, Eswatini, Lesotho, Botswana & Mozambique</p>
          </div>

          <div className="row">

            {/* Airports */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiSolidPlaneTakeOff /></i>
                <p><h4>Airport Transfers</h4></p>
                <p>
                  OR Tambo Int. & Lanseria – Johannesburg.<br />
                  King Shaka Int. Airport – Durban.<br />
                  Kruger Mpumalanga Int. Airport – Nelspruit.<br />
                  King Mswati III Int. Airport – Sikhuphe.<br />
                  Cape Town International.<br />
                  Bram Fischer Int. Airport - Bloemfontein.<br />
                  Polokwane International Airport – Limpopo
                 East London Airport – Eastern Cape.<br />
                 George Airport – Garden Route.<br />
                 Port Elizabeth / Gqeberha Int. Airport.<br />
                  Maputo International Airport – Mozambique.<br/>
                  Gaborone & Maseru.
                </p>
              </div>
            </div>

            {/* Cross Border & Business */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiTransfer /></i>
                <p><h4>Cross-Border & Business</h4></p>
                <p>
                  Johannesburg ↔ Witbank ↔ Eswatini.<br/>
                  Durban ↔ Ladysmith ↔ Johannesburg ↔ Gaborone.<br/>
                  Johannesburg ↔ Pretoria ↔ Mbombela ↔ Mozambique.<br />
                  Eswatini ↔ Richards Bay ↔ Durban ↔ Port Elizabeth.<br />
                  Kimberly ↔ Bloomfontein ↔ Maseru.<br />
                  Maputo ↔ Eswatini ↔ Durban ↔ East London.
                </p>
              
              </div>
            </div>

            {/* Intercity */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiMap /></i>
                <p><h4>Inter-City & Long Distance</h4></p>
                <p>
                  Johannesburg ↔ Durban ↔ Cape Town.<br />
                  Johannesburg ↔ Mbombela ↔ Durban.<br />
                  Durban ↔ Ballito ↔ Richard's Bay.<br />
                  Cape Town ↔ Sandton ↔ Rosebank.<br />
                  Nelspruit ↔ Pretoria ↔ Midrand.<br />
                  Nelspruit ↔ Durban City ↔ Umhlanga.<br />
                  Mpumalanga ↔ Polokwane ↔ Limpopo.<br />
                  Nelspruit ↔ White River ↔ Hazyview.
                </p>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      <video
        className="w-100 rounded shadow"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src={`${process.env.PUBLIC_URL}/videos/tour1.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video><br/><br/>

      {/* ===== SECTION 2: TOURS, VIP & LIFESTYLE ===== */}
      <section id="experiences" className="featured">
        <div className="container">
          <div className="row">

            {/* Tours */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiCamera /></i>
                <p><h4>Tours & Family Experiences</h4></p>
                <p>
                  Kruger National Park Safaris<br/>
                  Sandton Suncity Tours<br/>
                  Durban City & Beachfront Tours<br />
                  Romantic couple retreats<br />
                  Lodge & resort transfers<br />
                  Private scenic drives<br />
                  Panorama Route & God’s Window<br />
                  Hazyview & Pilgrim’s Rest<br />
                  Blyde River Canyon & Sudwala Caves<br />
                  Kid-friendly & educational tours
                  
                </p>
             
              </div>
            </div>

            {/* Family & Couples */}
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="icon-box h-100">
              <i><bi.BiCustomize /></i>
              <p><h4>Custom & Private Bookings</h4></p>
              <p>
                Door-to-door private trips<br />
                Corporate contracts & long-term hires<br />
                Weddings, events & special occasions<br />
                Couples, families & group travel<br />
                Greivi
                Tailor-made routes on request
              </p>
            
            </div>
          </div>

            {/* VIP & Nightlife */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box h-100">
                <i><bi.BiSolidMusic /></i>
                <p><h4>Out & About VIP Festivals</h4></p>
                <p>
                  Sandton, Rosebank & Melrose Arch.<br />
                  Durban & Umhlanga Nightlife.<br />
                  Maputo City, Costa do Sol & Ponta do Ouro.<br />
                  Eswatini – House on Fire, Rider's Ranch Festivals. <br />
                  Gaborone – Botswana pick-ups & drop-offs. <br />
                  Maseru – Lesotho executive and leisure transfers. <br />
                  Exclusive nightlife & clubs: Taboo Nightclub, Skybar, Club Moyo, Sandton 360, The Vault, etc. <br />
                  Tailor-made routes on request.
                </p>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
