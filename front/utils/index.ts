import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const fromNow = (createdAt: Date) => dayjs(createdAt).locale('ko').fromNow();
export const todayDot = (createdAt: Date) => dayjs(createdAt).format('YYYY.MM.DD');
export const todayOnlyNum = (createdAt: Date) => dayjs(createdAt).format('YYYY MM DD');
