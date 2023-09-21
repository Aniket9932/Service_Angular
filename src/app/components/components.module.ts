import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserComponent, UserDetailsComponent],
  imports: [CommonModule],
  exports: [UserComponent, UserDetailsComponent],
})
export class ComponentsModule {}
