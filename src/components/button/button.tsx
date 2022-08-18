import React from "react";
import { TextButton } from "./style";


class Button extends React.Component<any, {}> {
  // constructor() {
  //     super();

  //     this.state ={

  //     }
  //  }

  render() {
    return (
      <TextButton
        item={this.props.item}
        onClick={() => this.props.handleClick(this.props.item)}
      >
        {this.props.item}
      </TextButton>
    );
  }
}

export default Button;
