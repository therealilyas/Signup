const firebaseConfig = {
    apiKey: "AIzaSyBWcvhXXbPzf7xxkIwI96GqCzKxjDLfNO8",
    authDomain: "form-408ad.firebaseapp.com",
    projectId: "form-408ad",
    storageBucket: "form-408ad.appspot.com",
    messagingSenderId: "327707818111",
    appId: "1:327707818111:web:7bf0f8c2c92032cee6e74a"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()