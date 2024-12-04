import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ItemModule {
  item: string = 'ItemModule';
  constructor(item: string) {
    this.item = item;
  }
}
