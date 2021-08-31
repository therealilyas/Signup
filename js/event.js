import DOM from './dom.js'
import SERVICE from './service.js';


const signup = DOM.signUpBtn.addEventListener('click', () => {
    console.log("sign up")
    SERVICE.signUp()
})

const signin = DOM.signInBtn.addEventListener('click', () => {
    console.log("sign in")
    SERVICE.signIn()
})

const signout = DOM.signOutBtn.addEventListener('click', () => {
    console.log("sign out")
    SERVICE.signOut()
})

export default {
    signup,
    signin,
    signout,
}