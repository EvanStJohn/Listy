import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";


class Password extends Component {
    state = { isModalVisible: false };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View>
                <View style={styles.Container}>
                    <TouchableOpacity style={styles.Button} onPress={this.toggleModal}>
                        <Text style={styles.Title}>Password</Text>
                    </TouchableOpacity>
                </View>

                <Modal 
                isVisible={this.state.isModalVisible}
                onBackButtonPress={this.toggleModal}
                onBackdropPress={() => this.setState({ isModalVisible: false })}
                backdropTransitionOutTiming={0}
                onSwipeComplete={() => this.setState({ isModalVisible: false })}
                swipeDirection='right'
                animationIn='slideInLeft'
                animationOut='fadeOut'
                >
                    <View style={styles.Modal}>
                        <Text style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold', }}>Password</Text>
                        <Text style={styles.ModalText}>Username: </Text>
                        <Text style={styles.ModalText}>Password: </Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 60
    },
    Button: {
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    Title: {
        textAlign: 'left',
        fontSize: 24,
        marginLeft: 20
    },
    Modal: {
        height: 200,
        width: 250,
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    ModalText: {
        textAlign: 'left',
        marginLeft: 15,
        paddingTop: 25
    }
})

export default Password;