import {
  Card,
  CardHeader,
  Divider,
  Button,
  Box
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../../styles.css';

const TrafficByDevice = () => (
  <Card>
    <CardHeader title="Noticias de UPI" />
    <Divider />
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src="/static/Noticias.png" alt="demo" />
    </Box>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        px: 2,
        py: 1
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Ver
      </Button>
    </Box>
  </Card>
);

export default TrafficByDevice;
