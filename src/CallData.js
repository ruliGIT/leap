import { useState, useEffect } from "react";

import missedCall from './img/missed-call.png';
import answeredCall from './img/phone.png';
import voicemail from './img/voicemail.png';
import inbound from './img/inbound.png';
import outbound from './img/outbound.png';

export default function CallData() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://aircall-job.herokuapp.com/activities')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  function callType(type) {
    if (type === "missed") {
     return <img src={missedCall} alt='missed-call'/>
    }
    else if (type === "answered") {
      return <img src={answeredCall} alt='answered-call'/>
    }
    else {
      return <img src={voicemail} alt='voicemail'/>
    }}

  function callDirection(direction) {
    if (direction === "outbound") {
     return <img src={outbound} alt='outbound-call'/>
    }
    else if (direction === "inbound") {
      return <img src={inbound} alt='inbound-call'/>
    }
  }

  function dateFormating(date) {
    var readableDate = new Date(date);
    return readableDate.toDateString().split(' ').slice(1).join(' ');
  }

  function timeFormating(time) {
    var readableTime = new Date(time);
    return readableTime.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
  }

  return (
    <div>
      <div id='logs'>
        {users.map((user) => (
          <div id='call'>
            <div class="grid-container">
              <div class="item1">{dateFormating(user.created_at)} @ {timeFormating(user.created_at)}</div>
              <div class="item2">{callDirection(user.direction)}</div>
              <div class="item3">{user.from}</div>  
              <div class="item4">{user.to} via {user.via}</div>
              <div class="item5">{callType(user.call_type)}</div>
              <div class="item6">{user.duration} seconds</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}