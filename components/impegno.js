import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyText from './myText';

export default class Impegno extends Component{

    constructor(props){
        super(props);
        this.state = {
            impegnoText : props.impegnoText,
            impegnoData : this.props.data,
            handleClick : () => {}
        }
    }

    clickHandler = (event) => {
        console.log('Coming soon...');
        this.state.handleClick()
    }

    render(){
        return(
            <TouchableOpacity onPress={() => {return this.props.clickedImpegnoHandler(this.state.impegnoText,this.state.impegnoData)}}>
                <View style={styles.impegnoStyle} nome = {this.state.impegnoText}>
                    <MyText>
                        {this.state.impegnoText}
                    </MyText>
                </View>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    impegnoStyle: {
        backgroundColor : '#5f998a',
        padding : 10,
        borderRadius : 5,
        alignItems :'center',
        margin : 10,
        minWidth : 120
    },
});