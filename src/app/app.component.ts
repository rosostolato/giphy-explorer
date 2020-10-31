import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { GiphyQuery } from './state/giphy.query';
import { GiphyStore } from './state/giphy.store';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { Gif } from './state/giphy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private giphyStore: GiphyStore,
    private giphyQuery: GiphyQuery,
    private dialog: MatDialog
  ) {}

  searchForm = new FormControl('');

  gifs$ = this.giphyQuery.selectCurrentPage();
  pageIndex$ = this.giphyQuery.selectPageIndex();
  pagesCount$ = this.giphyQuery.selectPagesCount();

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) =>
      this.giphyStore.setSearch(value)
    );
  }

  openSlideshow(gif: Gif) {
    this.dialog.open(SlideshowComponent, {
      data: gif,
    });
  }
}
