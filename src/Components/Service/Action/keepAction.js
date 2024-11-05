import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../fireBase";
import { setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import generateUniqueId from "generate-unique-id";
import { db } from "../../../fireBase";



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

const GetDataSuc = (notes) => {
    console.log("notes",notes);
    return {
        type: "GETDATASUC",
        payload: notes
    };
};

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


export const addNoteAsync = (note) => {
    return async (dispatch) => {
        try {
            note.id = generateUniqueId({
                length: 3,
                useLetters: false
            });
            await setDoc(doc(db, "message", `${note.id}`), note);
            dispatch(GetDataAsync());
        } catch (err) {
            console.log("error", err);
        }
    };
};

export const GetDataAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, "message"));
            let notesdata = [];
            querySnapshot.forEach((doc) => {
                console.log(`doc${doc.id}`, doc);
                notesdata = [...notesdata, doc.data()];
            });
            dispatch(GetDataSuc(notesdata));
        } catch (err) {
            console.log("error", err);
        }
    };
};


export const deleteNoteAsync = (noteId) => {
    console.log("dlee>>",noteId);
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "message", noteId))
            dispatch(GetDataAsync());
        } catch (err) {
            console.log("Error deleting note:", err)
        }
    }
}
