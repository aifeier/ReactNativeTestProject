import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class StateTest extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={styles.myText}>{display}</Text>
        )
    }
}

export default class StateTextApp extends Component {
    render() {
        return (
            <View>
                <StateTest text='i love u'/>
                <StateTest text='No goodbye'/>
                <StateTest text='Why you hate me?'/>
                <StateTest text='Yes bye bye'/>
            </View>

        );
    }

}
const styles = StyleSheet.create({
    myText: {
        textAlign: 'center',
        color: '#F3F4F5',
    },
});
