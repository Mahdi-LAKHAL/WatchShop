export class User {
    constructor (
        public _id:string,
        public fName:string,
        public lName:string,
        public email:string,
        public password:string,
        public confirmPassword: string,
        public tel:string,
        public address:string,
    ){
    }
}