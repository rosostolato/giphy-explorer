import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { GiphyQuery } from './state/giphy.query';
import { GiphyStore } from './state/giphy.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private giphyStore: GiphyStore, private giphyQuery: GiphyQuery) {}

  searchForm = new FormControl('');

  gifs$ = this.giphyQuery.selectCurrentPage();
  pageIndex$ = this.giphyQuery.selectPageIndex();
  pagesCount$ = this.giphyQuery.selectPagesCount();

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) =>
      this.giphyStore.setSearch(value)
    );
  }
}
