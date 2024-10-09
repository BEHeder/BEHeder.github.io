import { Directive, HostBinding, HostListener } from "@angular/core";
// The udemy Angular course, section 24.421, talks about closing the dropdown from anywhere
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}