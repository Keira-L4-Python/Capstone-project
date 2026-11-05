import React from "react";

function Main() {
  return (
    <main>
      <section className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>

        <p>
          We are a family-owned Mediterranean restaurant,
          focused on traditional recipes with a modern twist.
        </p>

        <a href="/reservations" className="reserve-button">
          Reserve a Table
        </a>
      </section>

      <section className="highlights">
        <h2>Our Specials</h2>

        <div className="specials">
          <article>
            <h3>Greek Salad</h3>
            <p>A fresh Mediterranean salad with delicious ingredients.</p>
          </article>

          <article>
            <h3>Bruschetta</h3>
            <p>Fresh bread topped with tomatoes and herbs.</p>
          </article>

          <article>
            <h3>Lemon Dessert</h3>
            <p>A delicious dessert with a refreshing lemon flavour.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;
