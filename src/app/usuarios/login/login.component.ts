import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import Swal from 'sweetalert2';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Por favor Inicia sesion';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void {
  console.log(this.usuario);
  if (this.usuario.email === '' && this.usuario.passwordHash === ''){
    Swal.fire({
      icon: 'error',
      title: 'error de login',
      text: 'Error! email o password vacias',
      footer: 'por favor ingrese todos los datos'
    });
  }
  this.authService.login(this.usuario).subscribe(response => {
localStorage.setItem('token', response.sessionTokenBck);
localStorage.setItem('emailAdmin', this.usuario.email);
this.router.navigate(['/reservaciones']);

}, err => {
      if (err.status === 400) {
        alert( 'usuario o clave incorrecta' );
      }
    });
  }

}
