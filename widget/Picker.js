import React, {Component} from 'react'
import {
    Picker
} from 'react-native'

export default class PickerExample extends Component {
    constructor(props){
        super(props)
        this.state = {
            language:'C'
        }
    }
    render() {
        return (
            <Picker selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label="C" value="c"/>
                <Picker.Item label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>
        )
    }
}