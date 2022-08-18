import React from "react";
import Button from "../button/button";

import {
  Body,
  ButtonContainer,
  ButtonLayer,
  DisplayScreen,
  DisplayText,
  NumbersContainer,
  SignsContainer,
} from "./style";

interface displayState {
  value?: string;
  total?: number;
  memory?: string;
}

class Calculator extends React.Component<any, displayState> {
  constructor(props: any) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: "",
      total: 0,
      memory: "",
    };
    this.setState({
      value: "0",
    });
  }
  // const [first, setfirst] = useState(second)
  // value: any = "0";
  // total: any;
  handleClick = (x: any) => {
    // console.log(x);
    if (
      this.state.value === "0" ||
      this.state.value === "00" ||
      this.state.value === null ||
      this.state.value === undefined
    ) {
      // x = JSON.parse(x);
      // this.setState({ value: x });
      this.setState({
        total: x,
      });
    } else if (x === "=") {
      this.setState({
        value: JSON.parse(this.state.value),
      });
    } else {
      this.setState({
        value: this.state.value + x,
      });
    }
    console.log(typeof x);
    // console.log(this.value);
  };

  render() {
    return (
      <Body>
        <DisplayScreen>
          <DisplayText>{this.state.value}</DisplayText>
        </DisplayScreen>
        <ButtonContainer>
          <NumbersContainer>
            <ButtonLayer>
              <Button item={7} handleClick={this.handleClick} />
              <Button item={8} handleClick={this.handleClick} />
              <Button item={9} handleClick={this.handleClick} />
            </ButtonLayer>
            <ButtonLayer>
              <Button item={4} handleClick={this.handleClick} />
              <Button item={5} handleClick={this.handleClick} />
              <Button item={6} handleClick={this.handleClick} />
            </ButtonLayer>
            <ButtonLayer>
              <Button item={1} handleClick={this.handleClick} />
              <Button item={2} handleClick={this.handleClick} />
              <Button item={3} handleClick={this.handleClick} />
            </ButtonLayer>
            <ButtonLayer>
              <Button item={"."} handleClick={this.handleClick} />
              <Button item={0} handleClick={this.handleClick} />
              <Button item={"00"} handleClick={this.handleClick} />
            </ButtonLayer>
          </NumbersContainer>
          <SignsContainer>
            <ButtonLayer>
              <Button item={"M-"} handleClick={this.handleClick} />
              <Button item={"M+"} handleClick={this.handleClick} />
            </ButtonLayer>
            <ButtonLayer>
              <Button item={"-"} handleClick={this.handleClick} />
              <Button item={"+"} handleClick={this.handleClick} />
            </ButtonLayer>
            <ButtonLayer>
              <Button item={"*"} handleClick={this.handleClick} />
              <Button item={"/"} handleClick={this.handleClick} />
            </ButtonLayer>
            <ButtonLayer>
              <Button item={"="} handleClick={this.handleClick} />
            </ButtonLayer>
          </SignsContainer>
        </ButtonContainer>
      </Body>
    );
  }
}

export default Calculator;
