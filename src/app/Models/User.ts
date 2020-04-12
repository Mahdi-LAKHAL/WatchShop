export class User {
    constructor (
        public id:number,
        public fName:string,
        public lName:string,
        public email:string,
        public pwd:string,
        public confirmPwd: string,
        public tel:number,
        public address:string,
    ){
    }
}