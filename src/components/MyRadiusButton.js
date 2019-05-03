import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get('window');

class MyRadiusButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <View style={styles.radiusButton}>
                    <FontAwesome name='plus' size={20} color='#000' />
                </View>
                <Text style={styles.radiusText}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radiusButton: {
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: (width * 0.20) / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radiusText: {
        color: 'white',
        width: width * 0.24,
        textAlign: 'center',
        marginTop: 10
    }
});

export default MyRadiusButton;
