import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {JsonPipe} from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-list',
  imports: [
    JsonPipe
  ],
  templateUrl: './list.component.html'
})
export class ListComponent {
  private router = inject(Router);
  route = inject(ActivatedRoute);

  setListQuery() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: 'phone', page: 2 },
      queryParamsHandling: 'replace',
      replaceUrl: true,
    });
  }
  goReplace() {
    this.router.navigate(['/details', 42], {
      queryParams: {page: 99},
      queryParamsHandling: 'replace',
    });
  }

  goPreserve() {
    this.router.navigate(['/details', 42], {
      queryParams: { page: 99, mode: 'preserve' },
      queryParamsHandling: 'preserve',
    });
  }

  goMerge() {
    this.router.navigate(['/details', 42], {
      queryParams: { page: 99, mode: 'merge' },
      queryParamsHandling: 'merge',
    });
  }
}
