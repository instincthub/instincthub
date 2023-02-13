import React from "react";
import moment from 'moment';

function DateInWord({date}) {  
  const words = moment(date).format('MMMM Do YYYY');
  
  return words
}

export default DateInWord;