import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./tinder-card.css";
import Loading from "../loading/loading";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://tindermernbackend-renjithcmrenju.b4a.run/api/users").then(
        async (response) => {
          const data = await response.json();
          setPeople(data);
        }
      );
    };
    fetchData();
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.length > 0 ? (
          people.map((person) => (
            <>
              <TinderCard
                className="swipe"
                key={person._id}
                preventSwipe={["up", "down"]}
              >
                <div
                  style={{
                    backgroundImage: `url(${person.img_URL})`,
                  }}
                  className="card"
                >
                  <div className="card-details">
                    <h2 style={{ color: "white" }}>{person.name}</h2>
                    <h3 style={{ color: "white" }}>{person.age}</h3>
                  </div>
                </div>
              </TinderCard>
            </>
          ))
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};
export default TinderCards;
