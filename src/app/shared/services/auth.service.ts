import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { FirebaseStorage } from "@angular/fire";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  db = firebase.firestore();
  constructor() {}
  OnSignIn(user) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password);
  }
  onRegister(user) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
  }
  checkLogin() {
    return firebase.auth();
  }
  checkSingOut() {
    return firebase.auth().signOut;
  }
  onLogout() {
    return firebase.auth().signOut();
  }
  getInfoUser(email) {
    return this.db
      .collection("member")
      .doc(email)
      .get();
  }
}
