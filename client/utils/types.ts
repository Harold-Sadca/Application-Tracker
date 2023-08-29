export interface TypeLogin {
  username: String;
  password: String;
}

export interface TypeRegister {
  username: String;
  password: String;
  email: String;
}

export interface TypeLoggedInUser {
  _id: String;
  username: String;
  email: String;
  applications: [];
}
