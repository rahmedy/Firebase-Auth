import firebase from 'firebase'
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyAU5NLWd_KF2fI7Tser3Qlfgb2F1wW-bu0",
    authDomain: "auth-dev-ac55b.firebaseapp.com",
    databaseURL: "https://auth-dev-ac55b.firebaseio.com",
    projectId: "auth-dev-ac55b",
    storageBucket: "auth-dev-ac55b.appspot.com",
    messagingSenderId: "83233475734",
    appId: "1:83233475734:web:81d67375d81d06958086b7"
})


export const auth = app.auth()
export default app