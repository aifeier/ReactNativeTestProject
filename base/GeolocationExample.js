import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

/* react native 定位*/
export default class GeolocationExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            watchID: null,
        }
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (initialPosition) => this.setState({initialPosition}),
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.state.watchID = navigator.geolocation.watchPosition((lastPosition) => {
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.state.watchID);
    }

    render() {
        return (

            <View>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {JSON.stringify(this.state.initialPosition)}
                </Text>
                <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {JSON.stringify(this.state.lastPosition)}
                </Text>
            </View>
        )
            ;
    }
}

var styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});