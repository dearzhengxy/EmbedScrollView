
/**
 * Copyright (c) 2018-present, xiaoyuzheng
 * 
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl, Animated } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import FirstPage from './src/FirstPage'
import SecondPage from './src/SecondPage'

const marginTop = 78
class App extends PureComponent<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            scrollY: 0,
        }
    }

    buttonPressed() {

       
    }

    render() {
        // let style = {
        //     transform: [{
        //       translateY: this.state.scrollY
        //     }]
        //   }

        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={[styles.container,{
                    top: this.state.scrollY
                }]} >
                    <Text>测试</Text>
                    <Text>测试</Text>
                    <Text>测试</Text>
                    <Text>测试</Text>
                    <Text style={styles.buttonStyle} onPress={this.buttonPressed.bind(this)}>
                        按我
                </Text>
                    <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
                    prerenderingSiblingsNumber={Infinity}>
                        <FirstPage tabLabel="FirstPage" />
                        <SecondPage ref='secondpage' tabLabel="SecondPage" />
                    </ScrollableTabView>
                </Animated.View>
            </View>
        )
    }

    componentDidMount() {
        let { scrollY } = this.refs.secondpage.state

        this.setState(
            {
                scrollY: scrollY.interpolate({ inputRange: [0, marginTop,marginTop], outputRange: [0,-marginTop,-marginTop] }),

            }
        )
    }
}


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
    buttonStyle: { //文本组件样式,定义简单的按钮
        fontSize: 20,
        backgroundColor: 'grey'
    },
})


export default App
