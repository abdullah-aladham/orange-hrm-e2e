import { faker } from "@faker-js/faker/.";
class User{
    firstname;
   lastName;
 username;
  password;
 confirmpass;
constructor(firstname,lastName,username,password,confirmpass){
this.firstname=firstname;
this.lastName=lastName;
this.username=lastName;
this.username=username;
this.password=password;
this.confirmpass=confirmpass;
}


}
export default User;