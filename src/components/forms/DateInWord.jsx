import React from "react";
import moment from 'moment';

function DateInWord({date}) {  
  const words = moment(date).format('dddd, MMMM Do YYYY');
  
  return words
}

export default DateInWord;