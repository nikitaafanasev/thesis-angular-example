import { Component } from '@angular/core';
import { GreeterComponent } from "../greeter/greeter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-two',
  imports: [GreeterComponent, RouterModule],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css'
})
export class PageTwoComponent {

}
