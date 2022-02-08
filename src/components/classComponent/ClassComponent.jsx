import { Component } from "react";

class ClassCompon extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      loading: false,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStart() {
    this.setState({ loading: true });
    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  handleStop() {
    this.setState({ loading: false });
    clearInterval(this.counterId);
  }

  handleReset() {
    this.setState({ loading: false, count: 0 });
    clearInterval(this.counterId);
  }

  componentDidMount() {
    console.log("componentDidMount");
    const userCount = localStorage.getItem("timer");
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.counterId);
  }

  render() {
    return (
      <div className="ClassCompon">
        <p>{this.state.count}</p>
        {!this.state.loading ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default ClassCompon;
