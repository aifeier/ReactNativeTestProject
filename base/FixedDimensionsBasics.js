import React, {
    Component
} from 'react';

import {
    AppRegistry,
    View,
} from 'react-native'

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>

        )
    }
}
// 注册应用registerComponent后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('TestProject', () => FixedDimensionsBasics);