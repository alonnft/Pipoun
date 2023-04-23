import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "People",
          "Fun and",
          "NFT",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        onRemoveNode: `People Fun and NFT`,
      }}
    />
  );
}

export default Type;
