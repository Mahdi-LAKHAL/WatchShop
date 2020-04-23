// Contact Class
export class Contact {
    constructor(
       public id: number,
       public contactName: string,
       public contactTel: string,
       public contactEmail: string,
       public contactSubject: string,
       public contactMsg:string
    ) {}
}