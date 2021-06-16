import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    trabajo: 'Parcial',
    materia: 'Gerencia de Proyecto Informaticos',
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: {
      name: 'Pendiente',
      colorStatus: 'orange'
    }
  },
  {
    id: uuid(),
    trabajo: 'Quiz 3',
    materia: 'Algebra Linea',
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: {
      name: 'Entregado',
      colorStatus: '#2fe05e'
    }
  },
  {
    id: uuid(),
    trabajo: 'Styles',
    materia: 'Programmacion Web',
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: {
      name: 'Calificado',
      colorStatus: '#508ff4'
    }
  },
  {
    id: uuid(),
    trabajo: 'Elevator Pitch',
    materia: 'Emprendimiento',
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: {
      name: 'Pendiente',
      colorStatus: 'orange'
    }
  },
  {
    id: uuid(),
    trabajo: 'Final',
    materia: 'Proyecto de Grado 1',
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: {
      name: 'No Entregado',
      colorStatus: 'red'
    }
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Entregables" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Trabajo
              </TableCell>
              <TableCell>
                Materia
              </TableCell>
              <TableCell>
                Docente
              </TableCell>
              <TableCell>
                Fecha de Entrega
              </TableCell>
              <TableCell>
                Estado
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.trabajo}
                </TableCell>
                <TableCell>
                  {order.materia}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    style={{
                      backgroundColor: order.status.colorStatus,
                      fontWeight: 'bold'
                    }}
                    label={order.status.name}
                    size="medium"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
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
        Ver Todos
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
