import { makeObservable, observable, action } from 'mobx';

class UserStore {
  user = {
    card_number: null,
    firstname: '',
    lastname: ''
  };

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser(newUser) {
    this.user = newUser;
  }
}

const userStore = new UserStore();
export default userStore;