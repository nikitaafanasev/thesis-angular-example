import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-greeter',
    imports: [NgIf, NgForOf, FormsModule],
    templateUrl: './greeter.component.html',
    styleUrl: './greeter.component.css'
})
export class GreeterComponent implements OnInit {
    @Input() name: string = 'Somebody';

    ngOnInit() {
        console.log('Hello World');
    }
}
