import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  // Setting our component's initial state
  state = {
    preferences:[],
    id: "",
    hotel_pref: "",
    activity_pref: "",
    restaurant_pref: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadPreferences();
  }

  // Loads all books  and sets them to this.state.books
  loadPreferences = () => {
    API.getPreferences()
      .then(res =>
        this.setState({ preferences: res.data, id: "", hotel_pref: "", activity_pref: "", restaurant_pref:"" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deletePreference = id => {
    API.deletePreference(id)
      .then(res => this.loadPreference())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savePreference({
        hotel_pref: this.state.hotel_pref,
        activity_pref: this.state.activity_pref,
        restaurant_pref: this.state.restaurant_pref
      })
        .then(res => this.loadPreferences())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Preference should I choose?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.hotel_pref}
                onChange={this.handleInputChange}
                name="hotel preference"
                placeholder="hotel preference (required)"
              />
              <Input
                value={this.state.activity_pref}
                onChange={this.handleInputChange}
                name="city preference"
                placeholder="city preference (Optional)"
              />
              <TextArea
                value={this.state.restaurant_pref}
                onChange={this.handleInputChange}
                name="restaurant preference"
                placeholder="restaurant preference (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Preference
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Preferences On My List</h1>
            </Jumbotron>
            {this.state.preference.length ? (
              <List>
                {this.state.preferences.map(preference => {
                  return (
                    <ListItem key={preference._id}>
                      <a href={"/preferences/" + preference._id}>
                        <strong>
                          {preference.hotel_pref} by {preference.id}
                          {preference.actitivity_pref} by {preference.id}
                          {preference.restaurant_pref} by {preference.id}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deletePreference(preference._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Members;