import { boxStyles } from '../../'
import { ComposerFactory } from 'types'

export const labelStyles = {
  ...boxStyles,
  fontSize: '14px',
  color: '$gray600',
  fontWeight: '$semibold',
  '&[for]': {
    cursor: 'pointer'
  }
}

export const composeLabelCss = ({ css }: ComposerFactory) => {
  return css(labelStyles)
}
