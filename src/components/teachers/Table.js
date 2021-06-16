/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Button, Divider } from '@material-ui/core';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#2b5784',
    color: '#ffffff',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function createData(name, fileName, date) {
  return {
    name,
    fileName,
    date,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: null,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.fileName}</TableCell>
        <TableCell align="right">
          <Link to="/app/cdarchivo">
            <Button>Ver/Descargar Archivo</Button>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h4" gutterBottom component="div" align="center">
                Historial
              </Typography>
              <Divider />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha (año/mes/dia)</TableCell>
                    <TableCell>Nombre de Archivo</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>
                        <Link to="/app/cdarchivo">
                          <Button type="button">
                            Ver/Descargar Archivo
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Jose Miller', 'File 1', '2021-04-23'),
  createData('Nixon Ochoa', 'File 2', '2021-05-03'),
  createData('Pablo Escobar', 'File 3', '2021-06-03'),
  createData('Deelan Duffis', 'File 4', '2021-04-13'),
  createData('James Rodriguez', 'File 5', '2021-03-27'),
];

export default function CTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>
              <Typography color="white">
                Estudiante
              </Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography color="white">
                Nombre de Archivo
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="right">
              <Typography color="white">
                Fecha Entregado
              </Typography>
            </StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
