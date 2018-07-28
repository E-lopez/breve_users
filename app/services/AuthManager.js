import React, { Component } from 'react';
import { Alert } from 'react-native';
import { firebaseApp } from './Firebase';

var db = firebaseApp.database();
const user_frbs = firebaseApp.auth().currentUser


export async function LOGIN_FUNC(credential){
    console.log("AUTH MAN 7", credential)
    return new Promise((res, rej) => {
        res(firebaseApp.auth().signInWithCredential(credential));
        rej(err)
    })

}

export async function BYPASS_LOGIN(uid, user_info) {
    var user_data = db.ref(`users/${uid}`)
    var user = user_info[0]
    var result;

    return new Promise((res, rej) => {
        user_data.once('value').then((snap) => {
            if(snap.val()) {
                res(false)
            } else {
                user_data.set({
                    profile:{
                      clientCode: false,
                      email: user.email,
                      name: user.displayName,
                      age: '',
                      profession: '',
                      payed: 40000,
                      used: 0,
                      phone: user.phoneNumber !== null ? user.phoneNumber : 1111111111,
                      photo: user.photoURL,
                      updatedOn: Date.now()
                    },
                    sessions: false,
                    feedback: false
                })
                .then(() => {
                    res(true);
                })
                .catch((err) => {
                    console.log("AUTH MAN 95", err)
                })
            }
        })
        .catch((err) => {
            console.log("AUTH MAN 95", err)
        })
    })
}