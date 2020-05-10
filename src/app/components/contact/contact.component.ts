import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/contact';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contact: Contact;
contactForm : FormGroup;
id: number;
  constructor( private formBuilder: FormBuilder,
   private contactService: ContactService) { }

  ngOnInit(): void {
this.contact=new Contact(this.id,"","","","","");
this.contactForm = this.formBuilder.group({ 
contactName: [''],
contactEmail:[''],
contactTel: [''],
contactSubject:[''],
contactMsg:['']
})
  }
  saveContact( contactForm:any){
console.log("here my contact values", this.contact);
this.contactService.addContact(this.contact).subscribe(
  
)

  }
}
