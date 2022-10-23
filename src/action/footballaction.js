import { actionTypes } from "./actionTypes";
import { type } from "@testing-library/user-event/dist/type";


export const addTeam = (teamData) => {
  // console.log("teamAcction",teamData)
  return {
    type: actionTypes.ADD_TEAM,
    payload: teamData,
  };
};

export const addPlayerToTeam = (team, player) => {
  // console.log("payload", team, player);
  return {
    type: actionTypes.ADD_PLAYER_TO_TEAM,
    payload: { team, player },
  };
};

export const removePlayerFromTeam = (team, player) => {
  console.log("remove", player);
  //console.log(" action teamId:",teamId,"playerId:",playerId)
  return {
    type: actionTypes.REMOVE_PLAYER_FROM_TEAM,
    payload: { team, player },
  };
};

export const addPlayer = () => {
  return {
    type: actionTypes.ADD_PLAYER,
  };
};
