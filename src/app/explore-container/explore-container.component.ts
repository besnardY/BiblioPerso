import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() list: Array<Book>;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {}

}
