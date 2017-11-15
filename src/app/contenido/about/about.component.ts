import { Component } from '@angular/core';
import { UserModel } from '../../app-model/user.model';
import { UserRepository } from '../../app-model/user.repository';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public usuarios: UserModel[] = [];
  constructor(
    private model: UserModel,
    private repository: UserRepository
  ) {}

  public obtenerLista() {
    this.repository.getAll().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      },
      err => {
        console.log('error');
      }
    );
  }
}
