import * as React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Typography, Paper, Grid } from "@material-ui/core";
import CTable from "src/components/teachers/Table";
import Upload from "src/components/teachers/Upload";

const Teachers = () => (
  <div>
    <Helmet>
      <title>Profesores</title>
    </Helmet>
    <Container>
      <Box>
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item lg={21} md={6} xl={6} xs={12}>
            <Box sx={{ pt: 3, pb: 3 }}>
              <Paper>
                <Box sx={{ p: 3 }}>
                  <Upload />
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={6}>
            <Box sx={{ pb: 3 }}>
              <Paper>
                <Box sx={{ p: 3 }}>
                  <Typography align="center" variant="h3" color="primary">
                    Archivos Entregados
                  </Typography>
                </Box>
                <Box sx={{ pl: 3, pb: 3, pr: 3 }}>
                  <CTable />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </div>
);

export default Teachers;
