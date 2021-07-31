import { Component, OnInit, Input } from '@angular/core';
import { StringDecoder } from 'string_decoder';
import { Book } from '../models/book.model';
import { Movie } from '../models/movie.model';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  @Input() name: string;
  @Input() list: Array<any>;
  @Input() type: string;

  constructor(  ) { }

  ngOnInit() {}

}
