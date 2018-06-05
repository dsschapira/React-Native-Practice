import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';

//Creates spacing at the top to maintain indicator icons.
export default class ControlBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedText: 'All'
        };
    }

    render(){
        let options;
        let offices = [];
        let index=1; //starts at 1 since the ALL input is the 0th
        if(this.props.options){
            options = this.props.options.map((val,i,arr) => {
                if(!(offices.indexOf(val) > -1)){
                    offices.push(val);
                    return(
                        <Picker.Item label={val} value={val} key={index++} />
                    );
                }
            });
        }
        return(
            <View style={styles.controlBar}>
                <Text style={styles.pickerLabel}>Filter By Office: </Text>
                <Picker
                    style={styles.officePicker}
                    selectedValue={this.state.selectedText}
                    onValueChange={(itemValue, itemPosition) => {
                        this.setState({
                            selectedIndex: itemPosition,
                            selectedText: itemValue
                        });
                        this.props.onOfficeChange({
                            selectedOffice: itemValue
                        });
                    }}
                    >
                    <Picker.Item label='All' value='0' key={0}/>
                    {options}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  controlBar: {
    height:70,
    borderWidth:0,
    backgroundColor: 'rgb(214,214,214)',
    overflow: 'hidden'
  },
  pickerLabel: {
      position: 'absolute',
      top:30,
      fontSize:16,
      fontWeight: 'bold',
      left:20
  },
  officePicker: {
      height:100,
      marginTop: -70
  }
});