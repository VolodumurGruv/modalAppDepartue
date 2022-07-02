import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatGridListModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatGridListModule],
})
export class MaterialModule {}
