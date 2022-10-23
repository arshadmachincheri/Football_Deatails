import { actionTypes } from "../action/actionTypes";


const initialState = {
  teams: [
    {
      id: 1,
      logo: "https://lh3.googleusercontent.com/OQZi4ckWAs7UrOlZEPefXZgJOcdJuSM5FSH9zqD5rMg6c2MOaxcKpV5IMrb1Tju98fWyNmcI33E4RGb0uC09Ej4W",
      name: "FC Barcelona",
      players: [],
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      name: "Real Madrid CF",
      players: [],
    },
    {
      id: 3,
      logo: "https://lh3.googleusercontent.com/dtFuCbfBxODq263Ramrmu-7jXxjsdL2YdyXA243PtwLr2U5xOAaUi63FwSgDRKuNTXCyPEyghjW-D2EVlfjnp4HU",
      name: "Paris Saint-Germain F.C.",
      players: [],
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      name: "Arsenal",
      players: [],
    },
    
  ],
  playerList: [
    {
      id: 1,
      photo:
        "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/EB07/production/_126876106_gettyimages-1243562158.jpg",
      name: "Lionel Messi",
      position: "Forward",
      available: true,
    },
    {
      id: 2,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyoaxrHktaR1yidLRoKFd-RhJfpF7uFYaHxw&usqp=CAU",
      name: "Pedri",
      position: "Midfilder",
      available: true,
    },
    {
      id: 3,
      photo:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/08/113689.jpg",
      name: "Neymar",
      position: "Forward",
      available: true,
    },
    {
      id: 4,
      photo:
        "https://e0.365dm.com/22/07/768x432/skysports-lisandro-martinez_5824478.jpg?20220705145121",
      name: "Lisandro Martínez",
      position: "Difender",
      available: true,
    },
    {
      id: 5,
      photo:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc2fe5b81d294c45c/6225b5b6e74bec0b12ad36ab/GettyImages-1381404937.jpg",
      name: "Kevin De Bruyne",
      position: "Midfilder",
      available: true,
    },
    {
      id: 6,
      photo:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt88c2812b616313f3/629382ca188b9a0fa461eff8/Luka.jpg",
      name: "Luka Modrić",
      position: "Midfilder",
      available: true,
    },
  ],
};
export const teamReducer = (state = initialState, action) => {
  console.log("reached reducer");
  switch (action.type) {
    case actionTypes.ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case actionTypes.ADD_PLAYER_TO_TEAM:
    //  console.log("payload reducer add", action.payload);
     
      const stateCopy = { ...state };

      const team = stateCopy.teams.find((t) => t.id == action.payload.team.id);
    
      if (team) {
        let playerAlreadyAdded = false;
        stateCopy.teams.forEach((t) => {
          const existingPlayerWithSameId = t.players.find((p) => p.id == action.payload.playerId
          );
          if (existingPlayerWithSameId) {
            playerAlreadyAdded = true;
          }
        });

        if (playerAlreadyAdded == false) {
          team.players.push(action.payload.player);
          const playerFromPList = stateCopy?.playerList?.find((p) => p.id === action.payload.player.id
          );
          if (playerFromPList) {
            playerFromPList.available = false;
          }
          return stateCopy;
        }
      }

      return stateCopy;

    case actionTypes.REMOVE_PLAYER_FROM_TEAM:
      const stateClone = { ...state };
      const teams=[...state.teams]
      const playerList=[...state.playerList]
      const teamObj = teams.find((t) => t.id == action.payload.team.id
      );
      console.log("reducr teamId:", action.payload);

      teamObj.players = teamObj?.players?.filter((p) => p.id !== action.payload.player.id
      );
      
      const deletedPlayer=playerList.find((player)=>player.id==action.payload.player.id)
      deletedPlayer.available=true;
      console.log("stateClone", stateClone.playerList);
      return {
        ...state,
        teams:teams,
        playerList:playerList
      };

    default:
      return state;
      break;
  }
};
