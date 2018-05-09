import React, {Component} from 'react'
import {Button, View} from 'react-native'

export default class CallBackA extends Component {
    static navigationOptions = {
        title: '界面B'
    }

    render() {
        return (
            <View>
                <Button onPress={() => {
                    console.debug(this.props)
                    this.props.navigation.pop()
                    if (this.props.navigation.state.params.ACallBack) {
                        this.props.navigation.state.params.ACallBack('从B界面的回调数据')
                    }
                }} title={'回调到A'}/>

            </View>
        )
    }
}