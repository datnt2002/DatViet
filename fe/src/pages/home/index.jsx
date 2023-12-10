import React from "react";
import { Divider } from "antd";
import Footer from "../../components/Layout/Footer";

const Homepage = () => {
  return (
    <div>
      <div
        //  style={{ backgroundImage: `url(${introBg})` }}
        className="bg-cover"
      >
        <Divider className="mt-0 bg-black" />

        <div className="text-center mt-52 h-[27rem]">
          <h1 className="text-6xl mb-8  tracking-wide">Play to perfection</h1>
          <h1 className="text-6xl  tracking-wide">Inspire to greatness</h1>
        </div>

        <Divider className=" bg-black mt-0" />
      </div>
      <div
        style={{
          // backgroundImage: `url(${repeatBg})`,
          backgroundSize: "100% auto",
        }}
        className=" bg-repeat-y"
      >
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
