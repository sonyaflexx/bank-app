import { makeObservable, observable, action } from 'mobx';

class UserStore {
  user = null;
  isLoggedIn = false;

  constructor() {
    makeObservable(this, {
      user: observable,
      isLoggedIn: observable,
      setUser: action,
      setIsLoggedIn: action,
    });

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.isLoggedIn = true;
    }
  }

  setUser(newUser) {
    this.user = newUser;
    this.saveToLocalStorage();
  }

  setIsLoggedIn(status) {
    this.isLoggedIn = status;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }
}

const userStore = new UserStore();
export default userStore;