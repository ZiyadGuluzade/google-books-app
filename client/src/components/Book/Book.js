import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./Book.css";

const Book = ({ title, subtitle, authors, link, description, image, Button }) => (
  <ListItem>
    <Row className="flex-wrap-reverse">
      <Col size="md-8">
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
      </Col>
      <Col size="md-4">
        <div className="btn-container">
          <a className="btn btn-warning" target="_blank" rel="noopener noreferrer" href={link}>
            Info
          </a>
          <Button />
        </div>
      </Col>
    </Row>
    <Row>
      <Col size="md-6">
        <h5>Author {authors}</h5>
      </Col>
    </Row>
    <Row>
      <Col size="12 sm-4 md-2">
        <img className="img-thumbnail img-fluid w-200" src={image} alt={title} />
      </Col>
      <Col size="12 sm-8 md-10">
        <p>{description}</p>
      </Col>
    </Row>
  </ListItem>
);

export default Book;
