
import React, { useState } from "react";
import { Link } from "react-router-dom";

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
    description:
      "Fresh tomatoes, cucumber, olives and feta cheese, served with our homemade Mediterranean dressing."
  },
  {
    id: 2,
    name: "Bruschetta Pasta",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    description:
      "Delicious pasta topped with fresh tomatoes, basil, garlic and extra virgin olive oil."
  },
  {
    id: 3,
    name: "Grilled Special",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    description:
      "A delicious grilled Mediterranean dish prepared with fresh ingredients and aromatic herbs."
  }
];

function Home() {
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant,
            focused on traditional recipes served with a
            modern twist.
          </p>

          <Link to="/booking" className="button">
            Reserve a Table
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Mediterranean restaurant dining table"
        />
      </section>

      <section className="specials">
        <div className="specials-heading">
          <h2>This Week's Specials!</h2>

          <Link to="/menu" className="button">
            View Menu
          </Link>
        </div>

        <div className="specials-grid">
          {specials.map((food) => (
            <article className="food-card" key={food.id}>
              <img
                src={food.image}
                alt={food.name}
              />

              <div className="food-card-content">
                <div className="food-card-title">
                  <h3>{food.name}</h3>
                  <strong>{food.price}</strong>
                </div>

                <p>{food.description}</p>

                <button
                  className="details-button"
                  onClick={() => setSelectedFood(food)}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Food details popup */}

      {selectedFood && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="food-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="food-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedFood(null)}
              aria-label="Close food details"
            >
              ×
            </button>

            <img
              src={selectedFood.image}
              alt={selectedFood.name}
            />

            <div className="modal-content">
              <h2 id="food-modal-title">
                {selectedFood.name}
              </h2>

              <h3>{selectedFood.price}</h3>

              <p>{selectedFood.description}</p>

              <Link
                to="/order"
                className="button"
                onClick={() => setSelectedFood(null)}
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
