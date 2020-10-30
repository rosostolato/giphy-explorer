import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GiphyStore, GiphyState } from './giphy.store';

@Injectable({ providedIn: 'root' })
export class GiphyQuery extends Query<GiphyState> {
  constructor(protected store: GiphyStore) {
    super(store);
  }

  selectPageIndex() {
    return this.select((state) => state.pageIndex);
  }

  selectPagesCount() {
    return this.select((state) => state.pagesCount);
  }

  selectCurrentPage() {
    return this.select((state) => state.pages[state.pageIndex]);
  }
}
