import React, { Component } from 'react';
import Impegno from './impegno';
import NewImpegnoButton from './newImpegnoButton';
import ClickedImpegnoPopup from "./clickedImpegnoPopup";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NewImpegnoPopup from './newImpegnoPopup';
import MyText from './myText';

export default class Oggi extends Component{

    constructor(props){
        super(props);
        this.state = {
            showNewImpegnoPopup : false,
            clickedImpegnoName : '',
            showClickedImpegni: false,
        };
    }

    newImpegnoOpener = () => {
        this.setState(
            {showNewImpegnoPopup : true}
        )
    }
    
    newImpegnoCloser = () => {
        this.setState(
            {showNewImpegnoPopup : false}
        )
    }

    clickedImpegnoHandler = (nome, data) => {
        this.setState({
            showClickedImpegnoPopup : true,
            clickedImpegnoName : nome,
            clickedImpegnoDate : data
        })
    }

    clickedImpegnoCloser = () => {
        this.setState({
            showClickedImpegnoPopup : false,
            clickedImpegnoName:'',
            clickedImpegnoDate: new Date()
        })
    }

    // lista degli impegni
    renderImpegni = () => {
        let content;
        let todayImpegni = this.props.impegni.filter((impegno) =>{
            const today = new Date();
            const impegnoData = new Date(impegno.data);
            if(impegnoData <= today){
                return impegno
            }
        })
        if(todayImpegni === undefined || todayImpegni.length === 0){
            content = React.createElement(View, {style : styles.noImpegni},<MyText>Nessun impegno programmato</MyText>)
        } else {
            let impegni = todayImpegni.map((impegno) => {
                return React.createElement(
                    Impegno, {
                        key : impegno.nome,
                        impegnoText : impegno.nome,
                        data : impegno.data,
                        clickedImpegnoHandler : this.clickedImpegnoHandler
                    }
                )
            })
            content = React.createElement(View, {}, impegni);
        }
        return React.createElement(ScrollView,{style : styles.impegniScrollView}, content);
    }

    // bottone sotto gli impegni per creare un nuovo impegno
    renderNuovoImpegnoButton = () =>{
        const button = React.createElement(NewImpegnoButton, {fire : this.newImpegnoOpener})
        return (
            React.createElement(View,{style : {justifyContent : 'flex-end'}}, button)
        )
    }

    renderNewImpegnoPopup = () => {
        if(this.state.showNewImpegnoPopup){
            return React.createElement(NewImpegnoPopup, {
                display: this.state.showNewImpegnoPopup,
                closer: this.newImpegnoCloser,
                newImpegnoHandler: this.props.newImpegnoHandler
            })
        }
    }
    
    // popup di quando premo su un impegno nella lista
    renderClickedImpegnoPopup = () => {
        if(!this.state.showClickedImpegnoPopup) return null;
        var popup = React.createElement(ClickedImpegnoPopup, 
            {nomeImpegno : this.state.clickedImpegnoName,
            dataImpegno: this.state.clickedImpegnoDate,
            closePopup : this.showClickedImpegnoPopup,
            closer : this.clickedImpegnoCloser,
            removeImpegno : this.props.removeImpegno       
            }
        )
        return React.createElement(View, {style: { flex: 1 }}, popup)
    }

    render(){
        return(
            <View style = {styles.oggiView}>
                <Text style = {styles.oggiTitle}>
                    OGGI
                </Text>
                
                {this.renderImpegni()}

                {this.renderNuovoImpegnoButton()}
                    
                {this.renderNewImpegnoPopup()}

                {this.renderClickedImpegnoPopup()}

            </View>
        )
    }
}

var styles = StyleSheet.create({
    oggiView:{
        color : '#ffbecd',
        alignItems :'center',
        backgroundColor:'#008080',
    },
    oggiTitle: {
        fontSize : 120,
        color : '#ffebcd',
        textAlign:'center',
        marginTop : 70
    },
    impegniScrollView:{
        flexDirection : 'column',
        marginVertical : 30,
        height : 350,
    },
    noImpegni: {
        color : '#ffebcd',
        borderBottomWidth: 4,
        borderColor: "#ffebcd",
        paddingBottom: 20,
        marginVertical:30,
        padding:10
    }
});