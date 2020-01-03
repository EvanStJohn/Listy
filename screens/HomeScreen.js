import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "./../components/Header";
import Password from "./../components/Password";

const Realm = require('realm');
let passwords;
let num = 0;

const PasswordSchema = {
    name: 'Password',
    properties: {
        account: 'string',
        username: 'string',
        password: 'string'
    }
};

Realm.open({schema: [PasswordSchema]})
    .then(realm => {
        realm.write(() => {
            const myPassword = realm.create('Password', {
                account: 'accnt',
                username: 'user',
                password: 'pass'
            });
        });

        passwords = realm.objects('Password')
        num = passwords.length
    });

class HomeScreen extends Component {
    render() {
        var items = [];
        for (let i = 0; i < num; i++) {
            items.push(
                <Password account={passwords[i].account} username={passwords[i].username} password={passwords[i].password} />
            )
        }
        return (
            <>
                <Header name='Home' navigation={this.props.navigation}/>
                {items}
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