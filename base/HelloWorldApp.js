import React,{ Component } from  'react';
import{
    Text,
    Image
}from 'react-native';

export default class helloWorldApp extends Component{
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}