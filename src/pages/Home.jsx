import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
export default function Home() {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Experience the beauty of Cameroon with us</h1>
        <p>Discover the Land of a Thousand Hills</p>
        <div className="hero1">
          <div className="hero1-1">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.7141 40.4293V37.7507C35.7141 37.5685 35.6248 37.3971 35.4783 37.29L21.4926 27.1435L35.4783 16.9971C35.6248 16.89 35.7141 16.7185 35.7141 16.5364V13.8578C35.7141 13.6257 35.4498 13.49 35.2605 13.6257L17.8998 26.2185C17.2712 26.6757 17.2712 27.6114 17.8998 28.065L35.2605 40.6578C35.4498 40.7971 35.7141 40.6614 35.7141 40.4293Z"
                fill="white"
              />
              <circle
                cx="27.5"
                cy="27.5"
                r="24.5"
                stroke="white"
                strokeWidth="6"
              />
            </svg>
          </div>
          <div className="hero1-2">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2859 14.5707V17.2493C19.2859 17.4315 19.3752 17.6029 19.5216 17.71L33.5073 27.8565L19.5216 38.0029C19.3752 38.11 19.2859 38.2815 19.2859 38.4636V41.1422C19.2859 41.3743 19.5502 41.51 19.7395 41.3743L37.1002 28.7815C37.7287 28.3243 37.7287 27.3886 37.1002 26.935L19.7395 14.3422C19.5502 14.2029 19.2859 14.3386 19.2859 14.5707Z"
                fill="white"
              />
              <circle
                cx="27.5"
                cy="27.5"
                r="24.5"
                transform="rotate(-180 27.5 27.5)"
                stroke="white"
                strokeWidth="6"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search activity or Destination"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/709px-Vector_search_icon.svg.png"
          alt="search"
          className="icon"
        />
        <div className="cate">
          <div>
            <h6>Guest</h6>
            <h4 className="white">
              2 Adult{" "}
              <img
                src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg"
                alt="1"
              />
            </h4>
          </div>
          <div>
            <h6>Date</h6>
            <h4 className="white">
              12-13 April 2021{" "}
              <img
                src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg"
                alt="2"
              />
            </h4>
          </div>
          <div>
            <h6>Package</h6>
            <h4 className="white">
              All{" "}
              <img
                src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg"
                alt="3"
              />
            </h4>
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

      <div className="direct">
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
            d="M32.2931 20.293L23.5861 29L32.2931 37.707L33.7071 36.293L26.4141 29L33.7071 21.707L32.2931 20.293Z"
            fill="#C7923E"
          />
        </svg>
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

      <div className="dest">
        <div className="place">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBS2RN_vsN5QFeHu9AGXfF3ng3T2NhFNA7g&s"
            alt="des1"
          />
          <h1>Limbe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNvjJ1ck2MAqAmGjenpZ05LDKDyurseAoMw&s"
            alt="des2"
          />
          <h1>Kribi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://i.pinimg.com/236x/83/b4/20/83b4204925c0f80dde99b1ebfe3fc46b.jpg"
            alt="des3"
          />
          <h1>Douala</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://i.pinimg.com/236x/aa/1c/8b/aa1c8bbaec1fa856584d3a39758cf148.jpg"
            alt="des4"
          />
          <h1>Yaounde</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://i.pinimg.com/736x/ce/2b/24/ce2b247ffbf1dc0ff2904acdec0eab6b.jpg"
            alt="des5"
          />
          <h1>Foumban Royal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://i.pinimg.com/736x/b0/e4/d1/b0e4d164499401c4cd4303df4eb9c36e.jpg"
            alt="des6"
          />
          <h1>Buea</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://i.pinimg.com/736x/ef/08/a2/ef08a27dd8d915e1b39ec645aee6477f.jpg"
            alt="des7"
          />
          <h1>Ekom-Nkam</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora fuga quia est
          </p>
        </div>
        <div className="place">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn29ovWWDx_EK_udXd-tU-COd4i4XvMXl8Lk5mow7_GU93OPB-n1P4SFw0JsicqditYU0&usqp=CAU"
            alt="des8"
          />
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
          <img
            src="https://masterplantexas.com/wp-content/uploads/car-icon.png"
            alt="car"
          />
          <p>
            100+ tours around <br />
            Cameroon
          </p>
        </div>
        <div className="react">
          <img
            src="https://img.icons8.com/ios7/512/FFFFFF/checked.png"
            alt="tick"
          />
          <p>
            100% Trusted Travel <br />
            agency
          </p>
        </div>
        <div className="react">
          <img
            src="https://www.sherofoundation.org/wp-content/uploads/2020/11/White-Calendar-Icon.png"
            alt="date"
          />
          <p>
            10 Years of Travel <br />
            Experince
          </p>
        </div>
        <div className="react">
          <img
            src="https://www.pngkit.com/png/full/161-1614548_click-here-to-visit-my-youtube-channel-thumb.png"
            alt="thumbsup"
          />
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
          <img
            src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc"
            alt="t1"
          />
          <h3>Emma Waston</h3>
          <p>
            I recently went on a tour with XYZ Tourism Company and was extremely
            impressed with the level of professionalism and organization.
          </p>
        </div>
        <div className="tcard">
          <img
            src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc"
            alt="t2"
          />
          <h3>Emma Waston</h3>
          <p>
            I recently went on a tour with XYZ Tourism Company and was extremely
            impressed with the level of professionalism and organization.
          </p>
        </div>
        <div className="tcard">
          <img
            src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc"
            alt="t3"
          />
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
      <Footer/>
    </>
  );
}
