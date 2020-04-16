import React, { Component } from 'react';

class AddBooksPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      employee: '',
      company: '',
      description: '',
      date: '',
      assigned: '',
      completedDate: ''
    }
  }

  formRef = React.createRef();

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddBook(this.state.formData)
  }

render() {
    return (
      <>
        <h3>Add a Book</h3><br/>
        <form class="ui form" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div class="field">
            <label>Received By</label>
            <input 
            name="employee"
            onChange={this.handleChange}
            value={this.state.formData.employee}
            type="text"
            required></input>
          </div><br/>
          <div class="field">
            <label>Company</label>
            <input 
            name="company"
            onChange={this.handleChange}
            value={this.state.formData.company}
            type="text"
            required></input>
          </div><br/>
          <div class="field"><label>Date Received</label>
            <input
            name="date" 
            type="date"
            value={this.state.formData.date}
            onChange={this.handleChange}
            required
            ></input></div><br/>
          <div class="field"><label>Description</label>
            <input 
            maxLength="200" 
            name="description"
            onChange={this.handleChange}
            value={this.state.formData.description}
            required></input>
          </div><br/>
          <div>
            <button
            type="submit" 
            class="ui button" 
            disabled={this.state.invalidForm}>Add</button>
          </div>
        </form>
      </>
    );
  }

}
 
export default AddBooksPage;
