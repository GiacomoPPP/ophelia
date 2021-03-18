import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import Oggi from './components/oggi';
import Calendario from './components/calendario';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['it'] = {
  monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Sett','Ott','Nov','Dic'],
  dayNames: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
  dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
  today: 'Oggi'
};
LocaleConfig.defaultLocale = 'it'; 

const Tab = createBottomTabNavigator();

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = ({
      impegni : []
    })
  }

  renderOggi = () => {
    return React.createElement(Oggi, { impegni : this.state.impegni, newImpegnoHandler : this.createNewImpegno });
  }
  
  renderCalendario = () => { 
    return React.createElement(Calendario, { impegni : this.state.impegni });
  }

  // aggiunge un Object impegno al vettore degli impegni
  createNewImpegno = (nome, data) => {
    var newImpegni = JSON.parse(JSON.stringify(this.state.impegni));
    newImpegni.push({nome : nome , data : data})
    this.setState({
      impegni : newImpegni
    })
  }

  removeImpegno = (nome) => {
    let newImpegni = this.state.impegni;
    for( var i = 0; i < newImpegni.length; i++){ 
      if ( newImpegni[i].nome === nome) { 
          newImpegni.splice(i, 1); 
      }
    }
    this.setState({
      impegni : newImpegni
    })
  }

  renderTabs = () => {
    
    const BeaconContext = React.createContext()
    return (
      <React.Fragment>
        <BeaconContext.Provider value = { this.state.neededArray }>
          <Tab.Navigator
            sceneContainerStyle={styles.container}
            tabBarOptions={{
              activeTintColor: '#008080',
              inactiveTintColor: '#85c7bf',
              style: {
                backgroundColor: '#ffebcd',
                height:100
              },
              labelStyle: {
                textAlign: 'center',
                fontSize:20,
              },
              indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
              },
            }}
            >
            <Tab.Screen 
              name="Home" 
              options={{
                tabBarLabel: 'Oggi',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={45} />
                  )
                }
              }
            > 
              {props => <Oggi {...props} 
                impegni={this.state.impegni} 
                newImpegnoHandler={this.createNewImpegno}
                removeImpegno={this.removeImpegno}
              />} 
            </Tab.Screen>
            <Tab.Screen 
              name="Calendario" 
              options={{
                tabBarLabel: 'Calendario',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="calendar-month-outline" color={color} size={45} />
                  )
                }
              }
            >
            {props => <Calendario {...props} impegni={this.state.impegni} newImpegnoHandler = {this.createNewImpegno} />} 
            </Tab.Screen>
          </Tab.Navigator>
        </BeaconContext.Provider>
      </React.Fragment>
    );
  }

  render(){
    return (
      <NavigationContainer>
          {this.renderTabs()}
      </NavigationContainer>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    textAlign: 'center',
    justifyContent: 'center',
  }
});