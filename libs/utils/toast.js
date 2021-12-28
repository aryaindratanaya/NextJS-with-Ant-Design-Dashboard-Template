import { notification } from 'antd'

const toast = ({ type = 'success', message = type, description }) => {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottomRight',
  })
}

export default toast
