import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MyText from './myText';

export default class NewImpegnoButton extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.fire}>
                <View style = {styles.nuovoImpegnoView}>
                    <MyText>
                        Crea un nuovo impegno
                    </MyText>
                </View>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    nuovoImpegnoView: {
        backgroundColor: '#5f998a',
        padding: 10,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#ffebcd',
        marginTop: 80
    },
});