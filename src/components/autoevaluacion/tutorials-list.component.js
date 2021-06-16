import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./tutorials.css";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });

    TutorialDataService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <>
        <Grid
          container
          spacing={16}
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
          <Box sx={{ pl: 50 }}>
            <Grid item>
              <Box sx={{ pb: 1 }}>
                <Typography
                  align="center"
                  variant="h5"
                  color="primary"
                  paddingBottom="3"
                >
                  Lista de Preguntas
                </Typography>
              </Box>
              <ul>
                {tutorials &&
                  tutorials.map((test, index) => (
                    <Box sx={{ pb: 1 }}>
                      <div class="li">
                        <li
                          className={
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                          }
                          onClick={() => this.setActiveTutorial(test, index)}
                          key={index}
                        >
                          {test.question}
                        </li>
                      </div>
                    </Box>
                  ))}
              </ul>

              <Box sx={{ pl: 7.5 }}>
                <button
                  style={{
                    maxWidth: "150px",
                    maxHeight: "40px",
                    minWidth: "50px",
                    minHeight: "30px",
                  }}
                  class="raB"
                  onClick={this.removeAllTutorials}
                >
                  Eliminar Todos
                </button>
              </Box>
            </Grid>
          </Box>

          <Grid item>
            {currentTutorial ? (
              <div style={{ paddingTop: "15px" }}>
                <h4 class="info">Pregunta Agragada</h4>
                <Box sx={{ pl: 1 }}>
                  <div>
                    <label class="info">
                      <strong>Pregunta:</strong>
                    </label>{" "}
                    {currentTutorial.question}
                  </div>
                </Box>
                <Box sx={{ pl: 1 }}>
                  <div>
                    <label class="info">
                      <strong>Respuesta Correcta:</strong>
                    </label>{" "}
                    {currentTutorial.answer}
                  </div>
                </Box>

                <Link
                  to={"/edit/" + currentTutorial.id}
                  className="badge badge-warning"
                >
                  <Box sx={{ pt: 1, pl: 4 }}>
                    <Button
                      variant="contained"
                      class="eB"
                      style={{
                        maxWidth: "75px",
                        maxHeight: "35px",
                        minWidth: "30px",
                        minHeight: "30px",
                      }}
                    >
                      Editar
                    </Button>
                  </Box>
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p style={{ paddingTop: "15px" }}>
                  Haga clic en una pregunta...
                </p>
              </div>
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}
