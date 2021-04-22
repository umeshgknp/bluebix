import axios from "axios";
import {LOGIN_URL, REGISTER_URL, REQUEST_PASSWORD_URL, ME_URL} from './../../../../AuthUrl';

export function login( email, password, role ) {
  return axios.post( LOGIN_URL, { email, password, role } );
}

export function register( firstname, lastname, displayname, email, phoner_number_home, contact_number, alternative_email, username, password, current_location, acceptTerms, role ) {
  return axios.post( REGISTER_URL, { firstname, lastname, displayname, email, phoner_number_home, contact_number, alternative_email, username, password, current_location, acceptTerms, role } );
}

export function requestPassword( email ) {
  return axios.post( REQUEST_PASSWORD_URL, { email } );
}

export function getUserByToken() {
  return axios.get( ME_URL );
}
