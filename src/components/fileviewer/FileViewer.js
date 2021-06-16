import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FileViewer from 'react-file-viewer';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const file = 'https://docs.google.com/document/d/1SC8meub1uvbwCkt2ZI6bbK3YR7-vIwgJxv-HjpZyI5M/edit';
const type = 'docx';

class Viewer extends Component {
  onError(e) {
    this.logger.logError(e, 'error in file-viewer');
  }

  render() {
    return (
      <Paper>
        <Box sx={{ p: 1 }}>
          <Link to="/app/teachers">
            <Button>
              <Box sx={{ paddingRight: 0.5, paddingTop: 0.8 }}>
                <ArrowBackIcon />
              </Box>
              <Typography fontWeight="800" color="primary">Volver</Typography>
            </Button>
          </Link>
        </Box>
        <Box sx={{ p: 3 }}>
          <FileViewer
            fileType={type}
            filePath={file}
            onError={this.onError}
          />
        </Box>
      </Paper>
    );
  }
}

export default Viewer;
