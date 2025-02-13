import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import "./home.css"
export default function Home() {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Experience the beauty <br /> of Cameroon with us</h1>
        <p>Discover the Land of a Thousand Hills</p>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search activity or Destination"
        />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/709px-Vector_search_icon.svg.png" alt="search" />
        <div className="cate">
          <div>
            <h6>Guest</h6>
            <h4 className="white">2 Adult <img src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg" alt="1" /></h4>
          </div>
          <div>
            <h6>Date</h6>
            <h4 className="white">12-13 April 2021 <img src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg" alt="2" /></h4>
          </div>
          <div>
            <h6>Package</h6>
            <h4 className="white">All <img src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg" alt="3" /></h4>
          </div>
        </div>
        <button type="submit">Book Now</button>
      </div>
      <h3>Choose your package</h3>
      <h1>
        Select your Best Package
        <br />
        for your Travel
      </h1>
      <Card />
      <Card />
      <h3>Popular Destination</h3>
      <h1>
        Select Our Best Popular
        <br />
        Destinations
      </h1>
      <div className="dest">
        <div className="place">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBS2RN_vsN5QFeHu9AGXfF3ng3T2NhFNA7g&s" alt="des1" />
          <h1>Limbe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNvjJ1ck2MAqAmGjenpZ05LDKDyurseAoMw&s" alt="des2" />
          <h1>Kribi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://i.pinimg.com/236x/83/b4/20/83b4204925c0f80dde99b1ebfe3fc46b.jpg" alt="des3" />
          <h1>Douala</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://i.pinimg.com/236x/aa/1c/8b/aa1c8bbaec1fa856584d3a39758cf148.jpg" alt="des4" />
          <h1>Yaounde</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://i.pinimg.com/736x/ce/2b/24/ce2b247ffbf1dc0ff2904acdec0eab6b.jpg" alt="des5" />
          <h1>Foumban Royal Palace</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://i.pinimg.com/736x/b0/e4/d1/b0e4d164499401c4cd4303df4eb9c36e.jpg" alt="des6" />
          <h1>Buea</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://i.pinimg.com/736x/ef/08/a2/ef08a27dd8d915e1b39ec645aee6477f.jpg" alt="des7" />
          <h1>Ekom-Nkam Waterfall</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn29ovWWDx_EK_udXd-tU-COd4i4XvMXl8Lk5mow7_GU93OPB-n1P4SFw0JsicqditYU0&usqp=CAU" alt="des8" />
          <h1>Bimbia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
      </div>
      <h3>Why us?</h3>
      <h1>
        Why Travel with Africa
        <br />
        Wizzy Safari
      </h1>
      <div className="choose">
        <div className="react">
          <img src="https://masterplantexas.com/wp-content/uploads/car-icon.png" alt="car" />
          <p>
            100+ tours around <br />
            Cameroon
          </p>
        </div>
        <div className="react">
          <img src="https://img.icons8.com/ios7/512/FFFFFF/checked.png" alt="tick" />
          <p>
            100% Trusted Travel <br />
            agency
          </p>
        </div>
        <div className="react">
          <img src="https://www.sherofoundation.org/wp-content/uploads/2020/11/White-Calendar-Icon.png" alt="date" />
          <p>
            10 Years of Travel <br />
            Experince
          </p>
        </div>
        <div className="react">
          <img src="https://www.pngkit.com/png/full/161-1614548_click-here-to-visit-my-youtube-channel-thumb.png" alt="thumbsup" />
          <p>
            90% of Travellers are <br />
            happy
          </p>
        </div>
      </div>
      <h3>Our Travellers Say</h3>
      <h1>
        What our clients say
        <br />
        about us
      </h1>
      <div className="test">
        <div className="tcard">
          <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" alt="t1" />
          <h3>Emma Waston</h3>
          <p>
            I recently went on a tour with XYZ Tourism Company and was extremely
            impressed with the level of professionalism and organization.
          </p>
        </div>
        <div className="tcard">
          <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" alt="t2" />
          <h3>Emma Waston</h3>
          <p>
            I recently went on a tour with XYZ Tourism Company and was extremely
            impressed with the level of professionalism and organization.
          </p>
        </div>
        <div className="tcard">
          <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" alt="t3" />
          <h3>Emma Waston</h3>
          <p>
            I recently went on a tour with XYZ Tourism Company and was extremely
            impressed with the level of professionalism and organization.
          </p>
        </div>
          </div>
          <div className="empty">
              <div className="gold"></div>
              <div className="green"></div>
              <div className="green"></div>
          </div>
      <Footer />
    </>
  );
}
