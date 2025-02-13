import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="head">
        <div className="contact">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3616/3616230.png"
            alt="call"
          />
          <p>+250 784 688 641</p>
          <img
            src="https://i0.wp.com/3factsinc.org/wp-content/uploads/2019/12/crop-0-0-1000-1080-0-email-icon-outline-email-icon-isolated-on-white-vector-21742596.png?ssl=1"
            alt="email"
          />
          <p>bbonteemma@gmail.com</p>
        </div>
        <div className="media">
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Facebook-White-Logo.png"
            alt="fb"
          />
          <img
            src="https://www.pngkey.com/png/full/376-3769707_facebook-icon-instagram-icon-twitter-icon-twitter-icon.png"
            alt="x"
          />
          <img
            src="https://parkhotel.mk/wp-content/uploads/2017/01/linkedin-icon-300x300-1.png"
            alt="linkedin"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/480px-Instagram_logo.png"
            alt="ig"
          />
        </div>
      </div>
      <nav>
        <div className="link">
          <img
            src="https://static.vecteezy.com/system/resources/previews/041/041/467/non_2x/tours-logo-icon-brand-identity-sign-symbol-vector.jpg"
            alt="tour logo"
            id="logo"
          />
          <div className="pat">
              <p> <Link to="/">Home</Link> </p>
              <p> <Link to="/about">About</Link></p>
              <p> <Link to="/package">Tour Package</Link></p>
              <p> <Link to="/gallery">Gallery</Link></p>
              <p>Blog</p>
              <p> <Link to="/contact">Contact Us</Link></p>
          </div>
        </div>
        <span className="find">
        <img
          src="https://static-00.iconduck.com/assets.00/search-icon-1023x1024-cz5u4134.png"
          alt="search"
        />
      </span>
        <button type="submit" className="sign"> Sign In</button>
      </nav>
    </>
  );
}
