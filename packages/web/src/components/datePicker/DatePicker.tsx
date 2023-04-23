import { FC } from 'react'

import ja from 'date-fns/locale/ja'
import ReactDatePicker, {
    ReactDatePickerProps,
    registerLocale,
} from 'react-datepicker'

export const DatePicker: FC<ReactDatePickerProps> = (props) => {
    registerLocale('ja', ja)

    return (
        <ReactDatePicker
            {...props}
            minDate={new Date()}
            locale="ja"
            dateFormat="yyyy/MM/dd"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-400 hover:border-gray-500 h-10"
        />
    )
}
