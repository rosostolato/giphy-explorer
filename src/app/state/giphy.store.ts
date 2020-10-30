import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { tap } from 'rxjs/operators';

import { Gif, GiphyPage } from './giphy.model';

const URL = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'gdwjphWDU038gRbOZBeOX0oNWQZEdPGM';

export interface GiphyState {
  pages: Record<number, Gif[]>;
  pageSize: number;
  pageIndex: number;
  pagesCount: number;
  searchText: string;
}

const initialState: GiphyState = {
  pages: {},
  pageSize: 20,
  pageIndex: 0,
  pagesCount: 0,
  searchText: '',
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'giphy' })
export class GiphyStore extends Store<GiphyState> {
  constructor(private http: HttpClient) {
    super(initialState);
  }

  setPage(index: number) {
    this.update({ pageIndex: index });
  }

  setSearch(text: string) {
    this.update({
      pages: {},
      pageIndex: 0,
      searchText: text,
    });

    this.fetchPage().subscribe();
  }

  fetchPage() {
    const state = this.getValue();
    const params = new HttpParams()
      .append('api_key', API_KEY)
      .append('q', state.searchText)
      .append('limit', String(state.pageSize))
      .append('offset', String(state.pageIndex));

    return this.http
      .get<GiphyPage>(URL, {
        params,
      })
      .pipe(
        tap((data) => {
          this.update({
            pages: {
              ...state.pages,
              [state.pageIndex]: data.data,
            },
            pagesCount: data.pagination.total_count,
          });
        })
      );
  }
}
