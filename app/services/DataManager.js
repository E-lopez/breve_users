import React, { Component } from 'react';
import { Alert } from 'react-native';
import { firebaseApp } from './Firebase';

var dateObject = [{
    scheduled: new Date()
  }]

export function Fetcher(operation, type) {

  var db = firebaseApp.database();
  const user = firebaseApp.auth().currentUser

  if(operation === "fetch") {
    return getRecords.call(this, db, user, type)
  } 
  else if (operation === "update") {
    return Updater.call(this, db, user)
  }
  else if (operation === "getUser") {
    return getUser.call(this, db, user)
  }
          
};


function getRecords(db, user, type) {
  
  var Recs;
  
  db.ref(`users/${user.uid}/sessions`).orderByChild("control").on("value", function(snapshot) {
    if(snapshot.val()){
      Recs = Packer.call(this, snapshot.val(), type) 
    } else {
      Recs = false;
    }
  }, function(errorObject) {
    // console.log(errorObject.code);
  })

  return Recs;
};


export async function getRecordsB(type) {
  
  var db = firebaseApp.database();
  const user = firebaseApp.auth().currentUser
  var Recs;

  return new Promise((res, rej) => {
    db.ref(`users/${user.uid}/records`).on("value", function(snapshot) {
      if(snapshot.val()){
        console.log("DATA MAN 54", snapshot.val())
        Recs = snapshot.val()
      } else {
        Recs = false;
      }
      res(Recs)
    }, function(errorObject) {
      rej(errorObject.code);
    })
  })
};


function Packer(arg, type) {

  var MyArray = [];

      Object.keys(arg).map((key, index) => {
        let Record = arg[key]
        Object.values(Record).map((item) => {
          MyArray.push(item)
        })
      });
    return MyArray 

};


export async function getCount() {

  var db = firebaseApp.database();
  const user = firebaseApp.auth().currentUser
  date = customDate.call(this, new Date())

  return new Promise((res, rej) => {
    let count;
    db.ref(`users/${user.uid}/sessions/`).limitToLast(1).on("value", function(snap) {
      if(snap.val()) {
        count = snap.val()
        res(count)
      } else {
        count = false
        res(count)
      }
    }, function(err) {
      rej(err)
    })
  })
}


export function Updater() {

    var db = firebaseApp.database();
    const user = firebaseApp.auth().currentUser
  
    var toUpdate;
    date = customDate.call(this, new Date())
    const data = db.ref(`users/${user.uid}/sessions`)
 
    /**Deactivated for development. */
    // data.on("value", function(snapshot) {
    //   if(snapshot.val()){
    //     Object.keys(snapshot.val()).map((key, index) => {
    //       let Record;
    //       if (key < date) {
    //         Record = snapshot.val()[key]
    //       } else {
    //         return ;
    //       }
    //       Object.keys(Record).map((item) => {
    //         db.ref(`users/${user.uid}/sessions/${key}/${item}`).update({
    //           "due": true
    //         })
    //         .then((data) =>
    //                 {
    //                 console.log("Appointments updated succesfully")
    //         })
    //         .catch((error) =>
    //                 {
    //                 console.log(error)
    //         });
    //       })
    //     });
    //   } else {
    //     return false;
    //   }
    // })    
  };

export async function GET_USER() {  
  var db = firebaseApp.database();
  const user = firebaseApp.auth().currentUser

  var userData = db.ref(`users/${user.uid}`)

  // console.log("GET_USER getting called 0")

  var pro1 = userData.child('profile')
  var pro2 = userData.child('feedback')
  var pro3 = userData.child('sessions')

  return Promise.all([
    pro1.once('value'), 
    pro2.once('value'), 
    pro3.once('value')
  ])
  .then((values) => {
    var userInfo = {}

    userInfo['profile'] = values['0'].val() ? values['0'].val() : false
    userInfo['feedback'] = values['1'].val()
    userInfo['session'] = values['2'].val() ? values['2'].val() : false

    return(userInfo)
  })
  .catch((err) => console.log(err))
};

  
export async function getUser() {  
    var db = firebaseApp.database();
    const user = firebaseApp.auth().currentUser

    return new Promise((res, rej) => {
      var UserInfo;
      db.ref(`users/${user.uid}/profile`).on("value", function(snapshot) {
        if(snapshot.val()){
          UserInfo = snapshot.val()
          res(UserInfo)
        } else {
          UserInfo = false;
          res(UserInfo)
        }
      }, function(err) {
        rej(err);
      })
    })
  };


