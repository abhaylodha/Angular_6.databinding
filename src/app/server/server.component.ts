import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('paragraphContent', { static: true }) paragraphContent: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log("ngContent ngOnInit: " + this.paragraphContent.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked called");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit called");
    console.log("ngContent ngAfterContentInit: " + this.paragraphContent.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked called");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit called");
    console.log("ngContent Afterview Init: " + this.paragraphContent.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges called");
    console.log(changes);
  }

  ngOnDestroy() {
    console.log("OnDestroy called");
  }

}
