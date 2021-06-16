import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Avatar, Box, Button, Card, CardHeader, Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function DocenteList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Docentes" />
        <Box
          sx={{
            minHeight: '100%',
            pr: 2,
            pb: 2,
            pl: 2
          }}
        >
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Box
                sx={{
                  minHeight: '100%',
                  pr: 3
                }}
              >
                <Avatar>GPI</Avatar>
              </Box>
              <Typography className={classes.heading}>Ekaterina Tankova</Typography>
              <Typography className={classes.secondaryHeading}>Gerencia de Proyecto Informaticos</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button LinkComponent={RouterLink}>
                    Entrar Materia
                  </Button>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Box
                sx={{
                  minHeight: '100%',
                  pr: 3
                }}
              >
                <Avatar>AL</Avatar>
              </Box>
              <Typography className={classes.heading}>Cao Yu</Typography>
              <Typography className={classes.secondaryHeading}>
                Algebra Linea
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button LinkComponent={RouterLink}>
                    Entrar Materia
                  </Button>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Box
                sx={{
                  minHeight: '100%',
                  pr: 3
                }}
              >
                <Avatar>PW</Avatar>
              </Box>
              <Typography className={classes.heading}>Alexa Richardson</Typography>
              <Typography className={classes.secondaryHeading}>
                Programacion Web
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button LinkComponent={RouterLink}>
                    Entrar Materia
                  </Button>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Box
                sx={{
                  minHeight: '100%',
                  pr: 3
                }}
              >
                <Avatar>E</Avatar>
              </Box>
              <Typography className={classes.heading}>Anje Keizer</Typography>
              <Typography className={classes.secondaryHeading}>
                Emprendimiento
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button LinkComponent={RouterLink}>
                    Entrar Materia
                  </Button>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Box
                sx={{
                  minHeight: '100%',
                  pr: 3
                }}
              >
                <Avatar>PG1</Avatar>
              </Box>
              <Typography className={classes.heading}>Clarke Gillebert</Typography>
              <Typography className={classes.secondaryHeading}>
                Proyecto de Grado 1
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button LinkComponent={RouterLink}>
                    Entrar Materia
                  </Button>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Card>
    </div>
  );
}
