import React from "react";
import { meetingsData } from "../utils/constant";
import Button from "../../UI/Button";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

function InterviewMeetingInfo() {
  return (
    <div className="p-4 border-[1px] rounded-md mb-4 mt-4 w-full">
      <div className="flex justify-between items-center border-b-2 pb-1 mb-3">
        <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
        <button className="p-0 text-gray-600">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
      <div className="overflow-y-auto p-2" style={{ maxHeight: '300px' }}>
        {meetingsData.map((meeting) => (
          <MeetingInfoCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}

const MeetingInfoCard = ({ meeting }) => {
  return (
    <div className="bg-white rounded-lg mb-4 w-full flex flex-col md:flex-row border border-gray-200" style={{ minHeight: '150px' }}>
      <div className="md:w-1/3 border-r p-2 flex flex-col items-center">
        <img
          src={meeting.candidate.picture}
          alt="candidate"
          className="w-16 h-16 rounded-full mb-2"
        />
        <p className="text-sm font-semibold">{meeting.candidate.name}</p>
        <p className="text-xs text-gray-600">{meeting.candidate.designation}</p>
        <div className="flex mt-2">
          <div className="flex items-center p-1 border-r">
            <FaCalendarAlt className="text-blue-500 w-4 h-4" />
            <p className="text-blue-500 ml-1 text-sm">{meeting.date}</p>
          </div>
          <div className="flex items-center p-1">
            <FaRegClock className="text-blue-500 w-4 h-4" />
            <p className="text-blue-500 ml-1 text-sm">{meeting.time}</p>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 p-2">
        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-left text-gray-500 text-xs">Interview Level</th>
              <th className="text-left text-gray-500 text-xs">Interviewer</th>
              <th className="text-left text-gray-500 text-xs">Status</th>
            </tr>
          </thead>
          <tbody>
            {meeting.levels.map((level, index) => (
              <tr key={index} className="border-t">
                <td className="p-1 text-xs">{level.level}</td>
                <td className="p-1 text-xs">{level.interviewer}</td>
                <td className="p-1 text-xs">{level.status}</td>
              </tr>
            ))}
            <tr className="border-t">
              <td className="p-1 text-xs">Meet via: {meeting.meetVia}</td>
              <td className="p-1 text-xs">Attendees: {meeting.attendees}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end gap-2">
          <Button variant="outline-primary" className="text-xs p-1">Reschedule</Button>
          <Button variant="primary" className="text-xs p-1">Join</Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewMeetingInfo;
