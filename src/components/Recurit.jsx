import React from 'react'
import PostedJobs from './PostedJobs';
import "../_styles/index.scss";
import InterviewMeetingInfo from './InterviewMeetingInfo';

const Recurit = () => {
  return (
    <div className="p-4 shadow mb-4 bg-white">
        <PostedJobs/>
        <InterviewMeetingInfo/>
    </div>
  )
}

export default Recurit;