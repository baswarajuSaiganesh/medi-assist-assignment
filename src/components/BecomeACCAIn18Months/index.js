import { CgGlobeAlt } from "react-icons/cg";
import Popup from "reactjs-popup";
import "./index.css";

const BecomeACCAIn18Months = () => (
  <div className="bg-container p-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h1>Become ACCA In 18 months</h1>
          <p>
            Become ACCA In 18 months Become ACCA In 18 months Become ACCA In 18
            months Become ACCA In 18 months Become ACCA In 18 months Become ACCA
            In 18 months
          </p>
          <div className="d-flex">
            <div className="text-center small-card shadow">
              <p className="para">
                <CgGlobeAlt /> Default1 default
              </p>
              <p className="para">Default</p>
            </div>
            <div className="text-center small-card shadow">
              <p className="para">
                <CgGlobeAlt /> Default1 default
              </p>
              <p className="para">Default</p>
            </div>
            <div className="text-center small-card shadow">
              <p className="para">
                <CgGlobeAlt /> Default1 default
              </p>
              <p className="para">Default</p>
            </div>
            <div className="text-center small-card shadow">
              <p className="para">
                <CgGlobeAlt /> Default1 default
              </p>
              <p className="para">Default</p>
            </div>
          </div>
          <div className="m-4">
            <button className="button1">default 1 default</button>
            <button className="button2">default 1</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 text-center form-card shadow">
          <h1 className="heading-2">
            Applying to be an ACCA? Get in touch with us
          </h1>
          <input type="text" className="username" placeholder="username" />
          <br />
          <input type="text" className="password" placeholder="password" />
          <br />
          <select className="options1">
            <option selected disabled hidden>
              options1
            </option>
          </select>
          <br />
          <select className="options2">
            <option selected disabled hidden>
              options2
            </option>
          </select>
          <br />
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button button">
                Request call back
              </button>
            }
          >
            {(close) => (
              <>
                <div>
                  <p>your call back request is successful</p>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    </div>
  </div>
);

export default BecomeACCAIn18Months;
