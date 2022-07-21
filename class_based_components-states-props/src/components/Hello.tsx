import React, { Component } from "react"

type props = {
    name: string
}

type state = {}

export default class hello extends Component<props, state>{

    render(){
        return <div>{this.props.name}</div>
    }
}