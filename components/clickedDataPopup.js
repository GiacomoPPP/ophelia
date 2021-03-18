import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default class ClickedDataPopup extends Component{

    renderImpegni = () => {
        const totalImpegni = this.props.impegni;
        let currentImpegni = totalImpegni.filter((impegno) => {
            let data = new Date(impegno.data);
            if(
                data.getDate() === this.props.clickedData.day && 
                data.getMonth() === this.props.clickedData.month -1 &&
                data.getFullYear() === this.props.clickedData.year
            ) return impegno;
        })
        let output; 
        if(currentImpegni.length === 0){
            output = React.createElement(Text, {}, 'Nessun impegno')
        } else {
            let reactImpegni = currentImpegni.map((impegno) => {
                if (impegno !== undefined){
                    return (React.createElement(Text, {key : impegno.nome, style : styles.impegniStyle}, '- ' + impegno.nome))
                }
            });
            output = (React.createElement(View, {}, reactImpegni));
        }
        return output;
    }

    render(){
        const date = new Date();
        const theMonth = this.props.clickedData.month -1;
        date.setDate(this.props.clickedData.day);
        date.setMonth(theMonth);
        date.setFullYear(this.props.clickedData.year);
        const today = new Date();
        var myDate;
        if (date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear() ) {
            myDate = 'Oggi';
        } else{
            const itaMonth = new Intl.DateTimeFormat('it', { month: 'short' }).format(date);
            myDate = date.getDate() + ' ' + itaMonth + ' ' + date.getFullYear();
        }
        return(
            <Modal 
            animationType="slide"
            transparent={true}
            visible={true}
            backgroundColor = '#ffffff'
            >
            {// questo serve per far sì che il modal si chiuda quando si preme al di fuori di esso
            }
            <TouchableOpacity onPress={this.props.closer} style={{flex:1}}>
                <TouchableWithoutFeedback style ={styles.NewImpegnoPopupStyle} onPress={()=>{}}>
                    <View style={styles.NewImpegnoPopupStyle}>
                        <View style = {styles.titleViewStyle}>
                            <Text style = {styles.titleStyle}>
                                {myDate}
                            </Text>
                        </View>
                        <View style = {styles.dataStyle}>
                            <Text  style={{fontSize:25, color:'#008080'}}>
                                {this.renderImpegni()}
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
        alignSelf:'center',
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
        padding:10,
    },
    titleStyle:{
        fontSize:35,
        color:'#008080',
    },
    dataStyle:{
        marginTop:10
    },
    impegniStyle:{
        color:'#008080',
        fontSize:25
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