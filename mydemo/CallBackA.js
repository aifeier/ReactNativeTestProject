import React, {Component} from 'react'
import {Button, View} from 'react-native'

export default class CallBackA extends Component {
    static navigationOptions = {
        title: '界面A'
    }

    render() {
        return (
            <View>
                <Button onPress={() => {
                    this.props.navigation.push('CallBackB', {
                        ACallBack: (msg: string) => {
                            alert(msg)
                        },
                    })
                }} title={'调转到B'}></Button>
            </View>
        )
    }
}