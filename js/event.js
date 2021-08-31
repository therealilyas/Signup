import DOM from './dom.js'
import SERVICE from './service.js';

DOM.signUpBtn.addEventListener('click', () => {
    SERVICE.signUp()
})
DOM.signInBtn.addEventListener('click', () => {
    SERVICE.signIn()
})
DOM.signOutBtn.addEventListener('click', () => {
    SERVICE.signOut()
})