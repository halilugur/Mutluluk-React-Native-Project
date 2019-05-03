import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FindLocation from './FindLocation'
import MyRadiusButton from './MyRadiusButton'
import MyButton from './MyButton'
import { Language } from '../lang/Language';

const { width, height } = Dimensions.get('window');

class Form extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../images/background.png')}
                style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <FontAwesome name='users' size={width * 0.25} color='#fff' />
                        <FindLocation icon='chevron-right' size={10} color='#000' text={Language.location} onPress={() => console.log('Benim')}/>
                        <FindLocation icon='chevron-right' size={10} color='#000' text={Language.herLocation} onPress={() => console.log('Sevidceğim')}/>
                    </View>
                    <View style={styles.rowVertical}>
                        <MyRadiusButton text={Language.yourPhoto} />
                        <MyRadiusButton text={Language.herPhoto} />
                    </View>
                    <View>
                        <MyButton text={Language.createMapWay} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: width * 0.59,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowVertical: {
        width: width * 0.59,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    }
});

export default Form;
