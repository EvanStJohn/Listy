import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "./../components/Header";

class PasswordScreen extends Component {
    render() {
        return (
            <>
                <Header name='Passwords' navigation={this.props.navigation}/>
                <View style={styles.container}>
                    <Text>Password Screen</Text>
                </View>
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

export default PasswordScreen;