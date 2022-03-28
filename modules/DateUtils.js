import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default class DateUtils {
    static generateCurrentDate = (datetime) => {
      const datetimeNow = DateTime.now();
      const currentDate = datetimeNow.toLocaleString(datetime.DATETIME_MED_WITH_SECONDS);

      return currentDate;
    }

    static getTime = (element) => {
      element.innerHTML = `${this.generateCurrentDate(DateTime)}`;
    }
}
