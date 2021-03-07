import { Component, OnInit } from '@angular/core';

@Component({
  selector: ' app-game2',
  templateUrl: './tapnpop.component.html',
  styleUrls: ['./tapnpop.component.scss']
})
export class TapnpopComponent implements OnInit {

  constructor() { }
  textFieldValue: string | undefined;
  ngOnInit(): void {
  }

}
