// const About=(props)=>{
//     return(<div>what's that about: with some props {props.namer}</div>)
// }

// // we are doing this for lazy loading.. thingy
// export default About

import React, { Component } from "react";

class About extends Component {
  
 
    constructor(props) {
      super(props);
       this.state = {showTxt:false}
    }
  
    btnClicked=()=> {
      this.setState((prevState) => ({ 
     showTxt: !prevState.showTxt
  }))
    }
    render() {
      return (<React.Fragment>
            <a href="#" onClick={this.btnClicked}>Want to buy a new car?</a>
            {this.state.showTxt?
              <p>Call +11 22 33 44 now!</p>
             :
              <></>
            }
          </React.Fragment>);
    }
  }

  export default About