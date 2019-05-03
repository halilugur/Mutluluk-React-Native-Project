import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get('window');

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.button}>
          <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button:{
        width:width*0.71,
        height:height*0.05,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MyButton;
