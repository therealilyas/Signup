import { auth } from './firebase.js';
import DOM from './dom.js'
import SERVICE from './event.js'

function signUp() {
    const promise = auth.createUserWithEmailAndPassword(DOM.email.value, DOM.password.value);
    promise.catch(e => alert(e.message));
}

function signIn() {
    const promise = auth.signInWithEmailAndPassword(DOM.email.value, DOM.password.value);
    promise.catch(e => alert(e.message));
}


function signOut() {
    DOM.email.value = '';
    DOM.password.value = '';
    auth.signOut();
}

function init() {
    SERVICE.signup
    SERVICE.signin
    SERVICE.signout
}

export default {
    signUp,
    signIn,
    signOut,
    init,
}