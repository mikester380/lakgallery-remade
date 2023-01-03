import React from "react";
import Product from "../components/Product";
import TeamMember from "../components/TeamMember";
import GalleryImage from "../components/GalleryImage";
import { products, team, instagram } from "../data/data";

const Hompage = function () {
  return (
    <main className="main">
      <div className="home">
        <section className="home__section">
          <div className="home__title">
            <span className="home__title-sub">(A)</span>
            <h2 className="home__title-main">Chairs</h2>
          </div>
          <div className="home__products home__products--grid">
            {products
              .filter((product) => product.category === "chairs")
              .slice(0, 5)
              .map(({ title, creator, price, images, id }) => (
                <Product
                  creator={creator}
                  title={title}
                  image={images[0]}
                  price={price}
                  id={id}
                  key={id}
                />
              ))}
          </div>
        </section>
        <section className="home__section">
          <div className="home__title">
            <span className="home__title-sub">(B)</span>
            <h2 className="home__title-main">Mirrors</h2>
          </div>
          <div className="home__products home__products--split">
            {products
              .filter((product) => product.category === "mirrors")
              .slice(0, 3)
              .map(({ title, creator, price, images, id }) => (
                <Product
                  creator={creator}
                  title={title}
                  image={images[0]}
                  price={price}
                  id={id}
                  key={id}
                />
              ))}
          </div>
        </section>
        <section className="home__section">
          <div className="home__title">
            <span className="home__title-sub">(C)</span>
            <h2 className="home__title-main">Table Lamps</h2>
          </div>
          <div className="home__products home__products--grid">
            {products
              .filter((product) => product.category === "table lamps")
              .slice(0, 5)
              .map(({ title, creator, price, images, id }) => (
                <Product
                  creator={creator}
                  title={title}
                  image={images[0]}
                  price={price}
                  id={id}
                  key={id}
                />
              ))}
          </div>
        </section>
        <section className="home__section">
          <div className="home__title">
            <span className="home__title-sub">(D)</span>
            <h2 className="home__title-main">Artists, Designers & Studios</h2>
          </div>
          <div className="home__team">
            {team.map(({ name, photo }) => (
              <TeamMember name={name} photo={photo} key={name} />
            ))}
          </div>
        </section>
        <section className="home__section">
          <div className="home__title">
            <span className="home__title-sub">(E)</span>
            <h2 className="home__title-main">@lakgallery_</h2>
          </div>
          <div className="home__gallery">
            {instagram.map(({ link, image, id }) => (
              <GalleryImage link={link} image={image} key={id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hompage;
