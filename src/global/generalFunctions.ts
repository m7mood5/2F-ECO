// get random letter from array to select the default avatar

export const getRandomLetter = (arr: string[]): string | null => {
  if (arr.length === 0) {
    return "t";
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export function convertTimestampToDate(timestamp) {
  const date = new Date(parseInt(timestamp));
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  const formattedDate = `${day} ${month}, ${hours}:${minutes}`;
  return formattedDate;
}