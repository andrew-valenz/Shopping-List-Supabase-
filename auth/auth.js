// import services and utilities
import { redirectIfLoggedIn, signInUser, signUpUser } from '../fetch-utils.js';

// If on this /auth page but we have a user, it means
// user probably navigated here by the url.
// Send them back to home page (they need to sign out first!)

/* Get DOM (getElementById and friends)*/
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElemebtById('sign-up-password');

/* let state */
redirectIfLoggedIn();

/* Events */
signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
