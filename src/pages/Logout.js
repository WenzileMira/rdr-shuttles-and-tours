import Logo from "../images/logo.png";
const Logout = ({ setToken, setUser, setMessage, setclassName,  setShow, setSuperuser, setId }) => {
  const LogoutSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_superuser");
    setToken(null);
    setId("");
    setUser("");
    setSuperuser(false);
    setShow(true);
    setclassName(`info`);
    setMessage(`You have successfully logged out`);
  };
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 container mt-lg-0 d-flex align-items-stretch">
              <div action="/" className="php-email-form">
                <div className="row">
                  <center>
                    <img
                      className="logo_showcase mt-4 mb-4 rounded-circle"
                      src={Logo}
                      alt="logo"
                    />
                  </center>
                  <div className="form-group col-md-12">
                    <center>
                    <p className='mb-4'>Are you sure you want to logout?</p>
                      <button
                        className="btn btn-danger"
                        onClick={LogoutSubmit}
                      >
                        Logout
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Logout;