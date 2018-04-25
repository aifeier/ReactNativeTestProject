import React,{
    Component
}from 'react';

import {
    ScrollView,
    Image,
    Text,
    View
}from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:36}}>Scroll me plz</Text>
                <Image source={require('../img/img.jpeg')} />
                <Image source={require('../img/img.jpeg')} />
                <Text style={{fontSize:36}}>If you like</Text>
                <Image source={require('../img/img.jpeg')} />
                <Image source={require('../img/img.jpeg')} />
                <Image source={require('../img/img.jpeg')} />
                <Text style={{fontSize:36}}>Scrolling down</Text>
                <Image source={require('../img/img.jpeg')} />
                <Text style={{fontSize:36}}>What's the best</Text>
                <Image source={require('../img/img.jpeg')} />
                <Text style={{fontSize:36}}>Framework around?</Text>
                <Image source={require('../img/img.jpeg')} />
                <Image source={require('../img/img.jpeg')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}