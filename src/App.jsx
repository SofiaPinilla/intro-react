import React from 'react'
import './App.css';
import Counter from './components/Counter/Counter';
import Example from './components/Example/Example';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { UserForm } from './components/UserForm/UserForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const name = "Roberto";
// const whoIAm = <h1>Hola, me llamo {name}</h1>;

// const Welcome = props => {
//   return <h3>Hello {props.name}</h3>
// }

// class Welcome extends React.Component {
//   render() {
//       return <h1>Hello {this.props.name}</h1>;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gmail.com",
    status: "active",
  },
];

const listItems = members.map((member) => {
  return (
    <li key={member.id} >
      <span>{member.email}</span>
      <br />
      <span>{member.name}</span>
    </li>
  )   
});


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      </Router>  
    </div>
  );
}


export default App;
