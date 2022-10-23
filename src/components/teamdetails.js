import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { TeamsList } from "./Teamlist";
import { PlayerList } from "./playelist";
import { addPlayerToTeam, removePlayerFromTeam } from "../action/footballaction";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";


export default function Teams() {
  const updatedTeam = useSelector((state) => {
    return state?.teamsReducer?.teams;
  });
  const dispatch = useDispatch();
  const removePlayer = (teamId, playerId) => {
   
    dispatch(removePlayerFromTeam(teamId, playerId));
  };
  useEffect(() => {
    console.log("Upated team", updatedTeam);
  }, [updatedTeam]);
  

  return (
    <>
      <div
        style={{ marginBottom: "50px" }}
        className="shadowcard d-flex flex-wrap addplayertoteamstyle"
      >
        {updatedTeam.map((team, index) => {
          return (
            <>
              <Card
                className="card h-100 text-center p-3 m-2"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" className="teamimg"  src={team.logo} style={{width:"250px",height:"250px"}} />
                <Card.Body className="card-body">
                  <div className=" text-center cardtxt">
                    <Card.Title>{team.name}</Card.Title>
                  </div>
                

                  <div>
                    {/* <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Players
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {team?.players?.map((player) => {
                          return (
                            <Dropdown.Item>
                              <img
                                src={player.photo}
                                style={{ width: "30px" }}
                              />
                              <h5>{player.name} </h5>
                              <AiFillDelete
                                onClick={() => {
                                  removePlayer(team, player);
                                }}
                              />
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown> */}
                  {

                    team?.players?.map((player)=>{
                      return(
                        <>
                       <Card>
                       <img src={player.photo}/>
                        <h5>{player.name}</h5>
                        TEAM:<h5 style={{background:"red"}}>{team.name}</h5>
                        <Button variant="primary" onClick={()=>{
                          removePlayer(team,player);
                        }}>remove</Button>
                       </Card>
                        
                        
                        </>
                      )
                    })
                  }

                    
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
