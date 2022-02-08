// import React from "react";

// export default class Form extends React.Component {
//   state = {
//     firstName: "",
//     email: "",
//     message: "",
//     select: "",
//     checkbox: false,
//     gender: "",
//   };

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   chackedHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.checked });
//   };

//   validateName = () => {
//     if (this.state.firstName.length < 5) {
//       alert("Name must be over 5 letters");
//     }
//   };

//   render() {
//     const { firstName, email, message, select, checkbox } = this.state;
//     return (
//       <div>
//         <h1>Form</h1>
//         <input
//           type="text"
//           placeholder="FirstName"
//           name="firstName"
//           value={firstName}
//           onChange={this.changeHandler}
//           onBlur={this.validateName}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={this.changeHandler}
//         />
//         <textarea
//           placeholder="Message"
//           name="message"
//           value={message}
//           onChange={this.changeHandler}
//         />
//         <select name="select" value={select} onChange={this.changeHandler}>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>
//         <label for="checkbox">Checkbox</label>
//         <input
//           type="checkbox"
//           id="checkbox"
//           name="checkbox"
//           checked={checkbox}
//           onChange={this.chackedHandler}
//         />
//         <input
//           type="radio"
//           name="gander"
//           value="male"
//           onChange={this.changeHandler}
//         />
//         Male
//         <input
//           type="radio"
//           name="gander"
//           value="female"
//           onChange={this.changeHandler}
//         />
//         Female
//       </div>
//     );
//   }
// }

// Practice
import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
      isChecked: false,
    };
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.firstName.length === 16) {
        this.emailRef.current.focus();
      }
    });
  };

  chackedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    const isValidEmail = regex.test(this.state.email);
    const isValidChecked = this.state.isChecked;

    if (!isValidEmail) {
      alert("Not valid Email");
    } else if (!isValidChecked) {
      alert("You haven't agreed");
    } else {
      alert("Thank you for submission");
      this.setState({ email: "", isChecked: false });
    }
  };

  componentDidMount() {
    this.nameRef.current.focus();
  }

  render() {
    const { firstName, email, isChecked } = this.state;
    return (
      <div>
        <h1>Form Validation</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            ref={this.nameRef}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            ref={this.emailRef}
          />
          <br />
          <input
            type="checkbox"
            name="isChecked"
            id="isChecked"
            checked={isChecked}
            onChange={this.chackedHandler}
          />
          <label for="isChecked">I agree with terms and conditions</label>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
