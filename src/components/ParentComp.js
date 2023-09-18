import react, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'nnelg'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'nnelg'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Comp Render')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name }></MemoComp>
            </div>
        )
    }
}

export default ParentComp