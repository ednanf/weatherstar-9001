import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState<string>('--:--:--'); // Initialize with a default time string
  const dateObject = new Date();

  /**
   * This effect sets up a timer to update the clock every second using the current time from the date object.
   * It ensures that the interval is cleared when the component unmounts to prevent memory leaks and unnecessary updates.
   *
   * @effect
   * @param {Date} [dateObject] - The date object used to get the current hour, minute, and second values. If not provided, it defaults to a new Date object each time the effect runs.
   * @returns {void}
   */
  useEffect(() => {
    const timer = setInterval(() => {
      const dateObject = new Date();
      const hour = dateObject.getHours().toString().padStart(2, '0');
      const minute = dateObject.getMinutes().toString().padStart(2, '0');
      const second = dateObject.getSeconds().toString().padStart(2, '0');

      const currentTime = `${hour} : ${minute} : ${second}`;

      setTime(currentTime);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  /**
   * Formats a Date object into a string format 'DAYOFWEEK MONTH DAY'.
   * @param date - The Date object or a timestamp that will be converted to a Date object.
   * @returns A string in the format 'DAYOFWEEK MONTH DAY'.
   * @example
   * const date = new Date();
   * console.log(getFormattedDate(date)); // Outputs something like 'SUN JAN 1' for the current date
   */
  function getFormattedDate(date: Date) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    if (!(date instanceof Date)) {
      date = new Date(date); // Ensure the input is a Date object
    }

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${dayOfWeek} ${month} ${day}`;
  }

  return (
    <div id='clock'>
      <p>{time}</p>
      <p>{getFormattedDate(dateObject)}</p>
    </div>
  );
};

export default Clock;
