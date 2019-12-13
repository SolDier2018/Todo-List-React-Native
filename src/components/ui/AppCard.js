import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AppCard = props => (<View style={ {...styles.default, ...props.style} }>{props.children}</View>);

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000', //не работают на android
        shadowRadius: 2, //не работают на android
        shadowOpacity: 0.3,  //не работают на android
        shadowOffset: {width: 2, height: 2}, //не работают на android
        elevation: 8, //тень для android
        backgroundColor: '#fff',
        borderRadius: 10
    }
});