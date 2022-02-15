// import React from "react";

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoriteColor: this.props.favoriteColor };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//       setTimeout(() => {
//         this.setState({ favoriteColor: "violet" });
//       }, 2000);//1 segundo
//     }, 1000);//1 segundo
//   }

//   componentDidUpdate() {
//     console.log("el componente se ha actualizado");
//   }

//   render() {
//     return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
//   }
// }

// import React from "react";

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }

//   handleRemove = () => this.setState({ show: false });

//   render() {
//     return (
//       <div>
//         {this.state.show ? <ExampleChild /> : null}
//         <button onClick={this.handleRemove}>Eliminar el componete ExampleChild</button>
//       </div>
//     );
//   }
// }

// class ExampleChild extends React.Component {
//     componentWillUnmount() {
//         alert("El componente ExampleChild esta apunto de ser eliminado(desmontado).");
//     }
//     render() {
//         return <h1>Hola The Bridge!</h1>;
//     }
// }

import React, { useState, useEffect } from "react";

// const Example = () => {
//   const [favoriteColor, setFavoriteColor] = useState('red');
//   //componentDidMount
//   useEffect(() => {
//     setTimeout(() => {
//       setFavoriteColor("yellow");
//     }, 1000);
//   }, []);

//   //componentDidUpdate
//   useEffect(() => {
//    console.log('el componente se ha actualizado')
//   });
//   return <h1>My Favorite Color is {favoriteColor}</h1>;
// };

// export default Example;

const Example = () => {
    const [show, setshow] = useState(true);
  
    const handleRemove = () => setshow(false);
  
    return (
      <div>
        {show ? <ExampleChild /> : null}
        <button onClick={handleRemove}>Eliminar el componete ExampleChild</button>
      </div>
    );
  };
  export default Example;

  const ExampleChild = () => {
    useEffect(() => {
      return () => {
        alert("El componente ExampleChild ha sido eliminado(desmontado).");
      };
    });
    return <h1>Hola The Bridge!</h1>;
  };