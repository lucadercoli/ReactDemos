import React, { Component } from "react";
import { useParams } from "react-router";

const TopicsSubTwo = () => {
  const params = useParams();
  console.log(params);
  // debugger;
  return (
    <div>
      <h1>Topic #{params.id}</h1>
    </div>
  );
};

export default TopicsSubTwo;
