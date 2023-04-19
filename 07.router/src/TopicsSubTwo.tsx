import React, { Component } from "react";
import { useParams } from "react-router";

const TopicsSubTwo = () => {
  const params = useParams();
  console.log(params);
  // debugger;
  return (
    <div>
      <h1>Topic #{params.id}</h1>
      {params.pagesize && <h1>PageSize #{params.pagesize}</h1>}
    </div>
  );
};

export default TopicsSubTwo;
