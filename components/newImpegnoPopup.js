import React, { Component } from 'react';
import {
    StyleSheet, 
    TextInput,
    View, 
    Modal, 
    Text,
    TouchableWithoutFeedback, 
    TouchableOpacity
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default class NewImpegnoPopup extends Component{

    constructor(props){
        super(props)
        this.state = {
            nomeImpegno : '',
            dataImpegno : new Date(),
            inputColor : '#008080'
        }
    }

    updateNome = (event) => {
        this.setState({
            nomeImpegno : event
        })
    }

    updateDate = (event, date) => { 
        this.setState({
            dataImpegno : date
        });
    }

    sendConfirm = () => {
        if(this.state.nomeImpegno != ''){
            this.props.newImpegnoHandler(this.state.nomeImpegno, this.state.dataImpegno);
            this.props.closer();
        } else {
            this.setState({
                inputColor : 'rgb(228, 88, 78)'
            })
            setTimeout(() => { 
                this.setState({
                    inputColor : '#008080'
                })
            }, 650)
        }
    }

    render(){
        return(
            <View style = {{
            justifyContent : "flex-end",
            flex : 1 }}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={this.props.display}
                backgroundColor = '#ffffff'
            >
                {// questo serve per far sì che il modal si chiuda quando si preme al di fuori di esso
                }
                <TouchableOpacity onPress={this.props.closer} style={{flex:1, justifyContent: "flex-start"}}>
                    <TouchableWithoutFeedback onPress={()=>{}}>
                        <View style={styles.NewImpegnoPopupStyle}>
                            <View style = {styles.titleViewStyle}>
                                <Text style = {styles.titleStyle}>
                                    Nuovo impegno
                                </Text>
                            </View>
                            <View style = {styles.inputViewStyle}>
                                <Text style={{fontSize:25, color: this.state.inputColor, marginBottom:10}}>Nome:</Text>
                                <TextInput
                                    style={{
                                        height: 65,
                                        borderWidth: 1, 
                                        fontSize : 25 ,
                                        padding : 15,
                                        minWidth : 250,
                                        borderRadius : 10,
                                        borderColor : this.state.inputColor,
                                        borderWidth : 3
                                    }}
                                    onChangeText={this.updateNome}
                                    value={this.state.nomeImpegno}
                                    placeholder='Tipo di impegno'
                                    autoFocus={true}
                                />
                            </View>
                            <View>
                            <Text style={{fontSize:25, color:'#008080', marginTop:15}}>Periodo:</Text>
                                <DateTimePicker
                                    value = {this.state.dataImpegno}
                                    onChange = {this.updateDate}
                                    mode = 'date'
                                    display = 'spinner'
                                    style={{
                                        width: 250,
                                        height:150,
                                        fontSize : 10,
                                        borderRadius:20,
                                        backgroundColor: '#ffebcd',
                                        color : '#008080'
                                    }}
                                    textColor = '#008080'
                                    locale = 'it'
                                />
                            </View>
                            <View style = {styles.buttonsViewStyle}>
                                <TouchableOpacity onPress={this.props.closer}>
                                    <View style = {styles.annullaView}>
                                        <Text style={{fontSize:20, color:'#ffebcd'}}>
                                            Annulla
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.sendConfirm}>
                                    <View style = {styles.confermaView}>
                                        <Text style={{fontSize:20, color:'#ffebcd'}}>
                                            Aggiungi
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    NewImpegnoPopupStyle:{
        alignItems: "center",
        backgroundColor:'#ffebcd',
        height:'55%',
        marginHorizontal:30,
        borderRadius:20,
        marginTop:50,
        padding:20,
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
        paddingTop:10,
        paddingHorizontal:10
    },
    titleStyle:{
        fontSize:35,
        color:'#008080',
    },
    inputViewStyle:{
        flex : 1,
        margin:20
    },
    inputStyle:{
        height: 60, 
        borderColor: 
        'gray',
        borderWidth: 1, 
        fontSize:25 ,
        padding:15,
        minWidth:250,
        borderRadius: 10
    },
    buttonsViewStyle:{
        fontSize:25,
        flexDirection:'row',
    },
    annullaView:{
        marginTop:20,
        marginRight:20,
        backgroundColor:'rgb(228, 88, 78)',
        borderRadius:10,
        padding:10
    },
    confermaView:{
        marginTop:20,
        marginLeft:20,
        backgroundColor:'#008080',
        borderRadius:10,
        padding:10
    }
});