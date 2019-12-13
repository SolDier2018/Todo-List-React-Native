import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from '../theme';

export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});
