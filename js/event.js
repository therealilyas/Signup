import DOM from './dom.js'
import SERVICE from './service.js';


const signup = DOM.signUpBtn.addEventListener('click', () => {
    SERVICE.signUp()
})

const signin = DOM.signInBtn.addEventListener('click', () => {
    SERVICE.signIn()
})

const signout = DOM.signOutBtn.addEventListener('click', () => {
    SERVICE.signOut()
})

export default {
    signup,
    signin,
    signout,
}