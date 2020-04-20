import React, {Component} from 'react';

class EditBookPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.book
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateBook(this.state.formData);
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
          formData,
          invalidForm: !this.formRef.current.checkValidity()
        })
      }

    render() {
        return (
          <>
            <h3>Edit Book Page</h3>
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
              {/* <div class="field"><label>Date Received</label>
                <input
                name="date" 
                type="date"
                value={this.state.formData.date}
                onChange={this.handleChange}
                required
                ></input></div><br/> */}
              <div class="field"><label>Description</label>
                <input 
                maxLength="200" 
                name="description"
                onChange={this.handleChange}
                value={this.state.formData.description}
                required></input>
              </div><br/>
              <div class="field"><label>Assigned to:</label>
                <input  
                name="assigned"
                onChange={this.handleChange}
                value={this.state.formData.assigned}
                required></input>
              </div><br/>
              <div class="field"><label>Date Completed</label>
                <input 
                type="date"
                name="completedDate"
                onChange={this.handleChange}
                value={this.state.formData.completedDate}
                ></input>
              </div><br/>
              <div>
                <button
                type="submit" 
                class="ui button" 
                disabled={this.state.invalidForm}>Update</button>
              </div>
            </form>
          </>
        );
      }

}

export default EditBookPage;