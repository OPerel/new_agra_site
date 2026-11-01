import React from 'react';

const PostInfo = (props) => {
  const d = new Date(props.date);
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jerusalem',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(d);
  const getDatePart = type => dateParts.find(part => part.type === type).value;

  var months = [];
  months[0] = "ינואר";
  months[1] = "פברואר";
  months[2] = "מרץ";
  months[3] = "אפריל";
  months[4] = "מאי";
  months[5] = "יוני";
  months[6] = "יולי";
  months[7] = "אוגוסט";
  months[8] = "ספטמבר";
  months[9] = "אוקטובר";
  months[10] = "נובמבר";
  months[11] = "דצמבר";

  const date = `${months[Number(getDatePart('month')) - 1]} ${getDatePart('day')}, ${getDatePart('year')}`;
  return (
    <span className="post-details">
      פורסם ב{date}
    </span>
  )
}

export default PostInfo;
