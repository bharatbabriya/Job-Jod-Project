import React, { useState, useRef } from "react";
import Table from "./Table/Table";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Title from "../Title/Title";
import Searchbar from "../../component/Companies/Searchbar/Searchbar";
import Suggestion from "../../component/Suggestion/Suggestion";
import Filterdata from "./Filterdata/Filterdata";
import { IoIosOptions } from "react-icons/io";
import { Modal, Button } from "react-bootstrap";
import "./Alljob.css";
// import bootstrap from 'bootstrap';
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

function Alljob() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
  // };

  // const [show, setShow] = useState(false);
  // const modalClose = () => setShow(false);
  // const modalShow = () => setShow(true);

  // const modalRef = useRef();

  // const showModal = () => {
  //   const modalEle = modalRef.current;
  //   const bsModal = new bootstrap.Modal(modalEle, {
  //     backdrop: "static",
  //     keyboard: false,
  //   });
  //   bsModal.show();
  // };

  // const hideModal = () => {
  //   const modalEle = modalRef.current;
  //   const bsModal = bootstrap.Modal.getInstance(modalEle);
  //   bsModal.hide();
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dashbord">
        <Sidebar />
        <div className="dashbordContainer">
          <Navbar />
          <div className="dashbordHome mt-4">
            <Title />
            <div className="data-group   ">
              <div className="data">
                <div className="serchbar">
                  <Searchbar />
                </div>
                <div className="suggestion">
                  <Suggestion />
                  <hr className="mt-0" />
                </div>
                <div className="alljob-title d-flex justify-content-between">
                  <div className="title d-flex align-items-center">
                    <h3 className="me-2">title vdfbnfobn </h3>
                    <span>|</span>
                    <h6 className="ms-2 m-0 opacity-50">274 Users</h6>
                  </div>
                  <div className="button">
                    {/* <button >
                       Filter{" "}
                    </button> */}
                    {/* <button>
                      <div class="modal-dialog modal-dialog-centered">
                        {" "}
                        <IoIosOptions className="icon" />
                        Filter
                      </div>
                    </button> */}
                    {/* <div>
                      <Button onClick={handleOpen}>
                        {" "}
                        <IoIosOptions className="icon" />
                        Filter
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <IoIosOptions className="pe-2 fs-3" />
                            Filterlash
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            <div className="date">
                              <span className="mb-2">date</span>
                              <div>
                                <input
                                  type="date"
                                  class="form-control"
                                  placeholder="dd/mm/yyy"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  className="mb-2"
                                />
                              </div>
                              <div>
                                <input
                                  type="date"
                                  class="form-control"
                                  placeholder="dd/mm/yyy"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  className="mb-1"
                                />
                              </div>
                              <span>Option</span>
                              <div class="input-group mb-3 mt-1">
                                <select
                                  class="form-select"
                                  id="inputGroupSelect02"
                                >
                                  <option selected>Choose...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <span>Option</span>
                              <div class="input-group mb-3 mt-1">
                                <select
                                  class="form-select"
                                  id="inputGroupSelect02"
                                >
                                  <option selected>Choose...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <span>Option</span>
                              <div class="input-group mb-3 mt-1">
                                <select
                                  class="form-select"
                                  id="inputGroupSelect02"
                                >
                                  <option selected>Choose...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div> 
                          </Typography>
                        </Box>
                      </Modal>
                    </div> */}
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
                      Add Employee
                    </button>
                    <div className="modal fade" ref={modalRef} tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={hideModal}
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">...</div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={hideModal}
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Understood
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <Button variant="primary" onClick={handleShow}>
                      <IoIosOptions className="icon" />
                      Filter
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Filterdata />
                    </Modal>
                  </div>
                </div>
                <div className="alljob d-flex mb-5">
                  <div className="col-xs-12 col col-md-9 col-lg-9 col-sm-12  me-3">
                    <div className="table mt-3 ">
                      <Table />
                    </div>
                  </div>
                  <div className="filter-data col-2 col col-md-3 col-lg-3  mt-3 ">
                    <Filterdata />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Alljob;