export function customDate(dateToConvert) {
    
      var myDate = dateToConvert
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
  
      if (month < 10) {
          month = ("" + 0 + month)
      } 
      
      if (day < 10) {
          day = ("" + 0 + day)
      }
  
      myDate = ("" + myDate.getFullYear() + month + day)
  
      return parseInt(myDate)
  };


export function createDateObject(params) {
  return new Promise((res, rej) => {
    Object.keys(params).map((key, i) => {
      dateObject[key] = params[key]
    })
    res()
  })  
};


export async function fetchDateObject() {
  return new Promise((res, rej) => {
    res(dateObject)
  }, function(err) {
    rej(err)
  })
};

/**This one must filter out guides according to availability and distance. It then will limit them to five and then return their profiles and user.uid, so the user can push in their profiles information about the correspondign session location in the db.*/
export async function appointmentValidator(navigation, dist) {
  
  var db = firebaseApp.database();
  var Guides = [];
  var userLocation = dateObject.location
  var userAddress = dateObject.address

  if(!userAddress){ 
    return;
  }
  else {
    return new Promise((res, rej) => {
      db.ref(`guides`).on("value", function(snapshot) {
        if(snapshot.val()){

          Object.keys(snapshot.val()).map((key, i) => {
            let guide = snapshot.val()[key]
            var distance = calculateDistance.call(this, userLocation, guide.location)
            var distMin = 0
            
              if(dist === 3) { distMin = 1 }
              else if(dist === 6) { distMin = 3 } 
              else if(dist === 10) { distMin = 6}

            // console.log("DATA MAN, 255", distance, distMin)
            if(userLocation && guide.status && distance >= distMin && distance < dist)  {

              var guideMin = {}

              guideMin['distance'] = distance
              guideMin['feedback'] = guide.scoring
              guideMin['profile'] = {name: guide.profile.firstName + ' ' + guide.profile.surname,                      
                                      age: guide.profile.age, 
                                      profession: guide.profile.profession}
              guideMin['user'] = key

              Guides.push(guideMin)
            }
          })
        } else {
          Guides = false
        }
        res(Guides);
      }, function(errorObject) {
        rej((err) => console.log(err));
      })
    })
  }
};


function calculateDistance(user, guide) {
  let { abs, pow, sqrt, PI, sin, cos, atan2, exp, ceil, floor } = Math
  // console.log("DATA MAN, 285", user, guide)
  var R = 6371e3
  var thetaUsr = user.latitude * PI / 180;
  var thetaGd = guide.latitude * PI / 180;
  var deltaOne = (guide.latitude - user.latitude) * PI / 180;
  var deltaTwo = (guide.longitude - user.longitude) * PI / 180; 

  var Arc = pow(sin(deltaOne/2), 2) + cos(thetaUsr)*cos(thetaGd)*pow(sin(deltaTwo/2), 2)

  var C = 2 * atan2(sqrt(Arc), sqrt(1 - Arc))

  var Dist = R * C
  Dist = floor(Dist/1000 + 1)
  // console.log("DATA MAN 301, DISTANCE THING", Dist)
  return (Dist)
};


/**This one hs to be modified. The user space must be deivide in three sections: 
 * profile, containing contact and financial information. the topics of interests should be saved in a diferent loaction than the rest of the user feedback. Should be an array with some options, no more than five, that user will set public. 
 * sessions, containing every related thing to them
 * feedback, containing weaknesses, strengths, vocabulary and advice. These should be controled by every guide. They will overwrite whatever is in there already. If they need to repeat a weakness they should.  
 */
