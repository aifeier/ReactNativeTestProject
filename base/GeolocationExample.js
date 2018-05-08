import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

/* react native 定位*/
export default class GeolocationExample extends Component {
    static navigationOptions={
        title:'官方定位'
    }
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
            (initialPosition) => {
                console.debug('initialPosition', initialPosition)
                this.setState({initialPosition})
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
        );
        this.state.watchID = navigator.geolocation.watchPosition((lastPosition) => {
            console.debug(lastPosition)
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