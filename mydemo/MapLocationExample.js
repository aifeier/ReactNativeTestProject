import React, {Component} from 'react'
import {StyleSheet, ToastAndroid, View} from 'react-native'
import {MapView} from 'react-native-amap3d'

import PropTypes from 'prop-types'

export default class MapLocationExample extends Component {
    static navigationOptions = {
        title: '高德地图',
    }
    state = {
        zoomLevel: 10,
        coordinate: {
            latitude: 30.278975,
            longitude: 120.145913,
        },
    }

    _log(event, data) {
        ToastAndroid.show('定位成功：' + JSON.stringify(data, null, 2), ToastAndroid.SHORT)
        this.setState({
            zoomLevel: 17,
            coordinate: {
                latitude: data.latitude,
                longitude: data.longitude,
            },
            //半径
            radius: 100,
        })
    }

    _onLocation = ({nativeEvent}) => this._log('onLocation', nativeEvent)
    render() {
        return (
            <View style={{flex: 1}}>
                <MapView style={{flex: 1}}
                         locationStyle={{
                             image:'point',
                             // fillColor: '#ff0000',
                             // strokeColor: '#00ff00',
                             strokeWidth:20,
                         }}
                         zoomLevel={this.state.zoomLevel}
                         coordinate={this.state.coordinate}
                         locationEnabled={true}
                         showsLocationButton={true}
                         locationInterval={10000}
                         onLocation={this._onLocation
                             // ToastAndroid.show('定位成功：' + JSON.stringify(nativeEvent, null, 2), ToastAndroid.SHORT)
                         }>
                    <MyCircle
                        radius={this.state.radius}
                        coordinate={this.state.coordinate}
                    />
                </MapView>
            </View>
        )
    }
}

class MyCircle extends Component {
    render() {
        return <MapView.Circle
            strokeWidth={1}
            strokeColor="rgba(255, 120, 0, 0.5)"
            fillColor="rgba(255, 120, 0, 0.5)"
            radius={this.props.radius}
            coordinate={this.props.coordinate}
        />
    }
}