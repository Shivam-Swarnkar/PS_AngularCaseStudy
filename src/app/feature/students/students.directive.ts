import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSort]',
})
export class StudentsDirective implements OnInit {
  @Input() keyName!: string;
  @Input() studentsInfo!: any;
  dataOrder!: string;
  defaultStudentsInfo: any;
  defaulBackground = 'transparent';
  highlightedBackground = '#d3d3d3bf';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.defaultStudentsInfo = this.studentsInfo.slice();
  }

  @HostListener('click') sortData() {
    this.dataOrder = this.elementRef.nativeElement.getAttribute('data-order');
    for (let elem of this.elementRef.nativeElement.parentElement.children) {
      this.renderer.setAttribute(elem, 'data-order', 'default');
      this.renderer.setStyle(elem, 'background-color', this.defaulBackground);
      this.renderer.removeClass(elem.children[0].children[0], 'd-none');
      this.renderer.removeClass(elem.children[0].children[1], 'd-block');
      this.renderer.removeClass(elem.children[0].children[2], 'd-block');
      this.renderer.addClass(elem.children[0].children[0], 'd-block');
      this.renderer.addClass(elem.children[0].children[1], 'd-none');
      this.renderer.addClass(elem.children[0].children[2], 'd-none');
    }
    if (this.dataOrder === 'default') {
      this.renderer.setAttribute(
        this.elementRef.nativeElement,
        'data-order',
        'ascending'
      );
      this.renderer.removeClass(
        this.elementRef.nativeElement.children[0].children[0],
        'd-block'
      );
      this.renderer.removeClass(
        this.elementRef.nativeElement.children[0].children[1],
        'd-none'
      );
      this.renderer.addClass(
        this.elementRef.nativeElement.children[0].children[0],
        'd-none'
      );
      this.renderer.addClass(
        this.elementRef.nativeElement.children[0].children[1],
        'd-block'
      );
    } else if (this.dataOrder === 'ascending') {
      this.renderer.setAttribute(
        this.elementRef.nativeElement,
        'data-order',
        'descending'
      );
      this.renderer.removeClass(
        this.elementRef.nativeElement.children[0].children[0],
        'd-block'
      );
      this.renderer.removeClass(
        this.elementRef.nativeElement.children[0].children[2],
        'd-none'
      );
      this.renderer.addClass(
        this.elementRef.nativeElement.children[0].children[0],
        'd-none'
      );
      this.renderer.addClass(
        this.elementRef.nativeElement.children[0].children[2],
        'd-block'
      );
    }

    if (this.dataOrder !== 'descending') {
      this.studentsInfo = this.studentsInfo.sort(
        this.dynamicSort(this.keyName)
      );
    } else {
      this.studentsInfo.length = 0;
      for (let data of this.defaultStudentsInfo) {
        this.studentsInfo.push(data);
      }
    }
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightedBackground
    );
  }

  dynamicSort(property: string) {
    let sortOrder: number;
    if (this.dataOrder === 'default') {
      sortOrder = 1;
    } else if (this.dataOrder === 'ascending') {
      sortOrder = -1;
    }

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a: any, b: any) {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
