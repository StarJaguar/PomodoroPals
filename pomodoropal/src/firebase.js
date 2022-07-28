import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const app = initializeApp ({
    apiKey: "AIzaSyCaiMsVJc3rBxL-9gjuupzs3LaVZffePkE",
    authDomain: "pomodoropal-5914e.firebaseapp.com",
    databaseURL: "https://pomodoropal-5914e-default-rtdb.firebaseio.com",
    projectId: "pomodoropal-5914e",
    storageBucket: "pomodoropal-5914e.appspot.com",
    messagingSenderId: "1033037336988",
    appId: "1:1033037336988:web:dd35ba85a815639a2c3859",
    measurementId: "G-JK1T70LH1H"
})

export const auth = getAuth(app)
export default app