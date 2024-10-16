import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  reservationForm: FormGroup = new FormGroup({

  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if(this.reservationForm.valid)
      {
        console.log("valid");
      }
  }
}
