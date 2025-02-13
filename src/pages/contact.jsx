import Footer from "../components/footer";
import Header from "../components/header";
import { useFormik } from "formik";
import "./contact.css";
export default function Contact() {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
    },
  });
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Contact Us</h1>
        <p>
          Home{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1635/1635634.png"
            alt="left"
          />
          <span>Contact</span>
        </p>
      </div>
      <h1 className="con1">Get in Touch</h1>
      <p className="con2">
        We would love to hear from you! If you have any comments or suggestions{" "}
        <br />
        about our website or our tours, please don't hesitate to get in touch.{" "}
        <br />
        We are always looking for ways to improve and make your travel <br />
        experience even better.
      </p>
      <form onSubmit={form.handleSubmit}>
        <h5>Contact Us</h5>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstname"
          name="firstName"
          type="text"
          placeholder="input your First Name in here"
          onChange={form.handleChange}
          value={form.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="input your Last Name in here"
          onChange={form.handleChange}
          value={form.values.lastName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="input your Email in here"
          onChange={form.handleChange}
          value={form.values.email}
        />
        <label htmlFor="tel">Phone Number</label>
        <select name="code" id="code">
          <option value="+237">+237</option>
          <option value="+250" onClick={form.handleChange}>
            +250
          </option>
          <option value="+234" onClick={form.handleChange}>
            +234
          </option>
          <option value="+1" onClick={form.handleChange}>
            +1
          </option>
          <option value="+991" onClick={form.handleChange}>
            +991
          </option>
          <option value="+254" onClick={form.handleChange}>
            +254
          </option>
        </select>
        <input
          id="tel"
          name="tel"
          type="tel"
          placeholder="input your phone number in here"
          onChange={form.handleChange}
          value={form.values.tel}
        />
        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          type="text"
          placeholder="Write a Message"
          onChange={form.handleChange}
          value={form.values.message}
        />

        <button type="submit" onSubmit={form.handleSubmit}>
          Submit
        </button>
      </form>

      <div className="inform">
        <div className="social">
          <h1>Social Media</h1>
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
        <div className="phone">
          <h1>Email & Phone</h1>
          <div className="flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3616/3616230.png"
              alt="call"
            />
            <p>+250 784 688 641</p>
          </div>

          <div className="flex">
            <img
              src="https://i0.wp.com/3factsinc.org/wp-content/uploads/2019/12/crop-0-0-1000-1080-0-email-icon-outline-email-icon-isolated-on-white-vector-21742596.png?ssl=1"
              alt="email"
            />
            <p>bbonteemma@gmail.com</p>
          </div>
        </div>
        <div className="add">
          <h1>Address</h1>
          <p>
            kk 600 st <br />
            Kigali, Rwanda
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
