import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuora } from '../service/quora';
import { QuoraService } from '../service/quora.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  quora: IQuora[] = [];

  constructor(
    private route: ActivatedRoute,
    private qservice: QuoraService,
    private router: Router
  ) {
    this.qservice.getServices().subscribe((data) => (this.quora = data));
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.QID = id;
  }

  public QID: any;
}
