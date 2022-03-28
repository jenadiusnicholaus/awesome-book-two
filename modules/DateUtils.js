import { DateTime } from '/node_modules/luxon/src/luxon.js';

const dateTime = DateTime.local();

export default class DateUtils {
   static generateCurrentDate = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)

    static getTime = (element) => {
      element.innerHTML = `${this.generateCurrentDate()}`;
    }
}
