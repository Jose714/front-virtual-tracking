import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Box } from "@material-ui/core";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      question: "",
      answer: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      question: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  saveTutorial() {
    var data = {
      question: this.state.question,
      answer: this.state.answer,
    };

    TutorialDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          question: response.data.question,
          answer: response.data.answer,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      question: "",
      answer: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4 style={{ color: "#2b5784" }}>La pregunta ha sido agregada existosamente.</h4>
            <Box sx={{ pl: 14, pt: 2 }}>
              <button onClick={this.newTutorial}>
                Agregar Mas
              </button>
            </Box>
          </div>
        ) : (
          <div>
            <div class="D1">
              <input
                class="aI"
                type="text"
                id="title"
                required
                value={this.state.question}
                onChange={this.onChangeTitle}
                name="title"
                placeholder="Añadir pregunta"
              />
            </div>

            <div class="D2">
              <input
                class="aI"
                type="text"
                id="description"
                required
                value={this.state.answer}
                onChange={this.onChangeDescription}
                name="description"
                placeholder="Respuesta correcta"
              />
            </div>

            <div class="subB">
              <button onClick={this.saveTutorial}>Agregar</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
