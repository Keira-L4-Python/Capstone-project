import React from "react";

function About() {
  return (
    <section className="about">
      <div>
        <h1>About Little Lemon</h1>

        <h2>A Taste of the Mediterranean</h2>

        <p>
          Little Lemon is a family-owned restaurant
          located in Chicago. We specialise in
          Mediterranean-inspired food made using
          fresh ingredients.
        </p>

        <p>
          Our mission is to bring people together
          through delicious food, friendly service
          and a welcoming atmosphere.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        alt="Inside Little Lemon restaurant"
      />
    </section>
  );
}

export default About;
