import React, {Component} from 'react'
import WrapComponent from './WrapComponent'

const mapStateToProps = function () {
    return {
        auth: 666
    }
}

class Inner extends Component {
    constructor(props) {
        console.log(Inner.prototype)
        debugger
        super(props)
    }
    changeInput(){

    }

    render() {
        debugger
        return (

                <input type="text" onClick={this.changeInput.bind()}/>


        )
    }

}

export default WrapComponent(mapStateToProps)(Inner)