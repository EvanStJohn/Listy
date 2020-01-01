import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
    render() {
        return (
            <View style={styles.Bar}>
                <Text style={styles.Title}>{this.props.name}</Text>
                <Icon name='md-menu' size={36} style={styles.Icon} onPress={this.props.navigation.openDrawer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Bar: {
        backgroundColor: 'blue',
        height: 90,
        justifyContent: 'center'
    },
    Title: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        marginTop: 25,
    },
    Icon: {
        position: 'absolute',
        top: 40,
        left: 14
    }
})

export default Header;