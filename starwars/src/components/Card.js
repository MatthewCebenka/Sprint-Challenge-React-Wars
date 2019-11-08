import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
  } from 'reactstrap';
import './Card.css'

function CharacterCard(props) {

    return (
        <div>
          <Card inverse className='backgroundColor'>
                <CardImg height='300px' width="20%" src='https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200' alt="Card image" />
                <CardImgOverlay>
                <CardTitle >Name: {props.name}</CardTitle>
                <CardText >Age: {props.age}</CardText>
                <CardText>
                    <small className="text-muted"> </small>
                </CardText>
                </CardImgOverlay>
          </Card>
        </div>
      );
    };
export default CharacterCard;
