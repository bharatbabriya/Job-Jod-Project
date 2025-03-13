import React from "react";
import "./Table.css";
import Avatar from "../../../assets/Avatar.jpg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { GoChevronLeft , GoChevronRight  } from "react-icons/go";

function Table() {
  return (
    <>
      <div className="table-data m-3">
        <table className="table mt-3 ">
          <thead>
            <tr>
              <td></td>
              <td>User</td>
              <td>Total Rides</td>
              <td>Total Finisher</td>
              <td>Home Location</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <AiOutlineMessage className="icon" />
              </td>
              <td>
                <div className="d-flex">
                  <img src={Avatar} alt="avatar" width={70} className="pe-3" />
                  <div className="d-flex justify-content-center flex-column">
                    <span>bharat babriya</span>
                    <span className="number">+91 6351754264</span>
                  </div>
                </div>
              </td>
              <td>132</td>
              <td>6</td>
              <td>Ring Rd, meher park-B, Athwa Gate, Surat, Gujarat </td>
              <td>
                {" "}
                <FaRegEdit className="icon-color" />
              </td>
              <td>
                <MdDeleteOutline className="icon-color" />
              </td>
            </tr>
            <tr>
              <td>
                <AiOutlineMessage className="icon" />
              </td>
              <td>
                <div className="d-flex">
                  <img src={Avatar} alt="avatar" width={70} className="pe-3" />
                  <div className="d-flex justify-content-center flex-column">
                    <span>bharat babriya</span>
                    <span className="number">+91 6351754264</span>
                  </div>
                </div>
              </td>
              <td>132</td>
              <td>6</td>
              <td>Ring Rd, meher park-B, Athwa Gate, Surat, Gujarat </td>
              <td>
                {" "}
                <FaRegEdit className="icon-color" />
              </td>
              <td>
                <MdDeleteOutline className="icon-color" />
              </td>
            </tr>
            <tr>
              <td>
                <AiOutlineMessage className="icon" />
              </td>
              <td>
                <div className="d-flex">
                  <img src={Avatar} alt="avatar" width={70} className="pe-3" />
                  <div className="d-flex justify-content-center flex-column">
                    <span>bharat babriya</span>
                    <span className="number">+91 6351754264</span>
                  </div>
                </div>
              </td>
              <td>132</td>
              <td>6</td>
              <td>Ring Rd, meher park-B, Athwa Gate, Surat, Gujarat </td>
              <td>
                {" "}
                <FaRegEdit className="icon-color" />
              </td>
              <td>
                <MdDeleteOutline className="icon-color" />
              </td>
            </tr>
            <tr>
              <td>
                <AiOutlineMessage className="icon" />
              </td>
              <td>
                <div className="d-flex">
                  <img src={Avatar} alt="avatar" width={70} className="pe-3" />
                  <div className="d-flex justify-content-center flex-column">
                    <span>bharat babriya</span>
                    <span className="number">+91 6351754264</span>
                  </div>
                </div>
              </td>
              <td>132</td>
              <td>6</td>
              <td>Ring Rd, meher park-B, Athwa Gate, Surat, Gujarat </td>
              <td>
                {" "}
                <FaRegEdit className="icon-color" />
              </td>
              <td>
                <MdDeleteOutline className="icon-color" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <span>1-2 of items</span>
          <div className="page">
            <button><GoChevronLeft  className="icon" /></button>
            <button>1</button>
            <button>2</button>
            <button><GoChevronRight className="icon " /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
