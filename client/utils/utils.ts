export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  const dayOfWeek = date.toLocaleString('en-UK', { weekday: 'short' });

  const dayOfMonth = getDayWithSuffix(date.getDate());

  const month = date.toLocaleString('en-UK', { month: 'short' });

  return `${dayOfWeek} ${dayOfMonth} of ${month}`;
}

function getDayWithSuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

export function generateTimeSlots() {
  const timeSlots: string[] = [];
  const startTime = new Date();
  startTime.setHours(8, 0, 0, 0);

  for (let i = 0; i < 33; i++) {
    let time = startTime.toLocaleString('en-UK', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    if (time.slice(0, 2) == '00') {
      const splitTime = time.split(':');
      splitTime[0] = '12';
      time = splitTime.join(':');
    }
    timeSlots.push(time);
    startTime.setMinutes(startTime.getMinutes() + 15);
  }

  return timeSlots;
}

export const interviewTypes = [
  'Technical Interviews',
  'Behavioral Interviews',
  'System Design Interviews',
  'Whiteboard Interviews',
  'Coding Interviews',
  'Phone Screen Interviews',
  'Pair Programming Interviews',
  'Case Study Interviews',
];

export const getComputedStyleValue = (variableName: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    variableName
  );
};
