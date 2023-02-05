import React from "react";
import Intro from "../components/modules/Intro";
import About from "../components/modules/About";
import BlobsPlayground from "../components/aimations/BlobsPlayground";

function Home() {
  return (
    <BlobsPlayground>
      <Intro />
      <About />
    </BlobsPlayground>
  );
}

export default Home;
