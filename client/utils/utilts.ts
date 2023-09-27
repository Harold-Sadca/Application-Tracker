export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  const dayOfWeek = date.toLocaleString('en-UK', { weekday: 'short' });

  const time = date.toLocaleString('en-UK', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const dayOfMonth = getDayWithSuffix(date.getDate());

  const month = date.toLocaleString('en-UK', { month: 'short' });

  return `${dayOfWeek} ${time} ${dayOfMonth} of ${month}`;
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
