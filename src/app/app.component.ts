/*defines a model object that is bound to the form fields in the template.
Enables access to the data entered in the form.*/

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  model: any = {};
  public maxLength = 5;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
