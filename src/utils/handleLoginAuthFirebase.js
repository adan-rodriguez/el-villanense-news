import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function handleLoginAuthFirebase(
  email,
  password,
  handleChangeShowLoginErrorMessage
) {
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const { user } = userCredential;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //   const { user } = userCredential;
        //   console.log(user);
        // })
        .catch((error) => {
          console.log(error);
          handleChangeShowLoginErrorMessage();
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
