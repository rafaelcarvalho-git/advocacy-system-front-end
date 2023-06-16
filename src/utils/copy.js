import { message } from 'antd'

export const copy = text => {
  navigator.clipboard.writeText(text)
  message.success(`${text} copiado!`)
}
