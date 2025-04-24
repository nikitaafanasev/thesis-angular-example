import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-greeter',
    imports: [NgIf, NgForOf, FormsModule, CommonModule],
    templateUrl: './greeter.component.html',
    styleUrl: './greeter.component.css'
})
export class GreeterComponent implements OnInit {
    @Input() name: string = 'Somebody';
    greeting$: Observable<string> = of('👋 1000ms sind vergangen!!').pipe(delay(1000));

    buttonClicked = false;

    onButtonClick() {
        this.buttonClicked = true;
    }

    ngOnInit() {
        console.log('Hello World');
    }
}
