/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Page3 extends Component<Props> {
    render() {
        const {navigation} = this.props
        const {state, setParams} = navigation
        const {params} = state
        const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成'
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page3</Text>
                <Text style={styles.welcome}>{showText}</Text>
                <TextInput style={styles.input} onChangeText={(text) => {
                    setParams({title: text})
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
      width:300,
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      borderColor: 'black',
    }
});
