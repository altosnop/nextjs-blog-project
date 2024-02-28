const formattedDate = (date: string) => {
  const originalDate: Date = new Date(date);

  const year: number = originalDate.getFullYear();
  const month: number = originalDate.getMonth() + 1;
  const day: number = originalDate.getDate();

  const formattedDate: string = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;

  return formattedDate;
};

export default formattedDate;
