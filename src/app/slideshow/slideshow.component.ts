import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Gif } from '../state/giphy.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideshowComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SlideshowComponent>,
    @Inject(MAT_DIALOG_DATA) public gif: Gif
  ) {}

  ngOnInit(): void {}
}
