import React from 'react';
import './SobreNosotros.css'
import { Link } from 'react-router-dom';
export function SobreNosotros() {

  return (

    <section>

      <h1>About US</h1>

      <main>
        <section className="no-box">
          <h2>My History</h2>
         
           <p> I'm a passionate video game enthusiast with the mission of providing the best online video game search experience. What started as a small personal project has grown into a platform I hope becomes your go-to site for discovering games. </p>
         
        </section>

        <section className="no-box">
          <h2>My Vision</h2>
          <p>
At JuegosFlix, I believe that discovering your next favorite video game should be exciting and effortless. As a developer, designer, and gamer, I created an intuitive platform for finding games across genres and platforms. Whether you're a casual player or a hardcore gamer, JuegosFlix is designed to enhance your search and discovery journey.          </p>
        </section>

        <section className="no-box">
          <h2>Contact us</h2>
          <p>
            Feel free to get in touch with us if you have any questions or suggestions. You can reach us at JuegosFlix@gmail.com. ¡We are here to help you!</p>
        </section>
      </main>
    </section>


  );
};


