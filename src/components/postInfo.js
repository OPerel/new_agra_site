import React from 'react';

const PostInfo = (props) => {
  const d = new Date(props.date);

  var months = new Array ();
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

  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return (
    <span className="post-details">
      פורסם ב<a href="#">{date}</a> ע"י <a href="#">{props.author}</a>
    </span>
  )
}

export default PostInfo;
