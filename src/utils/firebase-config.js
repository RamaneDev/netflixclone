import firebase from 'firebase/compat/app';

export const  initializeFirebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyApeT18X1rRiAc8xQhZdh5U_OJZAUs-y_A",
        authDomain: "training-netflix.firebaseapp.com",
        projectId: "training-netflix",
        storageBucket: "training-netflix.appspot.com",
        messagingSenderId: "616148864049",
        appId: "1:616148864049:web:9213f1eb10a7038bb91910",
        measurementId: "G-7CDLFG3S9W"
      };

      firebase.initializeApp(firebaseConfig);

  

}

