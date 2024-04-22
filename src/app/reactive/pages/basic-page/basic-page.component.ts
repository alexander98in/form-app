import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  /* public myForm: FormGroup = new FormGroup({
    name: new FormControl('',[]),
    price: new FormControl('', []),
    inStorage: new FormControl('', [])
  }); */

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ 0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [ 0, [ Validators.required, Validators.min(0) ] ]
  });

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm.reset({ price: 0, inStorage: 0 });
  }

  onSave(): void {

    if( this.myForm.invalid ) {
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });

  }

}
