import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

//Creates spacing at the top to maintain indicator icons.
export default class TopBar extends Component{
    render(){
        return(
            <View style={styles.topBar}></View>
        );
    }
}

const styles = StyleSheet.create({
  topBar: {
    height:25,
    borderWidth:0
  }
});