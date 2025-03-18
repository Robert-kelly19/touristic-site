import Footer from "../components/Footer";
import Header from "../components/header";
import { useFormik } from "formik";
import "./Contact.css";
import HeroSection from "../components/HeroSection";
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
      <HeroSection text={{page: 'Contact Us'}} />
      <h1 className="con1">Get in Touch</h1>
      <p className="con2">
        We would love to hear from you! If you have any comments or suggestions
        about our website or our tours, please don't hesitate to get in touch.
        We are always looking for ways to improve and make your travel
        experience even better.
      </p>
      <form onSubmit={form.handleSubmit}>
        <h5>Contact Us</h5>
        <div className="first-last">
          <div>
          <label htmlFor="firstName">First Name</label>
        <input
          id="firstname"
          name="firstName"
          type="text"
          placeholder="input your First Name in here"
          onChange={form.handleChange}
          value={form.values.firstName}
        />
          </div>
        <div><label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="input your Last Name in here"
          onChange={form.handleChange}
          value={form.values.lastName}
        /></div>
        </div>
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
          <div className="svgs">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="49"
                rx="23.5"
                stroke="#304F47"
              />
              <path
                d="M26.1236 35.9374V25.9592H29.4729L29.9743 22.0705H26.1236V19.5877C26.1236 18.4618 26.4362 17.6945 28.0508 17.6945L30.11 17.6935V14.2156C29.7537 14.1683 28.5315 14.0625 27.1094 14.0625C24.1405 14.0625 22.108 15.8746 22.108 19.2027V22.0706H18.75V25.9593H22.1078V35.9375L26.1236 35.9374Z"
                fill="#304F47"
              />
            </svg>
            <svg
              width="50"
              height="53"
              viewBox="0 0 50 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="51.5841"
                rx="23.5"
                stroke="#304F47"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0625 16.7893C14.0625 15.6847 14.9579 14.7893 16.0625 14.7893H33.9375C35.0421 14.7893 35.9375 15.6847 35.9375 16.7893V35.7949C35.9375 36.8994 35.0421 37.7949 33.9375 37.7949H16.0625C14.9579 37.7949 14.0625 36.8994 14.0625 35.7949V16.7893ZM25.0001 21.5241C22.5407 21.5241 20.4959 23.63 20.4959 26.2921C20.4959 28.9542 22.5407 31.0601 25.0001 31.0601C27.4596 31.0601 29.5043 28.9542 29.5043 26.2921C29.5043 23.63 27.4596 21.5241 25.0001 21.5241ZM19.2959 26.2921C19.2959 23.0249 21.8216 20.3241 25.0001 20.3241C28.1786 20.3241 30.7043 23.0249 30.7043 26.2921C30.7043 29.5593 28.1786 32.2601 25.0001 32.2601C21.8216 32.2601 19.2959 29.5593 19.2959 26.2921ZM31.5624 20.9241C32.3678 20.9241 33.0207 20.2375 33.0207 19.3904C33.0207 18.5434 32.3678 17.8567 31.5624 17.8567C30.757 17.8567 30.1041 18.5434 30.1041 19.3904C30.1041 20.2375 30.757 20.9241 31.5624 20.9241Z"
                fill="#304F47"
              />
            </svg>
            <svg
              width="50"
              height="53"
              viewBox="0 0 50 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="51.5841"
                rx="23.5"
                stroke="#304F47"
              />
              <path
                d="M34.0841 21.3543C34.0841 21.5766 34.0841 21.7989 34.0841 21.9894C34.0841 28.5624 29.4794 36.1515 21.0861 36.1515C18.4923 36.1515 16.1025 35.326 14.0625 33.9288C14.4122 33.9605 14.7911 33.9923 15.1408 33.9923C17.2683 33.9923 19.25 33.1985 20.8238 31.8648C18.8129 31.833 17.1226 30.3724 16.5688 28.4036C16.8603 28.4671 17.1226 28.4989 17.4431 28.4989C17.8512 28.4989 18.2592 28.4354 18.638 28.3084C16.5397 27.8638 14.9659 25.8633 14.9659 23.4501C14.9659 23.4183 14.9659 23.4183 14.9659 23.3866C15.578 23.7676 16.2774 23.9899 17.0351 24.0216C15.8111 23.1325 14.9951 21.6083 14.9951 19.8619C14.9951 18.941 15.2282 18.0837 15.6071 17.3534C17.8512 20.37 21.2318 22.3387 25.0205 22.561C24.933 22.2117 24.9039 21.7989 24.9039 21.4178C24.9039 18.6553 26.9439 16.4325 29.4794 16.4325C30.7909 16.4325 31.9857 17.0358 32.8018 17.9884C33.8509 17.7662 34.8127 17.3534 35.7161 16.7818C35.3664 17.9567 34.6378 18.9093 33.7052 19.5444C34.6378 19.4173 35.5121 19.1633 36.3281 18.7505C35.7453 19.7666 34.9875 20.6557 34.0841 21.3543Z"
                fill="#304F47"
              />
            </svg>
            <svg
              width="50"
              height="53"
              viewBox="0 0 50 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="51.5841"
                rx="23.5"
                stroke="#304F47"
              />
              <path
                d="M34.9209 36.1441C33.7228 36.1141 32.5532 36.1141 31.3551 36.1441C31.0984 36.1441 31.0413 36.0841 31.0413 35.8141C31.0413 33.594 31.0413 31.3439 31.0413 29.1238C31.0413 28.6138 31.0128 28.1038 30.8701 27.6238C30.4422 26.0637 28.7306 25.4937 27.504 26.5438C26.8479 27.0838 26.5911 27.8338 26.5911 28.7338C26.5911 30.8339 26.5911 32.934 26.5911 35.0341C26.5911 35.3041 26.5626 35.5741 26.5911 35.8741C26.6196 36.1141 26.5055 36.1741 26.3058 36.1441C25.0792 36.1441 23.8811 36.1441 22.6544 36.1441C22.4262 36.1441 22.3691 36.0841 22.3691 35.8441C22.3977 33.954 22.3977 32.064 22.3977 30.1439C22.3977 27.8038 22.3977 25.4637 22.3691 23.1536C22.3691 22.8836 22.4262 22.8236 22.6544 22.8236C23.8811 22.8236 25.0792 22.8236 26.3058 22.8236C26.5341 22.8236 26.5911 22.8836 26.5911 23.1236C26.5911 23.6036 26.5911 24.0837 26.5911 24.6537C26.6767 24.5637 26.7052 24.5337 26.7337 24.5037C27.8463 22.7936 29.4153 22.3136 31.2695 22.6136C33.409 22.9736 34.7783 24.5337 35.1206 26.9338C35.2062 27.5038 35.2347 28.0738 35.2347 28.6438C35.2347 31.0439 35.2347 33.414 35.2347 35.8141C35.2347 36.0541 35.1777 36.1441 34.9209 36.1441Z"
                fill="#304F47"
              />
              <path
                d="M20.086 29.4845C20.086 31.5846 20.086 33.6846 20.086 35.7847C20.086 36.0547 20.029 36.1447 19.7722 36.1447C18.5741 36.1147 17.376 36.1447 16.1778 36.1447C15.9496 36.1447 15.8926 36.0847 15.8926 35.8447C15.8926 31.6146 15.8926 27.3544 15.8926 23.1242C15.8926 22.9142 15.9496 22.8242 16.1778 22.8242C17.4045 22.8242 18.6312 22.8242 19.8578 22.8242C20.1145 22.8242 20.1431 22.9142 20.1431 23.1542C20.086 25.2543 20.086 27.3544 20.086 29.4845Z"
                fill="#304F47"
              />
              <path
                d="M20.2885 19.3438C20.0032 20.5438 18.8336 21.2339 17.4929 20.9939C16.0665 20.7539 15.2678 19.2838 15.7813 17.8437C16.1236 16.9437 16.9509 16.4037 18.0064 16.4337C19.6039 16.4037 20.6594 17.7537 20.2885 19.3438Z"
                fill="#304F47"
              />
            </svg>
          </div>
        </div>
        <div className="phone">
          <h1>Email & Phone</h1>
          <div className="flex-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0677 3.16019L16.4828 0.57767C16.3004 0.394523 16.0837 0.249209 15.845 0.150074C15.6063 0.0509392 15.3504 -6.19408e-05 15.092 5.64551e-08C14.5653 5.64551e-08 14.0702 0.206311 13.6988 0.57767L10.9173 3.35922C10.7342 3.54157 10.5889 3.7583 10.4897 3.99698C10.3906 4.23565 10.3396 4.49156 10.3397 4.75C10.3397 5.2767 10.546 5.77184 10.9173 6.1432L12.9513 8.17718C12.4752 9.2266 11.8132 10.1813 10.9974 10.9951C10.1836 11.813 9.22906 12.4773 8.17949 12.9563L6.14554 10.9223C5.9632 10.7392 5.74647 10.5939 5.5078 10.4947C5.26913 10.3956 5.01322 10.3446 4.75478 10.3447C4.22809 10.3447 3.73295 10.551 3.3616 10.9223L0.577663 13.7015C0.394294 13.8841 0.248856 14.1013 0.149719 14.3404C0.0505807 14.5795 -0.00030077 14.8358 1.33745e-06 15.0947C1.33745e-06 15.6214 0.206309 16.1165 0.577663 16.4879L3.15772 19.068C3.74995 19.6626 4.56789 20 5.40769 20C5.58487 20 5.75477 19.9854 5.92224 19.9563C9.19404 19.4175 12.4391 17.6772 15.058 15.0607C17.6745 12.4466 19.4123 9.20388 19.9584 5.92233C20.1235 4.9199 19.791 3.88835 19.0677 3.16019Z"
                fill="#304F47"
              />
            </svg>

            <p>+250 784 688 641</p>
          </div>

          <div className="flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2857 0H0.714286C0.319196 0 0 0.40625 0 0.909091V19.0909C0 19.5938 0.319196 20 0.714286 20H19.2857C19.6808 20 20 19.5938 20 19.0909V0.909091C20 0.40625 19.6808 0 19.2857 0ZM17.4821 3.09375L10.4397 10.0682C10.2656 10.2415 10.0223 10.2415 9.84822 10.0682L2.80357 3.09375C2.77702 3.06767 2.75754 3.03166 2.74787 2.99078C2.7382 2.9499 2.73882 2.90619 2.74965 2.86579C2.76048 2.82538 2.78097 2.7903 2.80825 2.76546C2.83554 2.74062 2.86824 2.72727 2.90179 2.72727H17.3839C17.4175 2.72727 17.4502 2.74062 17.4775 2.76546C17.5047 2.7903 17.5252 2.82538 17.5361 2.86579C17.5469 2.90619 17.5475 2.9499 17.5378 2.99078C17.5282 3.03166 17.5087 3.06767 17.4821 3.09375Z"
                fill="#304F47"
              />
            </svg>

            <p>bbonteemma@gmail.com</p>
          </div>
        </div>
        <div className="add">
          <h1>Address</h1>
          <p>kk 600 st Kigali, Rwanda</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
