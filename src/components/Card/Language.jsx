import "./feedback.css";
import uz from "../../images/icon/flag/uzb-flag.svg";
import eng from "../../images/icon/flag/united_states-flag.png";
import rus from "../../images/icon/flag/rus-flag.svg";
import { Link } from "react-router-dom";

function Language() {
  return (
    <div>
      <div className="language-flags display-none-class">
        <Link style={{ cursor: "pointer" }} to="/uz">
          <div className="language">
            <button style={{ cursor: "pointer" }}>o'zbek</button>
            <img src={uz} alt="uz" />
          </div>
        </Link>
        <Link style={{ cursor: "pointer" }} to="/eng">
          <div className="language">
            <button style={{ cursor: "pointer" }}>english</button>
            <img src={eng} alt="eng" />
          </div>
        </Link>
        <Link style={{ cursor: "pointer" }} to="/ru">
          <div className="language">
            <button style={{ cursor: "pointer" }}>РУССКИЙ</button>
            <img src={rus} alt="rus" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Language;
