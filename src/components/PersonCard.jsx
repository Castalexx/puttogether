import React from 'react'
import { Component } from 'react'

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
    }
}

    render() {
        
        return <div>
            <h1>{this.props.lastName}, {this.props.name} </h1>
            <p>Age: {this.state.age}</p>
            <p>Hair color: {this.props.hairColor}</p>
            <button className='btn btn-primary' onClick={() => {this.setState({age : this.state.age+=1})}}>Birthday Button for {this.props.name} {this.props.lastName}</button>
        </div>
    }
}

export default PersonCard