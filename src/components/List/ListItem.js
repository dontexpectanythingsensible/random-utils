import React from 'react';

export default class ListItem extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
    id: React.PropTypes.number,
    onRemove: React.PropTypes.func
  };

  componentWillMount () {
    this.state = {
      id: this.props.id,
      text: '',
      number: 1
    };
  }

  handleChange = e => {
    if (e.target === this.refs.text) {
      this.setState({ text: e.target.value }, () => {
        this.props.onChange(this.state);
      });
    } else {
      this.setState({ number: +e.target.value }, () => {
        this.props.onChange(this.state);
      });
    }
  }

  handleRemove = () => {
    this.props.onRemove(this.props.id);
  }

  render () {
    return (
      <div>
        <input type='text'
          placeholder='Name'
          value={ this.state.text }
          ref='text'
          onChange={ this.handleChange } />
        <input type='number'
          min='1'
          step='1'
          value={ this.state.number }
          ref='number'
          onChange={ this.handleChange } />

        <button onClick={ this.handleRemove } className='button button--remove'>Remove</button>
      </div>
    );
  }
}
