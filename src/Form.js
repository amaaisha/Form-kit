import React from 'react'
import dietary,{gender} from "./Diet"

const boxStyle ={
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

class Form extends React.Component {


  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: ''

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    if (type === 'checkbox') {
      this.setState({[name]: checked})
    }else if(type === 'radio') {
      this.setState({radio: name})
    }else {
      this.setState({[name]: value})
    }

  }


  render() {
    console.log(this.state)
    return (
      <form>
        <input
          type={'text'}
          name={'firstName'}
          value={this.state.firstName}
          placeholder={'First Name'}
          onChange={this.handleChange}
        />
        <br/>
        <input
          type={'text'}
          name={'lastName'}
          value={this.state.lastName}
          placeholder={'Last Name'}
          onChange={this.handleChange}
        />
        <br/>

        <input
          type={'number'}
          name={'age'}
          value={this.state.age}
          placeholder={'Age'}
          onChange={this.handleChange}
        />
        <br/>

        {dietary.map(({id}) => (
          <div style={boxStyle} key={id}>
            <input
              type={'checkbox'}
              checked={this.state[id]}
              name={id}
              onChange={this.handleChange}
            />
            <p>{id}</p>
          </div>

        ))}

        <br/>

        {gender.map(({id}) => (
          <div style={boxStyle} key={id}>
            <input
              type={'radio'}
              checked={id === this.state.radio }
              name={id}
              onChange={this.handleChange}
            />
            <p>{id}</p>
          </div>
        ))}

        <br/>

        <select
          value={this.state.destination}
          onChange={this.handleChange}
          name={'destination'}
        >
          <option value='Blue'> Bali </option>
          <option value='Bahamas'> Bahamas </option>
          <option value='France'> France </option>

        </select>
      </form>
    )
  }
}

export default Form