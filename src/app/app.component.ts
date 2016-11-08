import { Component } from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'app works!';
  data: any = {};
  preference = [];

  constructor(dataService: DataService) {
    this.data = dataService.getData();

    this.preference = this.data.attributes.map(() => 1);
  }

  getResult(device) {
    let partialResult = device.attributes.reduce((previous, current, index) => {
      return previous + current.rating * this.preference[index];
    }, 0);

    console.log(partialResult, this.preference.reduce((p, n) => p + n * 5, 0));
    let endResult = partialResult / this.preference.reduce((p, n) => p + n * 5, 0) * 5;

    return endResult.toFixed(2);
  }


}
