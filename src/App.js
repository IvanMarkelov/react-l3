import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 2,
    };
  }

  changeSeason = (e) => {
    this.setState({
      value: +e.target.value,
    });
  };

  render() {
    const value = this.state.value;
    // if (value === 1) {
    //   return (
    //     <div className="season">
    //       <input type="number" min="1" max="4" onClick={this.changeSeason} />
    //       <img src="winter.jpg" alt="" />
    //       <h1>Зима</h1>
    //     </div>
    //   );
    // } else if (value === 2) {
    //   return (
    //     <div className="season">
    //       <input type="number" min="1" max="4" onClick={this.changeSeason} />
    //       <img src="spring.jpg" alt="" />
    //       <h1>Весна</h1>
    //     </div>
    //   );
    // } else if (value === 3) {
    //   return (
    //     <div className="season">
    //       <input type="number" min="1" max="4" onClick={this.changeSeason} />
    //       <img src="summer.jpg" alt="" />
    //       <h1>Лето</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="season">
    //       <input type="number" min="1" max="4" onClick={this.changeSeason} />
    //       <img src="autumn.jpg" alt="" />
    //       <h1>Осень</h1>
    //     </div>
    //   );
    // }

    return (
      <div>
        <input type="number" min="1" max="4" onClick={this.changeSeason} />
        <img
          src={
            value === 1
              ? "winter.jpg"
              : value === 2
              ? "spring.jpg"
              : value === 3
              ? "summer.jpg"
              : "autumn.jpg"
          }
          alt=""
        />
        <div>
          {value === 1
            ? "Зима"
            : value === 1
            ? "Весна"
            : value === 1
            ? "Лето"
            : "Осень"}
        </div>
      </div>
    );

    // return (
    //   <div className="season">
    //     <input type="number" min="1" max="4" onClick={this.changeSeason}/>
    //     {value === 1 && (
    //       <Fragment>
    //         <img src="winter.jpg" alt="" />
    //         <h1>Зима</h1>
    //       </Fragment>
    //     )}
    //     {value === 2 && (
    //       <Fragment>
    //         <img src="spring.jpg" alt="" />
    //         <h1>Весна</h1>
    //       </Fragment>
    //     )}
    //     {value === 3 && (
    //       <Fragment>
    //         <img src="summer.jpg" alt="" />
    //         <h1>Лето</h1>
    //       </Fragment>
    //     )}
    //     {value === 4 && (
    //       <Fragment>
    //         <img src="autumn.jpg" alt="" />
    //         <h1>Осень</h1>
    //       </Fragment>
    //     )}
    //   </div>
    // );
  }
}

export default App;
