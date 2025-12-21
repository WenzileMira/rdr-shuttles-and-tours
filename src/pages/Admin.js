import React, { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Panel from "../components/admin/Panel";
import Overview from "../components/admin/Overview";
import Tables from "../components/admin/Tables";
import Form from "react-bootstrap/Form";
import { Routes, Route } from "react-router-dom";
import * as icons from "react-icons/md";
const Admin = () => {
  const dataUrl1 = "http://localhost:8000/rest-auth/admin-user/";
  const columns1 = [
    "id",
    "username",
    "email",
    "last_login",
    "is_staff",
    "is_active",
    "date_joined",
  ];
  const dataUrl2 = "http://localhost:8000/rest-auth/admin-token/";
  const columns2 = ["id", "username", "auth_token"];
  const dataUrl3 = "http://localhost:8000/rest-auth/admin-email/";
  const columns3 = ["id", "email", "verified", "primary"];
  const dataUrl4 = "http://localhost:8000/rest-auth/admin-group/";
  const columns4 = ["id", "name"];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [is_staff, setStaff] = useState(false);
  const [is_active, setActive] = useState(false);
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex align-items-end flex-wrap">
                      <div className="me-md-3 me-xl-5">
                        <h2>Welcome back,</h2>
                        <p className="mb-md-0">
                          Your analytics dashboard template.
                        </p>
                      </div>
                      <div className="d-flex">
                        <i className="mdi mdi-home text-muted hover-cursor">
                          <icons.MdHome />
                        </i>
                        <p className="text-muted mb-0 hover-cursor">
                          &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                        </p>
                        <p className="text-primary mb-0 hover-cursor">
                          Analytics
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap">
                      <button
                        type="button"
                        className="btn btn-light bg-white btn-icon me-3 d-none d-md-block "
                      >
                        <i className="mdi mdi-download text-muted">
                          <icons.MdDownload />
                        </i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-light bg-white btn-icon me-3 mt-2 mt-xl-0"
                      >
                        <i className="mdi mdi-clock-outline text-muted">
                          <icons.MdLockClock />
                        </i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-light bg-white btn-icon me-3 mt-2 mt-xl-0"
                      >
                        <i className="mdi mdi-plus text-muted">
                          <icons.MdPlusOne />
                        </i>
                      </button>
                      <button className="btn btn-primary mt-2 mt-xl-0">
                        Generate report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      {" "}
                      <Panel />
                      <Overview />
                    </>
                  }
                />
                <Route
                  path="/management"
                  element={
                    <>
                      {" "}
                      <Tables
                        dataUrl={dataUrl1}
                        columns={columns1}
                        updateData={{
                          username: username,
                          email: email,
                          first_name: firstname,
                          last_name: lastname,
                          is_staff: is_staff,
                          is_active: is_active,
                        }}
                        input={
                          <>
                            {" "}
                            <Form.Group className="mb-3">
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                id="username"
                                type="text"
                                placeholder="username"
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                id="email"
                                type="email"
                                placeholder="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Firstname</Form.Label>
                              <Form.Control
                                id="first_name"
                                type="text"
                                placeholder="firstname"
                                autoFocus
                                onChange={(e) => setFirstname(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Lastname</Form.Label>
                              <Form.Control
                                id="last_name"
                                type="text"
                                placeholder="lastname"
                                autoFocus
                                onChange={(e) => setLastname(e.target.value)}
                              />
                            </Form.Group>
                            <div className="">
                            <Form.Check
                              inline
                              label="Yes"
                              name="is_staff"
                              type="radio"
                              onChange={() => setStaff(!is_staff)}
                              id={`is_staff`}
                            />
                            <Form.Check
                              inline
                              label="No"
                              name="is_staff"
                              type="radio"
                              onChange={() => setStaff(is_staff)}
                              id={`is_staff`}
                            />
                            </div>
                            <div className="">
                            <Form.Check
                              inline
                              label="Yes"
                              name="is_active"
                              type="radio"
                              onChange={() => setActive(!is_active)}
                              id={`is_active`}
                            />
                            <Form.Check
                              inline
                              label="No"
                              name="is_active"
                              type="radio"
                              onChange={() => setActive(is_active)}
                              id={`is_active`}
                            />
                            </div>
                          </>
                        }
                        title="User Management"
                      />
                      <Tables
                        dataUrl={dataUrl2}
                        columns={columns2}
                        title="User Token Management"
                      />
                      <Tables
                        dataUrl={dataUrl3}
                        columns={columns3}
                        title="User Email Management"
                      />
                      <Tables
                        dataUrl={dataUrl4}
                        columns={columns4}
                        title="User Group Management"
                      />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
