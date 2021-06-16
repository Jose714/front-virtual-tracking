import { Helmet } from "react-helmet";
import { Box, Card, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TutorialsList from "src/components/autoevaluacion/tutorials-list.component";
import { Divider } from "@material-ui/core";

const AutoEval = () => (
  <>
    <Helmet>
      <title>Autoevaluacion</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Grid
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Box sx={{ pl: 3, pr: 3 }}>
          <Grid item lg={21} md={6} xl={6} xs={12}>
            <Card>
              <Box sx={{ pt: 3, pl: 3, pr: 3, pb: 2 }}>
                <Typography align="center" variant="h3" color="primary">
                  Autoevaluación
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ pl: 3, pb: 3, pt: 1 }}>
                <TutorialsList />
                <Box sx={{ pt: 3 }}>
                  <Link to="/app/add">
                    <button style={{maxWidth: '200px', maxHeight: '40px', minWidth: '30px', minHeight: '30px'}} class="apB">Agregar Una Pregunta</button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </Box>
  </>
);

export default AutoEval;
