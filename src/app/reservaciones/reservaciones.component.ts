import { Component, OnInit } from '@angular/core';
import {Bookings} from './bookings';
import Swal from 'sweetalert2';
import {ReservacionesService} from './reservaciones.service';
import {Router} from '@angular/router';
import {Usuario} from '../usuarios/usuario';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  public displayedColumns = ['BookingId', 'Cliente', 'Fecha Creacion', 'Direccion', 'Precio'];
  data: Bookings[] = [];
  EMAIL_USER = '';
  token = '';
  useradmin = '';
  filterBooking = '';

  CAMPO: string = '';
  SIGNO: string = '';
  VALOR: string = '';
  param: string[] = [];


  constructor(private reservacionesService: ReservacionesService, private router: Router) { }

  ngOnInit(): void {
  }

  buscar(): void {
    if (this.EMAIL_USER === '') {
      Swal.fire('error', 'por favor ingrese un email', 'error');
    }

    const token = localStorage.getItem('token') || '';
    const emailAdmin = localStorage.getItem('emailAdmin') || '';
    // tslint:disable-next-line:max-line-length
    this.reservacionesService.buscar(this.EMAIL_USER, token, emailAdmin).subscribe(bookings => {
      console.log(bookings);
      this.data = bookings;
    }, error => {
      if (error.status === 400) {
        alert('ha ocurrido un error');
      }
    });
  }
  filtrar(): any {
  /*console.log(this.VALOR);
  console.log(this.CAMPO);
  console.log(this.SIGNO);
  console.log(bookings);
  if (this.CAMPO === 'id'){
    return console.log(bookings.filter(book => book.bookingId.toString().indexOf(this.VALOR) !== -1));
  }
  if (this.CAMPO === 'bookingPrice'){
    if (this.SIGNO === '<=') {
    return console.log(bookings.filter(book => book.bookingPrice <= parseInt(this.VALOR) ));
    }
    if (this.SIGNO === '>=') {
      return console.log(bookings.filter(book => book.bookingPrice >= parseInt(this.VALOR) ));
    }
  }*/
 /* let result;
  result.push(this.VALOR)
    result.push(this.CAMPO)
    result.push(this.SIGNO)*/

    return 'result';
  }

}
