import React, { useEffect } from "react";
import { PlayerList } from "./playelist";
import Card from "react-bootstrap/Card";
import { TeamList } from "./Teamlist";

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPlayer, addTeam } from "../action/footballaction";
import { Navigate, useNavigate } from "react-router-dom";
import { teamReducer } from "../reducer/footballreducer";
import { LeaugesList } from "./list";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //add team
  const onAddTeam = (teamData) => {
    console.log("teamDta", teamData);
    dispatch(addTeam(teamData));
  };

  //add player
  // const onAddPlayer=()=>{
  //   dispatch(addPlayer());
  // }

  const Players = PlayerList.map((player) => {
    return (
      <>
        <div style={{ marginBottom: "50px" }} >
          <Card
             className="card h-100 text-center p-3 m-2 "
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              className="teamimg"
              src={player.photo}
             style={{width:"250px",height:"250px"}}
            />
            <Card.Body className="card-body">
              <div className=" text-center cardtxt">
                <Card.Title>{player.name}</Card.Title>
                <Card.Title>{player.position}</Card.Title>
              </div>
              {/* <div><Button onClick={()=>{onAddPlayer(player);navigate("/players")}}>Add Player</Button></div> */}
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });
  const teams = TeamList.map((p) => {
    return (
      <>
        <div style={{ marginBottom: "50px" }} >
          <Card
             className="card h-100 text-center p-3 m-2"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              className="teamimg"
              src={p.logo}
              style={{width:"250px",height:"250px"}}
            />
            <Card.Body className="card-body">
              <div className=" text-center cardtxt">
                <Card.Title>{p.name}</Card.Title>
              </div>
            
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });

  // const leagues = LeaugesList.map((league) => {
  //   return (
  //     <>
  //       <div style={{ marginBottom: "50px" }} className="shadowcard ">
  //         <Card
  //           className="card h-100 text-center p-3 m-2 border"
  //           style={{ width: "18rem" }}
  //         >
  //           <Card.Img
  //             variant="top"
  //             className="teamimg"
  //             src={league.logo}
  //             height250px
  //           />
  //           <Card.Body className="card-body">
  //             <div className=" text-center cardtxt">
  //               <Card.Title>{league.name}</Card.Title>
  //             </div>
  //             {/* <div><Button onClick={()=>{onAddPlayer(player);navigate("/players")}}>Add Player</Button></div> */}
  //           </Card.Body>
  //         </Card>
  //       </div>
  //     </>
  //   );
  // });
  return (
    <>
    <div className="main-part">
      {/* <div className="d-flex flex-wrap border">{leagues}</div> */}
     <h1>Teams</h1>: <div className="d-flex flex-wrap border">{teams}</div>
     <h1>Players</h1> <div className="d-flex flex-wrap border">{Players}</div>
     </div>
    </>
  );
}