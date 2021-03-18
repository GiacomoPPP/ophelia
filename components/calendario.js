import React from 'react';
import {Calendar} from 'react-native-calendars';
import { StyleSheet, Text, View } from 'react-native';
import ClickedDataPopup from './clickedDataPopup';
import NewImpegnoButton from './newImpegnoButton';
import NewImpegnoPopup from './newImpegnoPopup'

export default class Calendario extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showClickedDataPopup : false,
            clickedData : new Date(),
            showNewImpegnoPopup : false
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

    clickedDataPopupCloser = () => {
        this.setState({
            showClickedDataPopup : false
        })
    }

    clickedDateHander = (date) => {
        this.setState({
            showClickedDataPopup : true,
            clickedData : date
        })
    }

    renderCalendario = () => {
        let markedDates = {};
        this.props.impegni.forEach((impegno) => {
            const data = new Date(impegno.data);
            const stringData = data.toISOString().substr(0, 10);
            markedDates[stringData] = {marked:true}
        });
        const calendario = React.createElement(Calendar, {
            markedDates: markedDates,
            firstDay: 1,
            onDayPress: this.clickedDateHander,
            style:{
                width : 400,
                borderRadius : 10,
                padding : 5
            },
            theme:{ 
                calendarBackground : '#ffebcd',
                todayTextColor: '#5f998a',
                textDayFontSize: 20,
                'stylesheet.calendar.header':{
                    monthText: {
                        fontSize: 24,
                        color: '#008080',
                        margin: 10
                    },
                    arrowImage: {
                        tintColor: '#5f998a'
                    },
                    dayHeader: {
                        marginTop: 10,
                        marginBottom: 0,
                        width: 33,
                        textAlign: 'center',
                        fontSize: 15,
                        color: '#5f998a',
                    },
                },
                'stylesheet.calendar.main': { 
                    week: {
                        marginTop: 15,
                        marginBottom: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    },
                }
            }
        })
        return React.createElement(View, {style : {height : 400}}, calendario)
    }
    
    renderNuovoImpegnoButton = () =>{
        const button = React.createElement(NewImpegnoButton, {fire : this.newImpegnoOpener})
        return (
            React.createElement(View, {} , button)
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

    renderClickedDataPopup = () => {
        if(!this.state.showClickedDataPopup) return null;
        return React.createElement(ClickedDataPopup,{
            clickedData : this.state.clickedData,
            closer : this.clickedDataPopupCloser,
            impegni : this.props.impegni
        })
    }

    render(){ 
        return(
            <View style = {styles.calendarioView}>
                <Text style = {styles.calendarioTitle}>
                    CALENDARIO
                </Text>
                
                {this.renderCalendario()}

                {this.renderNuovoImpegnoButton()}

                {this.renderNewImpegnoPopup()}

                {this.renderClickedDataPopup()}

            </View>
        )
    }
}

var styles = StyleSheet.create({
    calendarioView : {
        color : '#ffbecd',
        backgroundColor : '#008080',
        alignItems : 'center',
        flex : 1
    },
    calendarioTitle : {
        fontSize : 70,
        color : '#ffebcd',
        textAlign : 'center',
        marginBottom : 70,
        marginTop : 70
    }
})