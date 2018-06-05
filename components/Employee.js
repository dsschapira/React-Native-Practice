import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Creates spacing at the top to maintain indicator icons.
export default class Employee extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const office = this.props.data.office.toUpperCase();
        return(
            <View style={styles.employeeContainer}>
                <View style={styles.employeeEntry} key={"entry-"+this.props.index} >
                <Text style={styles.employeeName} key={"name-"+this.props.index}>{this.props.data.nameFirst} {this.props.data.nameLast}</Text>
                <Text style={styles.employeeInfo} key={"email-"+this.props.index}>Email: {this.props.data.email}</Text>
                <Text style={styles.employeeInfo} key={"phone-"+this.props.index}>Phone: {this.props.data.direct} ext. {this.props.data.ext}</Text>
                <Text style={styles.employeeInfo} key={"cell-"+this.props.index}>Cell: {this.props.data.cell}</Text>
                <Text style={styles.employeeInfoLast} key={"office-"+this.props.index}>Office: {office}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    employeeContainer: {
        paddingTop: 10,
        width: 320,
        justifyContent: 'center',
        marginLeft:40,
    },
    employeeEntry: {
        flex:1,
        justifyContent: 'center',
        borderBottomWidth:2,
    },
    employeeName:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    employeeInfo: {
        fontSize: 16,
    },
    employeeInfoLast: {
        fontSize: 16,
        marginBottom: 10
    }
});