import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule,RouterModule],
    declarations: [IntroComponent],
    exports: [IntroComponent]
})

export class IntroModule{ }