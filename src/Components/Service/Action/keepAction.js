import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../fireBase";


const Gprovider = new GoogleAuthProvider();

const signIn = (Suser) => {
    return {
        type: 'SIGN_IN',
        payload: Suser
    }
}

const signErr = (err) => {
    return {
        type: 'SIGN_ERR',
        payload: err
    }
}

const logIn = (Luser) => {
    return {
        type: 'LOG_IN',
        payload: Luser
    }
}
const logErr = (Lerr) => {
    return {
        type: 'LOG_ERR',
        payload: Lerr
    }
}

const formLogOut = () => {
    return{
        type: 'LOG_OUT' 
    }
}

export const signInAsync = (input) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, input.email, input.pass).then((userCr) => {
            console.log("useCr", userCr);
            dispatch(signIn(userCr))
        }).catch((err) => {
            console.log("err", err);
            dispatch(signErr(err));
        })
    }
}

export const logInAstnc = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.pass).then((userCrWithLog) => {
            console.log("userCrWithLog", userCrWithLog);
            dispatch(logIn(userCrWithLog))
        }).catch((Logerr) => {
            console.log("Logerr", Logerr);

            dispatch(logErr(logErr))
        })
    }
}

export const GoogleAsync = () => {
    return dispatch => {
        signInWithPopup(auth, Gprovider).then((res) => {
            console.log("res", res);
            dispatch(logIn())

        }).catch((err) => {
            console.log("err", err);
            dispatch(logErr(logErr))

        })
    }
}

export const logOut = () => {
    return dispatch => {
        signOut(auth).then(() => {

        }).catch((err) => {
            console.log("err", err);
            dispatch(formLogOut(err))
        })
    }
}