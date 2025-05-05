import { Component } from '@angular/core';
import { GreeterComponent } from "../greeter/greeter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-one',
  imports: [RouterModule],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css'
})
export class PageOneComponent {

}
