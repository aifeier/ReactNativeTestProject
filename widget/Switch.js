import React, {
    Component
} from 'react'
import {
    Switch,
    View
} from 'react-native'

export default class SwitchText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
    }

    render() {
        return (
            <View>
                <Switch
                    disabled={true}
                    onValueChange={(c) => this.setState({value: c})}
                    value={this.state.value}
                    thumbTintColor={'#ff00ff'}
                    tintColor={'#ffffff'}
                />

                <Switch
                    disabled={false}

                    onValueChange={(c) => {
                        console.log(c)
                        this.setState({value: c})
                    }
                    }
                    value={this.state.value}
                    thumbTintColor={'blue'}
                    tintColor={'black'}
                />

                <Switch
                    disabled={false}
                    onValueChange={(value) => {
                        console.log(value)
                        this.setState({value: value})
                    }}
                    value={this.state.value}
                    thumbTintColor={'red'}
                />
            </View>
        )
    }
}
