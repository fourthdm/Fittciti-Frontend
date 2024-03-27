import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  search() {
    this.searchEmitter.emit(this.searchTerm);
  }
}
