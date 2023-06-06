import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import firebase from '../APIs/DB/firebaseConnection'

export const AuthContext = createContext({})

export default function AuthProvider( {children} ) {


  const [user, setUser] = useState(null)


  function loginWithFB(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((val) => {
      var dbRef = 'usersAppDrink'

      console.log('usuário: ', val.user);

      firebase.database().ref(dbRef).child(val.user.uid).once('value', (snapshot) => {
        var dataUser = {
          name: snapshot.val().name,
          email: snapshot.val().email
        }
        setUser(dataUser)
      })
    }).catch((err) => Alert.alert(err))
  }

  function signupWithFB(email, password, name) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((val) => {
      var dbRef = 'usersAppDrink'
      var dataUser = {
        name: name,
        email: val.user.email
      }
      var uid = val.user.uid
      firebase.database().ref(dbRef).child(uid).set(dataUser).then((snapshot) => {

        setUser(dataUser)
        console.log('usuario criado com sucesso: ', dataUser);
      })
    })
  }

  return (
    <AuthContext.Provider value={{ signed: true/*!!user*/, user, loginWithFB, signupWithFB}} >
      {children}
    </AuthContext.Provider>
  );
}