import { v4 as uuid } from 'uuid';

const customers = [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    email: 'ekaterina.tankova@devias.io',
    materia: 'Gerencia de Proyecto Informaticos',
    name: 'Ekaterina Tankova',
    grade: {
      amount: '3.7',
      color: '#508ff4'
    }
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    email: 'cao.yu@devias.io',
    materia: 'Algebra Linea',
    name: 'Cao Yu',
    grade: {
      amount: '5.0',
      color: '#2fe05e'
    }
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    email: 'alexa.richardson@devias.io',
    materia: 'Programacion Web',
    name: 'Alexa Richardson',
    grade: {
      amount: '2.2',
      color: '#ff0000'
    }
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    email: 'anje.keizer@devias.io',
    materia: 'Emprendimiento',
    name: 'Anje Keizer',
    grade: {
      amount: '3.6',
      color: '#508ff4'
    }
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    email: 'clarke.gillebert@devias.io',
    materia: 'Proyecto de Grado 1',
    name: 'Clarke Gillebert',
    grade: {
      amount: '4.2',
      color: '#508ff4'
    }
  },
  {
    id: uuid(),
    avatarUrl: '/static/blank.png',
    email: ' ',
    name: ' ',
    materia: 'Promedio',
    grade: {
      amount: '3.8',
      color: '#508ff4'
    }
  }
];

export default customers;
