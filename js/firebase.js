 

  //get the elemnts from the dom login.html

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');

//add login event make login button listen for click then do something 




loginButton.addEventListener('click', e =>{

const email = loginEmail.value;
const pass = loginPassword.value;
const auth = firebase.auth();


// sign in 

const promise = auth.signInWithEmailAndPassword(email, pass);

promise.catch(e => console.log(e.message));

});

//logout

logoutButton.addEventListener('click',e =>{

firebase.auth().signOut();

} );

/// this checks user state logged in then do something else do something else

firebase.auth().onAuthStateChanged(firebaseUser =>{

if(firebaseUser){

  console.log(firebaseUser + 'singed in');
  logoutButton.classList.remove('hide');
}else{

  console.log('not logged in/signed out ');
  logoutButton.classList.add('hide');
}

});