export function ADD_SESSION(navigation, method) {
  var db = firebaseApp.database();
  const user = firebaseApp.auth().currentUser

  const session = dateObject 

  const currentDate = new Date()
  const control = currentDate.getHours()
  const sessionDate = customDate.call(this, currentDate)

  // var data = db.ref(`users/${user.uid}`)

  if(!session.skill || !session.address || !session.indication || !session.guide.name) 
  {
    return Alert.alert(
      '¡Olvidaste llenar algún campo!',
      "Revísalo por favor",
         [{text: 'Ok', onPress: () => {return;}}],
         { cancelable: false }
      );
  } 
  else 
  {
      ADD_RECORD.call(this, db, user, method)   
      .then(() => {
          Alert.alert(
            '¡Sesión agendada!',
            "Tu guía llegará a la " + session.address + " en máximo " + session.guide.time + " minutos. Be Breve and Enjoy!",
                [{text: 'Ok', onPress: () => {navigation.navigate('Entry', {listener: true})}}],
                { cancelable: false }
            ),
          dateObject = [{}]
        })
        .catch((err) => {
          console.log(err)
          Alert.alert(
               'Algo salió mal...',
               "¿Estás tratando de programar una sesión a la misma hora de otra, o con menos de una hora de diferencia?",
                  [{text: 'De nuevo', onPress: () => {return;}}],
                  { cancelable: false }
               )
            })
  }
};


async function ADD_RECORD(db, user, method) {
  const session = dateObject 
  var guideKey = session.guide.guideKey
  var time = session.guide.time
              
  var userData = db.ref(`users/${user.uid}`)
  var guideData = db.ref(`guides/${guideKey}/sessions`)

  return new Promise((res, rej) => {
    CHECK_EXISTENCE(userData, guideData).then((date) => {
      if(date) {
      return Promise.all([
        ADD_USER_RECORD.call(this, userData, session, date, method), 
        PUSH_TO_GUIDE.call(this, guideData, date, user.uid, guideKey, time, session.type, session.location)
        ])
        .then((values) => {
          if(values) { res() }
        })
        .catch((err) => { rej(err) })
      }
      else { rej() }
    })
  })
};


async function CHECK_EXISTENCE(user, guide) {
  return Promise.all([
      user.child('sessions').once('value'), 
      guide.once('value')
    ])
    .then((values) => {
      if(values['0'].val() || values['1'].val()) {
        userSessionDate = values['0'].val() ? Object.keys(values['0'].val())[0] : false
        guideSessionDate = values['1'].val() ? Object.keys(values['1'].val())[0] : false
        var date = Date.now()

        var userCheck = userSessionDate ? date > (parseInt(userSessionDate) + (90 * (60 * Math.pow(10,3)))) : true
        var guideCheck = guideSessionDate ? date >  (parseInt(guideSessionDate) + (90 * (60 * Math.pow(10,3)))) : true
      
        if(userCheck && guideCheck) { return date }
        else { return false }
      }
      else {
        return Date.now()
      }
  })
  .catch((err) => console.log(err))
}

               
async function ADD_USER_RECORD(userData, session, date, method) {
  return new Promise((res, rej) => {
    userData.child(`sessions/${date}`).set({
          type: session.type, 
          skill: session.skill,
          topic: session.topic,
          address: session.address,
          indication: session.indication,
          guide: session.guide.name,
          guideKey: session.guide.guideKey,
          distance: session.guide.distance,
          time: session.guide.time,
          payment: method
      })
      .then(() => {
        UPDATE_CREDIT.call(this, userData, 'sessionAdded', 'none', session.type, null),
        UPDATE_CODE.call(this), 
        res()
      })
      .catch((err) => rej(err))
  })
};


async function PUSH_TO_GUIDE(guideData, date, user, guideKey, time, type, coords) {
  var db = firebaseApp.database();

  return new Promise((res, rej) => {
    guideData.child(`${date}`).set({
      user: user,
      time: time,
      type: type,
      coords: coords,
      validated: false
    })
    .then(() => {
      db.ref(`guides/${guideKey}`).update({
        status: false
      })
      res()
    })
    .catch((err) => rej(err))
  })
}


