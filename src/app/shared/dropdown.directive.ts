import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;
    constructor() {

    }
    ngOnInit(): void {
        
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}