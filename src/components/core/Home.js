import React, {Component} from "react";
import "../../styles.css";
import Base from "./Base";

class Home extends Component {
  render(){
  return (
      <Base>
      <h1>Home page!</h1>
        <div className="row">        
          <div className="col-8 offset-2">
            <button className="btn btn-success">TEST</button>
          </div>
        </div>
      </Base>
    )
  }
}

export default Home;