export async function ADD_MESSAGE_LISTENER(new_message) {
  const user = firebaseApp.auth().currentUser
  const db = firebaseApp.database()
  var conversation = db.ref('conversations')

  console.log("DATA MAN ADD MSG LSTNR 459, CALLED")

  return new Promise((res, rej) => {
    conversation.child(`${user.uid}`).on('child_added', function(snap, prevChildKey) {
      if(snap.val()) {
        // console.log("DATA MAN 466 ADD MESSAGE LISTENER", snap.val(), snap.val().sender, prevChildKey)
        var sender = snap.val().sender === 'u' ? true : false
        var received = snap.val().user_received ? true : false
        var is_new = snap.key !== prevChildKey
        var user_get = snap.val().user_get ? true : false
        console.log("DATA MAN 467 ADD MESSAGE LISTENER IS NEW", is_new)
        var data;
        conversation.child(`${user.uid}`).once('value')
        .then((snap) => {
          data = snap.val()
          console.log("DATA MAN 472 MESSAGE LISTENER RETURNING", data, sender, received)
          res(new_message(data, sender, is_new, user_get))
        });
        conversation.child(`${user.uid}/${snap.key}`).update({
          user_get: true
        })

      }  
      else{ rej(false) } 
    })
  }) 
}


export async function POST_MESSAGE(code, message) {
  const user = firebaseApp.auth().currentUser
  const db = firebaseApp.database()

  console.log("DATA MAN 565, POST_MESSAGE", code, message)

  db.ref(`conversations/${user.uid}/${Date.now()}`).set({
    code: code,
    message: message,
    sender: 'u',
    state: 'posted'
  })
}


export async function CANCEL_SESSION(type, code, data) {
  
  const user = firebaseApp.auth().currentUser
  const db = firebaseApp.database()
  // console.log("DATA MAN 455", type, reason, data)
  var userData = db.ref(`users/${user.uid}`)
  var guideData = db.ref(`guides/${data.guideKey}`)
  var conversation = db.ref(`conversations/${user.uid}`)

  Promise.all([
    userData.child('sessions').remove(),
    userData.child('profile/pendingSession').remove(),
    guideData.child('sessions').remove(),
    guideData.child('pendingSession').remove(),
    conversation.remove(),
    guideData.child(`/cancelled/${Date.now()}`).set({
      end: type,
      code: code,
      type: data.type,
      penalty: data.penalty
    })
  ])
  .then((response) => {
    // console.log("DATA MAN 473", type, reason, data)
    UPDATE_CREDIT.call(this, userData, 'sessionCancelled', type, data.type, data.penalty)
    .then(() => {
      return;
    })
  })
  .catch((err) => console.log(err))

};


async function UPDATE_CREDIT(user, transaction, end, type, penalty) {
 
  return new Promise((res, rej) => {
      user.child('profile').once('value')
      .then((snap) => {
        var toUpdate;
        var amount;
        var toUpdateUsed;

        console.log("DATA MAN 492", type)

        if(transaction === 'sessionCancelled') 
        {
          amount = type === 'double' ? 60000 : 40000
          toUpdateUsed = parseInt(snap.val().used) - (amount - penalty)
        }
        else if(transaction === 'sessionAdded') 
        {
          amount = type === 'double' ? 60000 : 40000
          toUpdateUsed = parseInt(snap.val().used) + amount
        }

        user.child('profile').update({ used: toUpdateUsed })
        .then(() => {
          res()
        })
      })
      .catch((err) => rej(console.log(err)))
   })
}


export async function UPDATE_CODE(){
  var db = firebaseApp.database()
  const user = firebaseApp.auth().currentUser
  var randomCode = Math.ceil(Math.random() * (999 - 100) + 100)

  db.ref(`users/${user.uid}/profile`).update({
    clientCode: randomCode
  })
};


