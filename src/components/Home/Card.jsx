import React from "react";
import Cards from "./Data";
import "./Home.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <section className="main-container">
        <div className="heading-section">
          <h1 className="font-heading">
            Hi, <span className="ml-5">Saarim</span>
          </h1>
        </div>
        <div className="random-texts">
          <h3 className="font-bold">
            How are a few song recommendations just for you
          </h3>
        </div>
        <main className="song-cards">
          {Cards.map((items) => {
            console.log(items);
            const { id, img, song, artist } = items;
            return (
              <article className="card" key={id}>
                <img src={img} alt="" />
                <h5>{song}</h5>
                <p>{artist}</p>
              </article>
            );
          })}
        </main>
        <div className="down_head ">
          <h2 className="text-3xl font-bold">
            Some catchy heading I could't think of
          </h2>
          <h4 className=" my-12 font-semibold ">
            Make your selection and go ahead
          </h4>
        </div>

        <div className="flex justify-evenly">
          <div className="instrumental-inner flex flex-col justify-evenly items-center ">
            <button>
              <a href="" target="_blank">
                <img src="/karaoke.png" alt="" />
              </a>
            </button>
            <h2 className="text-2xl">Karaoke</h2>
          </div>
          <div className="instrumental-inner flex flex-col justify-evenly items-center ">
            <button>
              <a href="" target="_blank">
                <img src="/instruments.png" alt="" />
              </a>
            </button>
            <h2 className="text-2xl">Instruments</h2>
          </div>
          <div className="instrumental-inner flex flex-col justify-evenly items-center mt-7">
            <button>
              <a href="" target="_blank">
                <img src="/remix.png" alt="" />
              </a>
            </button>
            <h2 className="text-2xl">Remix</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
