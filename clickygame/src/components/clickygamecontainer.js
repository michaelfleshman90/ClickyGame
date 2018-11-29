import React from "react";
//import Container from './Container';


class Clickygame extends React.Component {

    state = {
      count: 0
  };

  imageClick = () => {

      this.setState({ count: this.state.count + 1});
  };

    // render() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <h1>Clicky Game!</h1>
            
    //       </header>
    //     </div>
    //   );
    // }
}

export default Clickygame;