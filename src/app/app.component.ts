import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreeterComponent } from './greeter/greeter.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, GreeterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'angular-example';
}
