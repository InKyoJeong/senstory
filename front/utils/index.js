import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export const fromNow = (createdAt) => dayjs(createdAt).locale("ko").fromNow();
export const today = (createdAt) => dayjs(createdAt).format("YYYY.MM.DD");
export const todayOnlyNum = (createdAt) =>
  dayjs(createdAt).format("YYYY MM DD");
