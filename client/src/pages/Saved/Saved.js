import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Book from "../../components/Book";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Google Books Search</h1>
              <h2 className="text-center">You can check your books here</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.deleteItem(book._id)}
                          className="btn btn-info ml-2"
                        >
                          DELETE
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">You don't have any saved books</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
