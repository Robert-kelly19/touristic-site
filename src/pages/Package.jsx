import Cards from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import "./package.css";

export default function Package() {
  return (
    <>
      <Header />
      <HeroSection text={{ page: "Tour Packages" }} />
      <h3>Choose your package</h3>
      <h1>
        Select your Best Package
        <br />
        for your Travel
      </h1>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <div className="change">
        <div className="pre">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="56"
              height="56"
              rx="8"
              stroke="#C7923E"
              strokeWidth="2"
            />
            <path
              d="M32.2929 20.293L23.5859 29L32.2929 37.707L33.7069 36.293L26.4139 29L33.7069 21.707L32.2929 20.293Z"
              fill="#C7923E"
            />
          </svg>
        </div>
        <div className="next">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="8" fill="#C7923E" />
            <path
              d="M23.293 20.707L30.586 28L23.293 35.293L24.707 36.707L33.414 28L24.707 19.293L23.293 20.707Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </>
  );
}
