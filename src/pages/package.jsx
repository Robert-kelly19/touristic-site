import Cards from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import "./package.css";

export default function Package() {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Tour Package</h1>
        <p>
          Home <img src="https://cdn-icons-png.flaticon.com/512/1635/1635634.png" alt="left" />
          <span>Tour package</span>
        </p>
      </div>
      <h3>Choose your package</h3>
      <h1>
        Select your Best Package
        <br />
        for your Travel
          </h1>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards />
          <div className="change">
            <div className="pre">
                <img src="https://cdn-icons-png.flaticon.com/512/2609/2609392.png" alt="rigt" />
              </div>
              <div className="next">
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-direction-right-white-icon.png" alt="left" />
              </div>
          </div>
      <Footer />
    </>
  );
}
