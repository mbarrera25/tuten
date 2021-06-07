import {Pipe, PipeTransform} from '@angular/core';
import {Bookings} from '../reservaciones/bookings';

@Pipe({
  name: 'filterBook'
})

export class FilterPipe implements PipeTransform{

  transform(booking: Bookings[], filterBooking: string[] ): any{
   if (!booking || filterBooking.length === 0){
     return booking;
   }
   const signo = filterBooking[0];
   const campo = filterBooking[1];
   const valor = filterBooking[2];

   if (campo === 'bookingId'){
      return booking.filter(book => book.bookingId.toString().indexOf(valor) !== -1);
    }else{
      if (signo === '<=') {
        return booking.filter(book => book.bookingPrice <= parseInt(valor));
      }
      if (signo === '>=') {
        return booking.filter(book => book.bookingPrice >= parseInt(valor));
      }
      if (signo === '=') {
       return booking.filter(book => book.bookingPrice === parseInt(valor));
     }
    }
  }
}
