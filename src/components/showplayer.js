import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addPlayerToTeam } from "../action/footballaction";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";



export default function Players() {
  const [player, setPlayer] = useState([]);
  // const [teamid, setteamid] = useState();
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    //not use setSelectedTeam(selectedTeam);
  };
  // ok button working
  const handleShow = (oneplayer) => {
    setPlayer(oneplayer);
    setShow(true);
  };

  const playerData = useSelector((state) => {
    return state.teamsReducer.playerList;
  });
  useEffect(() => {
    // console.log("state", playerData);
  }, [playerData]);

  const teamdData = useSelector((state) => {
    return state.teamsReducer.teams;
  });
  console.log("teamDtata", teamdData);

  const addPlayer = (player,selectedTeam) => {
    dispatch(addPlayerToTeam(selectedTeam, player));
    // setSelectedTeam(selectedTeam);
     handleClose();
  };
  // const onAddPlayer = (team) => {
  //   setSelectedTeam(team);
  // };
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="playerbgstyle">
        {playerData?.map((n) => {
          //console.log("playerdata", playerData);
          return (
            <>
              <Card
                className="card h-100 text-center p-3 m-2"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  className="teamimg"
                  variant="top"
                  src={n.photo}
                />
                <Card.Body>
                  <Card.Title>{n.name}</Card.Title>
                  <Card.Title>{n.position}</Card.Title>
                  <Button
                    disabled={!n.available}
                    variant="primary"
                    onClick={() => handleShow(n)}
                    // onChange={(event) => {
                    //   const id = Number(event.target.value);
                    //   setteamid(id);
                    // }}
                  >
                    ADD TO TEAM
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Player To Team</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {" "}
           

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Team
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {teamdData?.map((team) => {
                  return (
                    <Dropdown.Item
                      href="#"
                      onClick={()=>{setSelectedTeam(team)}}
                    >
                      {team.id}
                      <img src={team.logo} style={{ width: "30px" }} />
                      {team.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addPlayer(player,selectedTeam)}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
