import * as React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";
import Tutorial from "../components/autoevaluacion/tutorial.component";
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
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Tutorial />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  </div>
);

export default AddQ;
