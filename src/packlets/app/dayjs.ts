import importedDayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import 'dayjs/locale/th'

importedDayjs.extend(utc)
importedDayjs.extend(timezone)
importedDayjs.extend(buddhistEra)

importedDayjs.locale('th')
importedDayjs.tz.setDefault('Asia/Bangkok')

export const dayjs = importedDayjs
