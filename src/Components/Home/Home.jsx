import React from "react";
import "./home.css";
import TourList from "../Tour_List/TourList";

const Home = ({ tours, removeTour }) => {
  return (
    <section>
      <h3>Tour opportunities in Bangladesh</h3>
      <div className="underline"></div>
      {tours.map((tour) => (
        <TourList key={tour.id} {...tour} removeTour={removeTour}/>
      ))}
    </section>
  );
};

export default Home;
