import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getData() {
    return {
      attributes: ['Design', 'Performance', 'Battery'],
      devices: [
        {
          title: 'OnePlus3',
          attributes: [{ rating: 3 }, { rating: 4.5 }, { rating: 5 }],
        },
        {
          title: 'iPhone 7',
          attributes: [{ rating: 5 }, { rating: 4.5 }, { rating: 3 }],
        },
        {
          title: 'Samsung Galaxy S7',
          attributes: [{ rating: 4.5 }, { rating: 3 }, { rating: 4 }],
        }
      ]
    };

  }

}
