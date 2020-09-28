import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DisplayMessageService {

  constructor(private toast: ToastrService) { }

  showSucessMessage(message, title) {
    this.toast.success(message, title);
  }

  showErrorMessage(message, title) {
    this.toast.error(message, title);
  }


  showSucessMessageWithHTML(message, title) {
    this.toast.success(message, title,
      {
        enableHtml: true
      });
  }

  showSucessMessageWithTimeout(message, title, timespan) {
    this.toast.success(message, title,
      {
        timeOut: timespan
      });
  }

}
