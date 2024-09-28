// constant.js
export const dashboardData = {
    user: 'John Doe',
    currentTime: '2:30 PM',
    leaveRequests: 3,
    attendance: {
      today: {
        status: 'present',
        timeLeft: '3h 45m',
      },
      averageHours: '8h 30m',
      averageCheckIn: '9:05 AM',
      averageCheckOut: '5:45 PM',
      onTimeArrivalPercentage: 80,
      details: {
        onTime: 150,
        workFromHome: 50,
        lateAttendance: 10,
        absent: 60,
        currentCount: 20,
        totalDays: 270,
      },
      performance: {
        betterThanPercentage: 70,
      },
    },
  };

  export const team = [
    {
      "name": "Alena Gouse",
      "role": "UI Designer-UID1",
      "profileImage": "https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg",
      "dates": generateDates()
    },
    {
      "name": "Miracle Vetrovs",
      "role": "UX Designer-UXD2",
      "profileImage": "https://cdn.openart.ai/published/S7jOXsdB3tMDFy6JNfak/-nmXB1M1_vvaY_1024.webp",
      "dates": generateDates()
    },
    {
      "name": "John Doe",
      "role": "Software Engineer-SE1",
      "profileImage": "https://i.pinimg.com/474x/8c/44/07/8c44070959b012caa775ee4929c15ffe.jpg",
      "dates": generateDates()
    },
    {
      "name": "Jane Smith",
      "role": "Product Manager-PM1",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cartoon-of-a-young-woman-smiling-on-a-black-background-image_2680954.jpg",
      "dates": generateDates()
    },
    {
      "name": "Emily Johnson",
      "role": "Marketing Specialist-MS1",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-in-the-style-of-dark-turquoise-and-light-navy-image_2698692.jpg",
      "dates": generateDates()
    },
    {
      "name": "Michael Brown",
      "role": "Data Analyst-DA1",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-an-animated-illustration-that-features-a-young-man-playing-a-game-image_2680953.jpg",
      "dates": generateDates()
    },
    {
      "name": "Sarah Davis",
      "role": "HR Manager-HR1",
      "profileImage": "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg",
      "dates": generateDates()
    }
  ];
  
  function generateDates() {
    const dates = ['today', '25/9', '24/9', '23/9'];
    const statuses = ['in office', 'work from home', 'on leave', 'absent', 'holiday'];
  
    return dates.map(date => {
      const status = getRandomStatus(statuses);
      return {
        date,
        arrivalTime: status === 'in office' || status === 'work from home' ? getRandomTime() : '-',
        status
      };
    });
  }
  
  function getRandomTime() {
    const hours = Math.floor(Math.random() * 2) + 9; // 9 to 10 hours
    const minutes = Math.floor(Math.random() * 60); // 0 to 59 minutes
    const period = hours < 11 ? 'AM' : 'AM'; // Keep it in AM for this range
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
  }
  
  function getRandomStatus(statuses) {
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

// workingHistoryData.js

export const workingHistoryData = [
  {
    date: '26/9/23', // today's date
    arrivalTime: '9:15 AM',
    departureTime: 'Still in office',
    effectiveTime: '5:45',
  },
  {
    date: '25/9/23',
    arrivalTime: '8:50 AM',
    departureTime: '6:00 PM',
    effectiveTime: '9:10',
  },
  {
    date: '24/9/23',
    arrivalTime: '10:10 AM',
    departureTime: '5:45 PM',
    effectiveTime: '7:35',
  },
  {
    date: '23/9/23',
    arrivalTime: '12:30 PM',
    departureTime: '3:45 PM',
    effectiveTime: '3:15',
  },
  {
    date: '22/9/23',
    arrivalTime: 'absent',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '21/9/23',
    arrivalTime: '9:00 AM',
    departureTime: '5:00 PM',
    effectiveTime: '8:00',
  },
  {
    date: '20/9/23',
    arrivalTime: '8:45 AM',
    departureTime: '5:30 PM',
    effectiveTime: '8:45',
  },
  {
    date: '19/9/23',
    arrivalTime: '9:30 AM',
    departureTime: '4:00 PM',
    effectiveTime: '6:30',
  },
  {
    date: '18/9/23',
    arrivalTime: '10:00 AM',
    departureTime: '4:30 PM',
    effectiveTime: '6:30',
  },
  {
    date: '17/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '16/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '15/9/23',
    arrivalTime: '9:15 AM',
    departureTime: '6:00 PM',
    effectiveTime: '8:45',
  },
  {
    date: '14/9/23',
    arrivalTime: 'absent',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '13/9/23',
    arrivalTime: 'leave',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '12/9/23',
    arrivalTime: '8:55 AM',
    departureTime: '5:15 PM',
    effectiveTime: '8:20',
  },
  {
    date: '11/9/23',
    arrivalTime: '9:05 AM',
    departureTime: '5:45 PM',
    effectiveTime: '8:40',
  },
  {
    date: '10/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '9/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '8/9/23',
    arrivalTime: '8:50 AM',
    departureTime: '5:20 PM',
    effectiveTime: '8:30',
  },
  {
    date: '7/9/23',
    arrivalTime: '9:20 AM',
    departureTime: '5:00 PM',
    effectiveTime: '7:40',
  },
  {
    date: '6/9/23',
    arrivalTime: 'absent',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '5/9/23',
    arrivalTime: '9:10 AM',
    departureTime: '5:15 PM',
    effectiveTime: '8:05',
  },
  {
    date: '4/9/23',
    arrivalTime: 'leave',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '3/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '2/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '1/9/23',
    arrivalTime: '9:00 AM',
    departureTime: '5:00 PM',
    effectiveTime: '8:00',
  },
  // Add more entries if needed
];

export const jobList = [
  {
    icon: "./python.png",
    role: "Python Developer",
    position: "Senior Developer",
    total_applicants: 258,
    percentage_inc: 28,
    last_updated: "6 min ago",
  },
  {
    icon: "./angular.png",
    role: "Angular Developer",
    position: "Senior Developer",
    total_applicants: 258,
    percentage_inc: 28,
    last_updated: "6 min ago",
  },
  {
    icon: "./java.png",
    role: "Java Developer",
    position: "Senior Developer",
    total_applicants: 258,
    percentage_inc: 28,
    last_updated: "6 min ago",
  },
  {
    icon: "./uiux.png",
    role: "UX|UI Designers",
    position: "Senior Developer",
    total_applicants: 258,
    percentage_inc: 28,
    last_updated: "6 min ago",
  },
];
  

export const meetingsData = [
  {
    id: 1,
    candidate: {
      name: "John Smith",
      designation: "Senior Python Developer",
      picture: "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg",
    },
    date: "19th Feb 2024",
    time: "10:30 A.M",
    levels: [
      { level: "1st Level", status: "7/10", interviewer: "Stella" },
      { level: "2nd Level", status: "6/10", interviewer: "Smith" },
      { level: "3rd Level", status: "Waiting", interviewer: "Stephan" },
    ],
    meetVia: "G-Meet",
    attendees: "Johnson",
  },
  {
    id: 2,
    candidate: {
      name: "Maria",
      designation: "Senior Python Developer",
      picture: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-in-the-style-of-dark-turquoise-and-light-navy-image_2698692.jpg",
    },
    date: "19th Feb 2024",
    time: "10:30 A.M",
    levels: [
      { level: "1st Level", status: "7/10", interviewer: "Stella" },
      { level: "2nd Level", status: "6/10", interviewer: "Smith" },
      { level: "3rd Level", status: "Waiting", interviewer: "Stephan" },
    ],
    meetVia: "G-Meet",
    attendees: "Johnson",
  },
  {
    id: 3,
    candidate: {
      name: "David Brown",
      designation: "Java Developer",
      picture: "https://img.freepik.com/premium-photo/male-portrait-isolated-studio_590464-10128.jpg",
    },
    date: "20th Feb 2024",
    time: "11:00 A.M",
    levels: [
      { level: "1st Level", status: "8/10", interviewer: "Michael" },
      { level: "2nd Level", status: "7/10", interviewer: "Chris" },
      { level: "3rd Level", status: "Scheduled", interviewer: "Jennifer" },
    ],
    meetVia: "Zoom",
    attendees: "Kelly",
  },
  {
    id: 4,
    candidate: {
      name: "Alice Walker",
      designation: "UI/UX Designer",
      picture: "https://img.freepik.com/free-photo/studio-portrait-young-smiling-woman_1258-33010.jpg",
    },
    date: "20th Feb 2024",
    time: "2:30 P.M",
    levels: [
      { level: "1st Level", status: "9/10", interviewer: "Sophie" },
      { level: "2nd Level", status: "8/10", interviewer: "Liam" },
      { level: "3rd Level", status: "Scheduled", interviewer: "Emma" },
    ],
    meetVia: "Microsoft Teams",
    attendees: "Olivia",
  },
  {
    id: 5,
    candidate: {
      name: "James Wilson",
      designation: "Full-Stack Developer",
      picture: "https://img.freepik.com/free-photo/portrait-smiling-man_23-2149195782.jpg",
    },
    date: "21st Feb 2024",
    time: "3:00 P.M",
    levels: [
      { level: "1st Level", status: "7/10", interviewer: "Henry" },
      { level: "2nd Level", status: "8/10", interviewer: "Samuel" },
      { level: "3rd Level", status: "Scheduled", interviewer: "Ella" },
    ],
    meetVia: "Skype",
    attendees: "Lucas",
  },
  {
    id: 6,
    candidate: {
      name: "Emma Green",
      designation: "Data Scientist",
      picture: "https://img.freepik.com/free-photo/portrait-confident-young-woman_23-2149138132.jpg",
    },
    date: "22nd Feb 2024",
    time: "4:00 P.M",
    levels: [
      { level: "1st Level", status: "9/10", interviewer: "Mia" },
      { level: "2nd Level", status: "9/10", interviewer: "Noah" },
      { level: "3rd Level", status: "Scheduled", interviewer: "Amelia" },
    ],
    meetVia: "Google Meet",
    attendees: "Ethan",
  },
];

export const holidaysData = [
  { date: '2024-01-01', name: 'New Year\'s Day' },
  { date: '2024-01-26', name: 'Republic Day' },
  { date: '2024-02-14', name: 'Valentine\'s Day' },
  { date: '2024-03-17', name: 'St. Patrick\'s Day' },
  { date: '2024-04-05', name: 'Good Friday' },
  { date: '2024-04-22', name: 'Earth Day' },
  { date: '2024-05-01', name: 'Labor Day' },
  { date: '2024-05-09', name: 'Victory Day' },
  { date: '2024-06-21', name: 'Summer Solstice' },
  { date: '2024-07-04', name: 'Independence Day' },
  { date: '2024-08-15', name: 'Independence Day (India)' },
  { date: '2024-09-02', name: 'Labor Day (USA)' },
  { date: '2024-10-31', name: 'Halloween' },
  { date: '2024-11-28', name: 'Thanksgiving Day' },
  { date: '2024-12-25', name: 'Christmas Day' },
  { date: '2024-12-31', name: 'New Year\'s Eve' }
];
