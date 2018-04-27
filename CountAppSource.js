import React, {
    Component
} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ART, processColor, ScrollView, Dimensions, Button
}
    from
        'react-native'
import Sector from './widget/Sector'

const {Surface, Group} = ART

//https://github.com/wuxudong/react-native-charts-wrapper
import {PieChart} from 'react-native-charts-wrapper';

//
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

/*统计界面
* 2.0版本 第三方库绘制
* */
class CountApp extends Component {
    static navigationOptions = {
        title: '统计',
    }

    constructor(props) {
        super(props)
        var date = new Date()
        var weekday = new Array(7)
        weekday[0] = "星期天"
        weekday[1] = "星期一"
        weekday[2] = "星期二"
        weekday[3] = "星期三"
        weekday[4] = "星期四"
        weekday[5] = "星期五"
        weekday[6] = "星期六"
        this.state = {
            tabPosition: 1,
            titleStr: ['今天', '本周', '本月', '今年'],
            typeStr: ['病假', '事假', '出差', '出勤'],
            currentSumList: [3, 4, 10, 20],
            date: date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + weekday[date.getDay()],
            legend: {
                enabled: true,
                textSize: 10,
                form: 'CIRCLE',
                position: 'RIGHT_OF_CHART',
                wordWrapEnabled: false,
                maxSizePercent: 50,
            },
            data: {
                dataSets: [{
                    values: [{value: 40, label: '出勤'},
                        {value: 2, label: '出差'},
                        {value: 3, label: '事假'},
                        {value: 1, label: '病假'}],
                    label: '',
                    config: {
                        colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF')],
                        valueTextSize: 12,
                        valueTextColor: processColor('green'),
                        sliceSpace: 5,
                        selectionShift: 13
                    }
                }],
            },
            highlights: [{x: 2}],
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),

            }
        }

    }

    onTitleCheck(that, position) {
        that.setState({
            tabPosition: position,
        })
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.tabTitle}>
                        <Text
                            onPress={() => this.onTitleCheck(this, 1)}
                            style={[this.state.tabPosition == 1 ? styles.tabItemSelected : styles.tabItem, {
                                borderBottomLeftRadius: 2,
                                borderTopLeftRadius: 2,
                                borderLeftWidth: 1,
                            }]}>{this.state.titleStr[0]}</Text>
                        <Text
                            onPress={() => this.onTitleCheck(this, 2)}
                            style={[this.state.tabPosition == 2 ? styles.tabItemSelected : styles.tabItem]}>{this.state.titleStr[1]}</Text>
                        <Text
                            onPress={() => this.onTitleCheck(this, 3)}
                            style={[this.state.tabPosition == 3 ? styles.tabItemSelected : styles.tabItem]}>{this.state.titleStr[2]}</Text>
                        <Text
                            onPress={() => this.onTitleCheck(this, 4)}
                            style={[this.state.tabPosition == 4 ? styles.tabItemSelected : styles.tabItem, {
                                borderBottomRightRadius: 2,
                                borderTopRightRadius: 2,
                                borderRightWidth: 1,
                            }]}>{this.state.titleStr[3]}</Text>
                    </View>
                    <Text style={{padding: 20, textAlign: 'center', fontSize: 14}}>{this.state.date}</Text>
                    <View style={{
                        padding: 10,
                        marginLeft: 20,
                        marginRight: 30,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{fontSize: 14}}>当前在岗人员</Text>
                        <Text style={{fontSize: 16, color: 'dodgerblue'}}>34人</Text>
                    </View>
                    <View style={{
                        padding: 10,
                        marginLeft: 20,
                        marginRight: 30,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{fontSize: 14}}>今日迟到人数</Text>
                        <Text style={{fontSize: 16, color: 'dodgerblue'}}>2人</Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <PieChart
                            style={{width: 300, height: 300}}
                            logEnabled={true}
                            chartBackgroundColor={processColor('white')}
                            chartDescription={this.state.description}
                            data={this.state.data}
                            legend={this.state.legend}
                            entryLabelColor={processColor('green')}
                            entryLabelTextSize={10}
                            drawEntryLabels={false}
                            rotationEnabled={true}
                            rotationAngle={45}
                            usePercentValues={false}
                            holeRadius={0}
                            transparentCircleRadius={0}
                            maxAngle={350}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default class CountAppSource extends Component {
    constructor() {
        super()
        var date = new Date()
        var weekday = new Array(7)
        weekday[0] = "星期天"
        weekday[1] = "星期一"
        weekday[2] = "星期二"
        weekday[3] = "星期三"
        weekday[4] = "星期四"
        weekday[5] = "星期五"
        weekday[6] = "星期六"
        this.state = {
            titleStr: ['今天', '本周', '本月', '今年'],
            tabPosition: 1,
            titleStr: ['今天', '本周', '本月', '今年'],
            typeStr: ['病假', '事假', '出差', '出勤'],
            currentSumList: [3, 4, 10, 20],
            date: date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + weekday[date.getDay()],
            legend: {
                enabled: true,
                textSize: 10,
                form: 'CIRCLE',
                position: 'RIGHT_OF_CHART',
                wordWrapEnabled: false,
                maxSizePercent: 50,
            },
            data: {
                dataSets: [{
                    values: [{value: 40, label: '出勤'},
                        {value: 2, label: '出差'},
                        {value: 3, label: '事假'},
                        {value: 1, label: '病假'}],
                    label: '',
                    config: {
                        colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF')],
                        valueTextSize: 12,
                        valueTextColor: processColor('green'),
                        sliceSpace: 5,
                        selectionShift: 13
                    }
                }],
            },
            highlights: [{x: 2}],
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),

            }
        }

    }

    onTitleCheck(that, position) {
        that.setState({
            tabPosition: position,
        })
    }


    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <DefaultTabBar/>
                }
                tabBarBackgroundColor='#fff'
                tabBarActiveTextColor='#b4282d'
                tabBarInactiveTextColor='#333'
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
                <View tabLabel={this.state.titleStr[0]}>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={{padding: 20, textAlign: 'center', fontSize: 14}}>{this.state.date}</Text>
                            <View style={{
                                padding: 10,
                                marginLeft: 20,
                                marginRight: 30,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontSize: 14}}>当前在岗人员</Text>
                                <Text style={{fontSize: 16, color: 'dodgerblue'}}>34人</Text>
                            </View>
                            <View style={{
                                padding: 10,
                                marginLeft: 20,
                                marginRight: 30,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontSize: 14}}>今日迟到人数</Text>
                                <Text style={{fontSize: 16, color: 'dodgerblue'}}>2人</Text>
                            </View>

                            <View style={{alignItems: 'center'}}>
                                <PieChart
                                    style={{width: 300, height: 300}}
                                    logEnabled={true}
                                    chartBackgroundColor={processColor('white')}
                                    chartDescription={this.state.description}
                                    data={this.state.data}
                                    legend={this.state.legend}
                                    entryLabelColor={processColor('green')}
                                    entryLabelTextSize={10}
                                    drawEntryLabels={false}
                                    rotationEnabled={true}
                                    rotationAngle={45}
                                    usePercentValues={false}
                                    holeRadius={0}
                                    transparentCircleRadius={0}
                                    maxAngle={350}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Text tabLabel={this.state.titleStr[1]}>favorite</Text>
                <Text tabLabel={this.state.titleStr[2]}>project</Text>
                <Text tabLabel={this.state.titleStr[3]}>favorite</Text>
            </ScrollableTabView>
        )
    }
}


const styles = StyleSheet.create({
    tabBarUnderline: {
        backgroundColor: '#b4282d',
        height: 2,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'white',
    },
    tabTitle: {
        flex: 1,
        maxHeight: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabItem: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: 5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'dodgerblue',
    },
    tabItemSelected: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'dodgerblue',
        backgroundColor: 'dodgerblue',
        color: 'white',
    }
})