export async function GET_PENDING_SESSION(sessionInfo){
  var db = firebaseApp.database();
  const user = firebaseApp.auth().currentUser;

  return new Promise((res, rej) => {
    db.ref(`users/${user.uid}/sessions/${sessionInfo.date}/${sessionInfo.control}`).once('value')
    .then((snap) => {
      var session = {guide: snap.val().guide,
                    guideKey: snap.val().guideKey,
                    skill: snap.val().skill,
                    date: snap.val().scheduled}
      res(session)
    })
    .catch((err) => rej(console.log(err)))
  })
}


export async function SUBMIT_SCORE(data){
  var db = firebaseApp.database()
  const user = firebaseApp.auth().currentUser

  var session = data.session,
      score = data.general,
      items = data.items,
      comment = data.comment,
      guideKey = data.session.guideKey

  var guideData = db.ref(`guides/${guideKey}/scoring`)
  var userData = db.ref(`users/${user.uid}`)
  var conversation = db.ref(`conversations/${user.uid}`)

  return new Promise((res, rej) => {
    ASSEMBLE_GUIDE_SCORE_OBJECT.call(this, guideData, score, items, comment)
    .then((updates) => {
      guideData.update(updates)
    })
    .then(() => {
      userData.child('profile').update({status: 'active', pendingSession: {}, clientCode: false})
      userData.child('sessions').once('value').then((snap) => {
        userData.child('records').update(snap.val()).then(() => {
          userData.child('sessions').remove()
          userData.child('messages').remove()
        })
      })
      res(true)
    })
    .then(() => { conversation.remove() })
    .catch((err) => rej(err))
  }) 
}


async function ASSEMBLE_GUIDE_SCORE_OBJECT(guideData, score, items, comment) {

  var updates = {
    average: 0,
    count: 0, 
    generalScore: 0,
    punctuality: 0,
    knowledge: 0,
    clarity: 0,
    speak: 0,
    actitude: 0,
    fun: 0,
    comments: []
    }

    items.map((item) => {
      updates[item] = 1      
    })

    console.log("DATA MAN 685", items, updates)

  return new Promise((res, rej) => {
    guideData.once('value')
    .then((snap) => {
      if(snap.val()) {

        updates.count = snap.val().count + 1
        updates.generalScore = (snap.val().generalScore + score)
        updates.average = (updates.generalScore/updates.count).toFixed(1)
        
        updates.comments = snap.val().comments
        updates.comments.push({comment: comment, date: Date.now()})
        
        updates.punctuality = (snap.val().punctuality + updates.punctuality)

        updates.knowledge = (snap.val().knowledge + updates.knowledge)

        updates.clarity = (snap.val().clarity + updates.clarity)

        updates.speak = (snap.val().speak + updates.speak) 

        updates.actitude = (snap.val().actitude + updates.actitude)

        updates.fun = (snap.val().fun + updates.fun)

       res(updates)

      } else {
        updates.count = 1
        updates.generalScore = score
        updates.average = score
        updates.comments.push({comment: comment, date: Date.now()})
        res(updates)
      }
    })
    .catch((err) => rej(err))
  })
};


export async function updateUser(userUpdates) {

  var db = firebaseApp.database()
  const user = firebaseApp.auth().currentUser

  var dataToUpdate = {}

  console.log("DATA MAN 692", userUpdates)

  Object.keys(userUpdates).map((key) => {
    let item = userUpdates[key]
    if(item) {
      dataToUpdate[key] = item
    }
  })

  return new Promise((res, rej) => {
    db.ref(`users/${user.uid}/profile`).update(dataToUpdate)
    .then(() => {
      res()
    })
    .catch((error) => console.log(error))
  })
};


export function submitPreferences(preferences) {
  var db = firebaseApp.database()
  const user = firebaseApp.auth().currentUser

  var Updates = {}

  Object.keys(preferences).map((key) => {
    let item = preferences[key]
    Updates[key] = item
  })

  db.ref(`users/${user.uid}/profile/preferences`)
  .update(Updates)
  .then(() => {
    Alert.alert(
      'Comentarios subidos',
      '¡Gracias por tus comentarios! Trabajamos para darte la mejor experiencia.',
        [{text: 'Ok', onPress: () => {return;}}],
        { cancelable: false }
      )
  })
  .catch((error) => console.log(error))
};




