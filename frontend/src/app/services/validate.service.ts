import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name === undefined || user.username === undefined || user.email === undefined || user.password === undefined ) {
      return false
    }
    return true;
  }

  validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
  }

  validateLogin(user) {
    if(user.username === undefined || user.password === undefined ) {
      return false
    }
    return true;
  }

}
