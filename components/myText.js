import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';

export default class myText extends Component{
    render(){
        return(
            <Text style ={styles.myTextStyle}>
                {this.props.children}
            </Text>
        )
    }
}

var styles = StyleSheet.create({
    myTextStyle:{
        fontSize: 30,
        color: '#ffebcd'
    }
  });