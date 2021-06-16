import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Viewer from '../components/fileviewer/FileViewer';

const Files = () => (
  <div>
    <Helmet>
      <title>Profesores</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box>
          <Viewer />
        </Box>
      </Container>
    </Box>
  </div>
);

export default Files;