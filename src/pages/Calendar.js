import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
} from '@material-ui/core';
import Demo from 'src/components/calendario/Calendario';

const Calendar = () => (
  <>
    <Helmet>
      <title>Calendario</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Demo />
      </Container>
    </Box>
  </>
);

export default Calendar;
