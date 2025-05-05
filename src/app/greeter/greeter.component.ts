import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-greeter',
    imports: [NgIf, NgForOf, FormsModule, CommonModule, ReactiveFormsModule],
    templateUrl: './greeter.component.html',
    styleUrl: './greeter.component.css'
})
export class GreeterComponent implements OnInit {
    @Input() name: string = 'Somebody';
    greeting$: Observable<string> = of('1000ms sind vergangen!!').pipe(delay(1000));

    buttonClicked = false;

    myForm!: FormGroup;

    onButtonClick() {
        this.buttonClicked = true;
    }

    onSubmit() {
        if (this.myForm.valid) {
          alert('Formular wurde abgeschickt mit: ' + this.myForm.value.inputValue);
        } else {
          alert('Das Formular ist ungültig!');
        }
      }



    ngOnInit() {
        this.myForm = new FormGroup({
        inputValue: new FormControl('', [Validators.required, Validators.minLength(3)]),
      });
    }
}
