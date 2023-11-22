import React, { useState } from 'react';
import axios from 'axios';
import './QandA.css';

const Answer = ({ answer }) => {
  const [report, setReport] = useState(false);
  const [helpful, setHelpful] = useState(false);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // TO DO:
  // Seller sort of answers?? -- IN BOLD

  // converts raw answer.date data into proper format: month, dd, yyyy
  const convertDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date(answer.date);
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const date = `${month} ${day}, ${year}`;
    return date;
  };

  // handles a click on 'report' for each answer
  const reportURL = `${process.env.URL}/qa/answers/${answer.answer_id}/report`;
  const onReportClick = (e) => {
    e.preventDefault();
    if (report) {
      return;
    }
    setReport(true);
    axios.put(reportURL, {}, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  // handles the 'helpful' click for each answer
  const helpfulURL = `${process.env.URL}/qa/answers/${answer.answer_id}/helpful`;
  const onHelpfulClick = (e) => {
    e.preventDefault();
    if (helpful) {
      return;
    }
    setHelpful(true);
    axios.put(helpfulURL, {}, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  // { /* <span className='answer-a'>A:</span> */ }

  return (
    <div>
      <span className="answer-body">
        { answer.body ? <p><span className='answer-a'>A:</span> {answer.body}</p> : ''}
      </span>
      <span className='answer-photos'>
      {answer.photos.map((photo) => <img className='answer-photo' src={photo.url} key={photo.id}/>)}
      </span>
      <div className='answer-footer'>
        by {answer.answerer_name}, {convertDate()} |
         Helpful? <a onClick={onHelpfulClick}><span className='inner-link'>Yes</span>
         ({helpful ? answer.helpfulness + 1 : answer.helpfulness})</a> |
          <a className='inner-link' onClick={onReportClick}>{report ? 'Reported' : 'Report'}</a>
      </div>
    </div>
  );
};

export default Answer;
