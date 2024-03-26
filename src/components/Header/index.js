import { AiOutlineMenu } from "react-icons/ai";
import { CgGlobeAlt } from "react-icons/cg";
import "./index.css";

const Header = () => (
  /*<div className="container-fluid">
        <div className="row">
            <div className="col-12 d-flex justify-content-between header">
                <div className="company">
                    <AiOutlineMenu />
                    <p className="company-name">Medi Assist</p>
                </div>  
                <ul className="d-flex align-items-center">
                    <li className="list-item-header">Default1</li>
                    <li className="list-item-header">Default2</li>
                    <li className="list-item-hesder">Default3</li>
                    <li className="list-item-header">Default4</li>
                </ul>
                <button className="button"><CgGlobeAlt /> logout</button>
            </div>
        </div>
    </div>*/

  <div className="header">
    <div className="company">
      <AiOutlineMenu />
      <p className="company-name">Medi Assist</p>
    </div>
    <ul className="unordered-list-1">
      <li className="list-item-header">Default1</li>
      <li className="list-item-header">Default2</li>
      <li className="list-item-header">Default3</li>
      <li className="list-item-header">Default4</li>
    </ul>
    <button className="button-header">
      <CgGlobeAlt /> logout
    </button>
  </div>
);

export default Header;
