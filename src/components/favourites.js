import React from "react";
import { Container, Row, Col, Card, Button, Navbar } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";

function Favourites() {
  let navigate = useNavigate();
  const favs = useSelector((state) => state.data.favs);

  return (
    <div className="text-center">
      <Button
        className="btn-sm mt-2 mb-2"
        variant="dark"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h6>Your favourite artists</h6>

      <Container>
        <Row>
          {favs.length > 0 ? (
            favs.map((item, index) => (
              <Col md={2} className="mb-2 text-center mt-4 " key={index}>
                <Card className="cardArtist">
                  <Card.Img
                    src={item.artist.picture}
                    className="img-responsive rounded-circle"
                    alt="not found"
                    height={160}
                  />
                  <Card.Title>{item.artist.name}</Card.Title>
                </Card>
              </Col>
            ))
          ) : (
            <h2> FAVOURITES IS EMPTY</h2>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Favourites;
