/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'




class FirstPage extends PureComponent<Props, State> {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>
                <Text>FirstPage</Text>

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
})


export default FirstPage
