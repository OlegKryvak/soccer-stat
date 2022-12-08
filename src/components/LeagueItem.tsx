import React from "react";
import { Competition } from "../types";

type Props = {
  league: Competition
};

const LeagueItem = ({league}: Props) => {
  return <div>{league.name}</div>;
};

export default LeagueItem;
