import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  @Input() name: string;
  @Input() list: Array<Book>;
  @Input() icon: string;

  constructor( private router: Router, private bookServ: BookService ) { }

  ngOnInit() {}

  selectBook(book: Book){
    this.bookServ.defineBook(book);
    this.router.navigate(['/detail-book']);
  }

}
