/*import renderform from "./modules/renderform";
import searchcode from "./modules/searchcode";
import Icons from "./modules/Icons";

renderform();
searchcode();
Icons();
*/

import{ user } from "./class/user";
import { Student } from "./class/Student";
import product from "./class/product"
const user1 = new user('John','John@gmail.com')
user1.setrole('security');
user1.setdepartment('IT');
console.log(user1.getfulluserdata());
user1.displayui(user1.getfulluserdata());


const student = new Student ('Karolis','karolis@gmail.com','JS')
console.log(student)
product();