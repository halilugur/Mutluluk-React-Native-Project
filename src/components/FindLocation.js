import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get('window');

class FindLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <View style={styles.container}>
                    <Text style={{ flex: 11, textAlign: 'center' }}>{this.props.text}</Text>
                    <FontAwesome style={{ flex: 1 }} name={this.props.icon} size={this.props.size} color={this.props.color} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width * 0.59,
        height: height * 0.045
    }
});

export default FindLocation;
