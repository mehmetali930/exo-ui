import { ComponentFactory } from 'types'
import { inputableStyles } from '@mvr-studio/exo-css'

interface ComposeInputProps extends ComponentFactory {
  type?: string
}

const composeInput = ({ styled }: ComposeInputProps) => {
  return styled('input', inputableStyles)
}

export default composeInput
