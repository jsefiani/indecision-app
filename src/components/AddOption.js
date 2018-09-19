import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    } else {
      setTimeout(() => {
        document.querySelector(".add-option-error").style.display = "none";
        this.setState(() => ({ error: undefined }));
      }, 2000)
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option-form" onSubmit={this.handleAddOption}>
          <input className="add-option-form__input" type="text" name="option" />
          <button className="button--small">Add Option</button>
        </form>
      </div>
    );
  }
}
