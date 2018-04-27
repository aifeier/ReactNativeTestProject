// ART 绘制
import React, {
    Component
} from 'react'
import {
    View,
    ART,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Sector from '../widget/Sector'

const {Surface, Shape, Text, Path, Group} = ART;
export default class Line extends Component {
    render() {
        //直线
        const linePath = ART.Path();
        linePath.moveTo(1, 1); //将起始点移动到(1,1) 默认(0,0)
        linePath.lineTo(300, 1); //连线到目标点(300,1)

        //矩形
        const rectanglePath = ART.Path()
            .moveTo(1, 1)
            .lineTo(1, 99)
            .lineTo(99, 99)
            .lineTo(99, 1)
            .close()

        //圆
        const circlePath = ART.Path()
            .moveTo(100, 50)
            .arc(-50, 50, 50, 50)
            .lineTo(50, 50)
            // .arc(0, 99, 25)
            // .arc(0, -99, 25)
            .close()

        //文字
        // font属性的使用，规则是“粗细 字号 字体”
        const textPath = new Path()
            .moveTo(40, 40)
            .lineTo(99, 20)
        return (
            <ScrollView>
                <View style={{margin: 10}}>
                    <View style={styles.eachSurface}>
                        <ART.Surface width={300} height={2}>
                            <ART.Shape d={linePath} stroke="#000000" strokeWidth={1}/>
                        </ART.Surface>
                    </View>
                    <View style={styles.eachSurface}>
                        <Surface width={300} height={2}>
                            <Shape d={linePath} stroke="#000000" strokeWidth={2} strokeDash={[10, 5]}/>
                        </Surface>
                    </View>
                    <View style={styles.eachSurface}>
                        <Surface width={100} height={100}>
                            <Shape d={rectanglePath} stroke="#0000ff" fill='#87cefa' strokeWidth={1}/>
                        </Surface>
                    </View>
                    <View style={styles.eachSurface}>
                        <Surface width={200} height={200}>
                            <Shape d={circlePath} stroke="#0000ff" fill='#87cefa' strokeWidth={1}/>
                        </Surface>
                    </View>
                    <View style={styles.eachSurface}>
                        <Surface width={200} height={101}>
                            <Group>
                                <Text storkeWidth={1} stroke='#000' font="bold 35px Heiti SC" path={textPath}>
                                    React Native
                                </Text>
                                <Text storkeWidth={1} alignment = "center" stroke='#f00' font="bold 35px Heiti SC" path={new Path().moveTo(60,60).lineTo(120,30)}>
                                    Test Group
                                </Text>
                            </Group>
                        </Surface>
                    </View>
                    <View style={styles.eachSurface}>
                        <Surface width={200} height={101}>
                            {/*<Sector*/}
                            {/*innerRadius={20}*/}
                            {/*outerRadius={50}*/}
                            {/*startAngle={0}*/}
                            {/*endAngle={60}*/}
                            {/*originX={50}*/}
                            {/*originY={50}*/}
                            {/*fill="blue"/>*/}
                            <Sector
                                outerRadius={50}
                                startAngle={90}
                                endAngle={180}
                                originX={50}
                                originY={50}
                                storkeWidth={1}
                                stroke='#000'
                                fill="red"/>
                        </Surface>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    eachSurface: {
        marginTop: 20,
    }
})