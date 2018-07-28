import React, { Component } from 'react';
import { Alert } from 'react-native';
import { firebaseApp } from './Firebase';


var db = firebaseApp.database();
const user = firebaseApp.auth().currentUser;

export function GET_TIPS(level, topic) {
    return;
}