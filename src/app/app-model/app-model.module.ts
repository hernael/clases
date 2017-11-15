import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { UserModel } from './user.model';
import { UserRepository } from './user.repository';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    UserRepository, UserModel
  ]
})
export class AppModelModule { }
