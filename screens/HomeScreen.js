import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "./../components/Header";
import Password from "./../components/Password";

class HomeScreen extends Component {
    render() {
        return (
            <>
                <Header name='Home' navigation={this.props.navigation}/>
                <Password />
                <Password />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;