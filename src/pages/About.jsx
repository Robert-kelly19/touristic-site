import Footer from "../components/footer";
import Header from "../components/header";
import "./about.css";
export default function About() {
  return (
    <>
      <Header />
      <div className="grid">
        <div className="grid1">
          <h1>
            We are dedicated to <br />
            providing the best <br />
            travel experince.
          </h1>
          <p>Discover the Land of a Thousand Hills</p>
          <div className="cat1">
            <div className="cate1">
              <div>
                <h6>Guest</h6>
                <h4>
                  2 Adult{" "}
                  <img
                    src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg"
                    alt="1"
                  />
                </h4>
              </div>
              <div>
                <h6>Date</h6>
                <h4>
                  12-13 April 2021{" "}
                  <img
                    src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg"
                    alt="2"
                  />
                </h4>
              </div>
              <div>
                <h6>Package</h6>
                <h4>
                  All{" "}
                  <img
                    src="https://icon-library.com/images/dropdown-arrow-icon/dropdown-arrow-icon-29.jpg"
                    alt="3"
                  />
                </h4>
              </div>
            </div>
            <button type="submit" className="btn">
              Book Now
            </button>
          </div>
        </div>
        <div className="grid2">
          <img
            src="https://i.pinimg.com/236x/2e/6f/70/2e6f705b19d66561a2e37af59635bb30.jpg"
            alt="monkey"
          />
        </div>
      </div>
      <h1 className="hed">Welcome to Africa Wizzy Safari</h1>
      <h2></h2>
      <div className="part">
        <img
          src="https://s3-alpha-sig.figma.com/img/8c88/8b29/002577f7500b2ab4a99aaa7d8e6be7f0?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qxfKYrtgrraOxbQkcoGbu0datTmEWT8fOiREBEnfSGSOPOORCRE4Xlzi5bi6bb4ubdnI0KSAzQJzaePkMx5FqlGVZk1hvopjDvx4yRFDe5PZ3VTenWJhLiB~E40wzZiS0GBTXHkaPlIfIaai2Cu621Xdhxfx~oULmJQyoPdT21py4zRmYUdwz-46B-gVN3mLc9NP9LlLpZNlUWccixA~imYuo59-4ddMVkCguKeu61up00paei6z5VvDNyiYYBUarLUwLqIF8lXoTxzmFZD3weLrC4N5PxvF9tL7AmSiA85TuL2wOPIsAJwaudkh-WWfLfofoAE-BXR-rgx4uVYCqw__"
          alt="place1"
        />
        <p>
          Welcome to Africa Wizzy Safari, a leading tourism company based in
          Rwanda. We have been in business for over 5 years and are committed to
          providing top-quality tours and services to our clients. Our mission
          is to showcase the beauty and culture of Rwanda to visitors from
          around the world, and to contribute to the sustainable development of
          the country through responsible tourism practices.
        </p>
      </div>
      <div className="part">
        <p>
          At Africa Wizzy safari, we offer a wide range of tours and activities,
          including cultural and historical tours, wildlife safaris, mountain
          gorilla trekking, and more. Our experienced and knowledgeable guides
          will ensure that you have a safe and enjoyable experience while
          exploring the stunning landscapes and rich culture of Rwanda.
        </p>
        <img
          src="https://s3-alpha-sig.figma.com/img/7600/56f9/b94a31ecc9af090ab219a5e6a933a894?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pjlfi5S6wY5cND1LBYpgubpDXQbowgzVrBSlW3Do56BWjXA0ia6T9BCQzRWvECgW5K0zPPh6hb~cEvJvoVx0ece8OSG9I8vShlrKrWn0dCZ4506FcLDoiz04WByrzvfG~0gVQVb5BeMv3AVcQm1UmQVd8ZHKK~fBJNOQxqA9-TYMb717tCSLQhUnbljajCC47gKG~YZyAiW9shVeRNu~GWx4AsRLyq~OGt9DP92XHkjHB8c-2n3EU2q8tgGqQueaMSJPrwyRBMmXYZFnPJBuG83stDlpyHRnV3HttS6CXov0iookvBcjKTkyeCiE1x7NKMTqc~bWuNc~ps4gKn~9TA__"
          alt="place2"
        />
      </div>
      <div className="part">
        <img
          src="https://s3-alpha-sig.figma.com/img/673f/2e91/1bcc8157232409198c246b045a73b73f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=foak2mjmUXr7ItOMIYLi5diqqDjEuytziUBPOvL25RCkOSuH5Tnrpw9VdMcGZWne2oegZ01ytzH7JX6n5J-s8PpAB62Z-JHedPLe7yLeD6jdIs9UAuMBO0GxqBEbvevhRJrE5pBHhgx6huvsVcXmeGN-mdRKp963bL23gObCig457qgaZfQ3Rcr57AzRCvV9278Tnl6PIqPq47rE11AGVnikLZOegNgM8cHsJUmXRdNa~k7Yn~DXwRVlNyLH9JJTskyueY8ycyxhL93jkIcjLAq8iv0--4U0dy2ZbgNovFPX1klWbUL-EMoYNIoqg51fQJIYDrK~R9kpOwIaI8j8fw__"
          alt="place3"
        />
        <p>
          We are proud to have received numerous awards and accolades for our
          commitment to excellence, including the RDD award and the Excellence
          award.
          <br />
          <span>
            Thank you for choosing Africa Wizzy Safari for your travel needs in
            Rwanda. We look forward to welcoming you on one of our tours soon!
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
