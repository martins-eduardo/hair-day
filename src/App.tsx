import TrashIcon from './assets/TrashIcon.svg?react'
import Icon from './components/icon'
import Text from './components/text'

export default function App() {
  return (
    <div>
      <Text>Ola Mundo</Text>
      <Icon svg={TrashIcon} className="fill-yellow-dark" />
    </div>
  )
}
