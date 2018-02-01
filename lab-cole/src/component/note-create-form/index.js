import React from 'react'

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    return this.props.onComplete(this.state)
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <form 
        className='note-create-form'
        onSubmit={this.handleSubmit}
        >
        <input
          type='text'
          name='title'
          value={this.state.value}
          onChange={this.handleChange}
          />
        <input
          type='text'
          name='text'
          value={this.state.value}
          onChange={this.handleChange}
          />
        <button type='submit'> create note </button>
      </form>
    )
    
  }
}

export default NoteCreateForm