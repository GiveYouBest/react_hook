import React, { Component } from 'react'

class Example1 extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count:0
        }
    }
    componentDidMount(){
        console.log(`You Click ${this.state.count} times`)
    }
    componentDidUpdate(){
        console.log(`You Click ${this.state.count} times`)
    }
    render(){
        return (
            <div>
                <p>You click {this.state.count } times</p>
                <button onClick={this.bindClick.bind(this)}>Click</button>
            </div>
        )
    }
    bindClick(){
        this.setState({
            count:this.state.count +1
        })
    }
}

export default Example1