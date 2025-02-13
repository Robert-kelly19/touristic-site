import "./footer.css"
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="left">
            <h1>
              If you have any question,
              <br /> Let us help you!
            </h1>
            <div className="para">
              <p className="first">
                If you have any questions or would like to
                <br /> book a tour with us,please don't hesitate to <br />
                contact us.
              </p>
              <div className="info">
                <p>Phone: +250 788 123 456</p>
                <p>Email: info@rwandatourism.com</p>
                <p> Address: Kigali, Rwanda</p>
              </div>
            </div>
            <h5>Subscribe to our newspaper</h5>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
            />
            <button type="submit">
              <img
                src="https://cdn-icons-png.freepik.com/512/4414/4414831.png"
                alt="send"
              />
            </button>
          </div>
          <div className="right">
            <div className="images">
              <img
                src="https://static.vecteezy.com/system/resources/previews/041/041/467/non_2x/tours-logo-icon-brand-identity-sign-symbol-vector.jpg"
                alt="tour logo"
                id="logo"
              />
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
              industry.
            </p>
            <div className="list">
              <ul>
                <li>Home</li>
                <li>Testimonials</li>
                <li>Destinations</li>
                <li>Signin</li>
              </ul>
              <ul>
                <li>About Us</li>
                <li>Packages</li>
                <li>Events</li>
                <li>Gallery</li>
              </ul>
              <ul>
                <li>Our Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="last">Copyright Africa Wizzy Safari 2022</p>
      </footer>
    </>
  );
}
