import {
  Navigate
} from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/Materias';
import Dashboard from 'src/pages/Dashboard';
import Settings from 'src/pages/Settings';
import Demo from 'src/pages/Calendar';
import SignIn from 'src/components/login/login';
import Registroinicio from 'src/components/registro/Inicio';
import Teacher from 'src/pages/Teacher';
import ArchViewer from './pages/FileViewer';
import AutoEval from './pages/Autoevaluacion';
import AddQ from './pages/AddQ';
import EditQ from './pages/EditQ';
import Evalua from './components/evaluacion/Index';

const routes = [{
    path: 'login',
    element: <SignIn />
  },
  {
    path: 'registro',
    element: <Registroinicio />
  },
  {
    path: 'evaluacion',
    element: <Evalua />
  },
  {
    path: 'app',
    element: <DashboardLayout /> ,
    children: [{
        path: 'account',
        element: <Account />
      },
      {
        path: 'customers',
        element: <CustomerList />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'products',
        element: <Demo />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'teachers',
        element: <Teacher />
      },
      { 
        path: 'cdarchivo', 
        element: <ArchViewer />
      },
      { 
        path: 'autoevaluacion', 
        element: <AutoEval />
      },
      {
        path: 'add', 
        element: <AddQ />
      },
      {
        path: 'edit', 
        element: <EditQ />
      }
    ]
  },

  {
    path: '/',
    element: < MainLayout / > ,
    children: [{
      path: '/',
      element: < Navigate to = "/login" / >
    }]
  }
];

export default routes;