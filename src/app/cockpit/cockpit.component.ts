import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverName.value,
      content: this.serverContent.nativeElement.value
    });
  }

}
