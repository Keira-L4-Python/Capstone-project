
export const fetchAPI = (date) => {
  const selectedDate = new Date(date);

  const seed = selectedDate.getDate();

  const allTimes = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM"
  ];

  return allTimes.filter((time, index) => {
    return (index + seed) % 3 !== 0;
  });
};

export const submitAPI = (formData) => {
  if (
    !formData.date ||
    !formData.time ||
    !formData.guests ||
    !formData.firstName ||
    !formData.lastName ||
    !formData.email
  ) {
    return false;
  }

  return true;
};
