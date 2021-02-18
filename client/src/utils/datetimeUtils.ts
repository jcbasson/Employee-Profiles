import moment from "moment";
//TODO: Come up with better naming conventions because this won't scale well for other date formatters
export const formatISOZDate = (isoDateString: string): string => {
  return moment.utc(isoDateString).format("DD/MM/YYYY");
};
