import moment from "moment";
export const startOfDayEndOfDay = (
  date?: Date
): { startOfDay: Date; endOfDay: Date } => {
  let startOfDay: Date, endOfDay: Date;

  if (date) {
    // Calculate start and end of the provided date
    startOfDay = moment(date).startOf("day").toDate();
    endOfDay = moment(date).endOf("day").toDate();
  } else {
    // Calculate start and end of the current date
    startOfDay = moment().startOf("day").toDate();
    endOfDay = moment().endOf("day").toDate();
  }

  return { startOfDay, endOfDay };
};
