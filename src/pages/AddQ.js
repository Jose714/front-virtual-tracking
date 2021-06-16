import * as React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";
import AddTutorial from "../components/autoevaluacion/add-tutorial.component";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid } from "@material-ui/core";

const AddQ = () => (
  <div>
    <Helmet>
      <title>Agregar Pregunta</title>
    </Helmet>

    <Box sx={{ p: 3 }}>
      <Paper>
        <Box sx={{ p: 1 }}>
          <Link to="/app/autoevaluacion">
            <Button>
              <Box sx={{ paddingRight: 0.5, paddingTop: 0.8 }}>
                <ArrowBackIcon />
              </Box>
              <Typography fontWeight="800" color="primary">
                Volver
              </Typography>
            </Button>
          </Link>
        </Box>
        <Box sx={{ px: 3, pb: 3 }}>
          <Box sx={{ pb: 3 }}>
            <Typography
              align="center"
              fontWeight="600"
              color="primary"
              variant="h3"
            >
              Agregar Preguntas
            </Typography>
          </Box>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <AddTutorial />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  </div>
);

export default AddQ;
