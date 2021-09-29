import { Component, OnInit } from '@angular/core';
import { IQuora } from '../service/quora';
import { QuoraService } from '../service/quora.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  onselect(q: number) {
    this.router.navigate(['/questions', q]);
  }

  quora: IQuora[] = [];
  constructor(private qservice: QuoraService, private router: Router) {
    this.qservice.getServices().subscribe((data) => (this.quora = data));
  }
  searchi: string = '';

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {}
}
