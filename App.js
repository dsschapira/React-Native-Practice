import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TopBar from './components/TopBar';
import ControlBar from './components/ControlBar.js';
import Employee from './components/Employee';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      text: 'Loading Employees...'
    };
  }

  componentDidMount(){
    const data = fetch('https://cngodles.github.io/people.json?yes=1')
                  .then((response) => response.json())
                  .then((responseJson) => {
                    this.setState({
                      isLoading: false,
                      data: responseJson.employees,
                      employeeList: responseJson.employees
                    });
                  });
  }

  handleOfficePicker = (office) => {
    if(office.selectedOffice == '0'){
      this.setState({
        employeeList: this.state.data
      });
    }
    else{
      this.setState({
        employeeList: this.state.data.filter(datum => datum.office.toUpperCase() == office.selectedOffice)
      });
    }
  }

  //TopBar is just to have spacing in order to always be able to see the battery, wifi, and data bars
  render() {
    let output;
    let offices;

    if(this.state.isLoading){
      //Loading employees in, so we show a loading indicator
      output = <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>;
    }
    else{
      //We have the employees - Display them!
      const listData = this.state.employeeList.map((val, index, array )=>{
        return {
          key: "employee-"+index,
          index: index,
          data: val
        }
      });

      offices = this.state.data.map((val, index, array) => {
        return val.office.toUpperCase();
      });

      output = <FlatList 
        data = {listData}
        renderItem = {({item}) => <Employee data={item.data} index={item.index} key={item.key}/>} />
    }

    return (
      <View style={styles.body}>
        <TopBar />
        <ControlBar options={offices} onOfficeChange={this.handleOfficePicker}/>
        {output}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 200
  }
});
