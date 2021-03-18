import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default class ClickedImpegnoPopup extends Component{

    removeImpegno = () => {
        this.props.removeImpegno(this.props.nomeImpegno);
    }

    render(){
        const date = new Date(this.props.dataImpegno);
        const today = new Date();
        var myDate;
        if (date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear() ) {
            myDate = 'oggi';
        } else{
            const itaMonth = new Intl.DateTimeFormat('it', { month: 'short' }).format(date);
            const dateDay = date.getDate();
            if(dateDay != 1 && dateDay != 8 && dateDay !=11){
                myDate = 'il ' + date.getDate() + ' ' + itaMonth + ' ' + date.getFullYear();
            } else{
                myDate = 'l\'' + date.getDate() + ' ' + itaMonth + ' ' + date.getFullYear();
            }
        }
        return(
            <Modal 
            animationType="slide"
            transparent={true}
            visible={true}
            backgroundColor = '#ffffff'
            >
            <TouchableOpacity onPress={this.props.closer} style={{flex:1}}>
                <TouchableWithoutFeedback style ={styles.NewImpegnoPopupStyle} onPress={()=>{}}>
                    <View style={styles.NewImpegnoPopupStyle}>
                        <View style = {styles.titleViewStyle}>
                            <Text style = {styles.titleStyle}>
                                {this.props.nomeImpegno}
                            </Text>
                        </View>
                        <View style = {styles.dataStyle}>
                            <Text  style={{fontSize:25, color:'#008080'}}>
                                Iniziato {myDate}
                            </Text>
                        </View>
                        <View style = {styles.buttonsViewStyle}>
                            <TouchableOpacity onPress={this.props.closer}>
                                <View style = {styles.chiudiView}>
                                    <Text style={{fontSize:20, color:'#ffebcd'}}>
                                        Chiudi
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.removeImpegno}>
                                <View style = {styles.fattoView}>
                                    <Text style={{fontSize:20, color:'#ffebcd'}}>
                                        Fatto
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
        )
    }
}

var styles = StyleSheet.create({
    NewImpegnoPopupStyle:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#ffebcd',
        minHeight:'20%',
        minWidth:250,
        position:'relative',
        marginHorizontal:30,
        borderRadius:20,
        marginTop:'50%',
        padding:30,
        shadowColor: '#555555',
        shadowOffset: {
        width: 4,
        height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    titleViewStyle:{
        justifyContent: "flex-start",
        borderBottomColor: "#008080",
        borderBottomWidth: 3,
        paddingBottom:10,
    },
    titleStyle:{
        fontSize:35,
        color:'#008080',
    },
    dataStyle:{
        marginTop:10
    },
    buttonsViewStyle:{
        fontSize:25,
        flexDirection:'row',
    },
    chiudiView:{
        marginTop:20,
        backgroundColor:'rgb(228, 88, 78)',
        borderRadius:10,
        padding:10,
        marginHorizontal: 10
    },
    fattoView:{
        marginTop:20,
        backgroundColor:'#58cc9f',
        borderRadius:10,
        padding:10,
        marginHorizontal: 10
    }
});