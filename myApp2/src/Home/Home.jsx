import myphoto from "../assets/myphoto.jpg";
import React from "react";
function Home() {
  return (
    <>
      <div
        className="center py-4 text-white "
        style={{ backgroundColor: "#1abc9c" }}
      >
        <img src={myphoto} alt="myphoto" className="w-25 rounded-circle" />
        <h1 className="text-uppercase mb-3 fs-1 fw-bolder mt-3">
          Salem El Sayed fareed
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
          voluptatibus vel architecto incidunt a! Odit, iste fugit! Cumque
          itaque veniam unde mollitia fuga, laudantium aliquid est numquam et
          aperiam? Odit!
        </p>
      </div>
    </>
  );
}

export default Home;
