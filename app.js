
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyAASRPqPOOKHHbCbVX1VvUsfxA4MC82mGo",
  authDomain: "shia-app-b0efc.firebaseapp.com",
  projectId: "shia-app-b0efc",
  storageBucket: "shia-app-b0efc.appspot.com",
  messagingSenderId: "810375472701",
  appId: "1:810375472701:web:53ccda30e2f29ecc17ec54",
  measurementId: "G-KRVHZSKB5Q"
};      

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
onAuthStateChanged(auth,async (user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "userData", uid);
const docSnap = await getDoc(docRef);
  console.log("Document data:", docSnap.data());
   console.log('Authentified!')
      document.getElementById('loginBtn').style.display='none'
      document.getElementById('createAccountBtn').style.display='none'
      document.getElementById('myAccountBtn').innerText=docSnap.data().name
    } else {
        document.getElementById('myAccountBtn').style.display='none';
        document.getElementById('logoutBtn').style.display='none';

        console.log('Authentification Failed!')
    }
  });
if(window.location.pathname=='/Shia-App/index.html' ||window.location.pathname=='/Shia-App/' || window.location.pathname=='/index.html'){
let sec=0    
setInterval(function(){
if(sec>4){
    sec=0;
    console.log('changingSlide')
}else if(sec==0){
    document.getElementById('img1').style.display='block';
    document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='none';
}else if(sec==2){
    document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='block';
    document.getElementById('img3').style.display='none';
}else if(sec==4){
    document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='block';
}
sec++;
},1000)
}
function open(target){
    window.location.href=target;
}

async function logout(){
    await auth.signOut();
    window.location.href='index.html'
}


console.log(window.location.pathname)
window.open=open;
window.logout=logout;