import {
    FaFacebookSquare,
    FaGooglePlusSquare,
    FaEnvelopeSquare,
    FaFax,
    FaPhoneAlt,
  } from "react-icons/fa";
  import "./Footer.css";
  
  export default function Footer() {
    return (
      <footer>
        <div className="contact">
          <div className="contactInfos">
            <h3>Out Address</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
              nobis blanditiis!
            </p>
            <p>
              <span>
                <FaPhoneAlt />
              </span>{" "}
              : +0123456789
            </p>
            <p>
              <span>
                <FaFax />
              </span>{" "}
              : +0987654321
            </p>
          </div>
          <div className="contactIcons">
            <span>
              <FaGooglePlusSquare />
            </span>
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaEnvelopeSquare />
            </span>
          </div>
        </div>
      
        <div className="copyright">
          <p>@copyright...</p>
        </div>
      </footer>
    );
  }
  
