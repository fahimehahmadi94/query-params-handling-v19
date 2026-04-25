import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [
    JsonPipe,
    RouterLink
  ],
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
}
