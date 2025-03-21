import "./Card.css";
export default function Cards() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img
            src="https://i.pinimg.com/236x/d7/3d/87/d73d875d85ec84774b15721f384ba1b6.jpg"
            alt="view"
          />
          <div className="text">
            <h1>Akagera National Park</h1>
            <p>
              Visitors to Akagera National Park can take part in a range of
              activities, including game drives, boat safaris, bird watching,
              and nature walks.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/236x/cb/66/48/cb66487faa309192356ab6a846a3f35c.jpg"
            alt="wild"
          />
          <div className="text">
            <h1>Bisoke Hike</h1>
            <p>
              The Bisoke hike is a popular mountain trek in Rwanda, located in
              the Volcanoes National Park. It is one of the most challenging
              hikes in the park.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/474x/eb/85/1a/eb851a0dfad5d9b10663c7af70c1de62.jpg"
            alt="water"
          />
          <div className="text">
            <h1>Lake Kivu trip</h1>
            <p>
              A trip to Lake Kivu can be a truly unique and memorable
              experience.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
