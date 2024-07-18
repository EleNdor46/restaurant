import React, { useEffect, useState } from "react";
import allPositioins from "../API/fakeApi";
import CardList from "./cardList";
const Main = ({}) => {
  const [positions, setPositions] = useState();
  const [positionsRespons] = useState(
    allPositioins.then((position) => setPositions(position))
  );

  return (
    <div className="main">
      <CardList positions={positions} />
    </div>
  );
};

export default Main;
