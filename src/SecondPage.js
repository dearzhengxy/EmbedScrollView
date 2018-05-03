/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl, Animated } from 'react-native'


class SecondPage extends PureComponent<Props, State> {

    state: {
        scrollY: Animated,
    };

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(1.0)
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                )}
                scrollEventThrottle={16}
                bounces={false}
            >
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Animated.View style={{
                    width: 200, 
                    height: 500, 
                    backgroundColor: 'white',
                }}>
                </Animated.View>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text>SecondPage</Text>
                <Text style={{backgroundColor:'white'}}>SecondPage</Text>

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
})


export default SecondPage
