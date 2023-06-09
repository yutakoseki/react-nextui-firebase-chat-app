import { Button } from '@nextui-org/react'
import React from 'react'

interface StringProps {
  buttonValue: string;
}

const Submit: React.FC<StringProps> = (props) => {
  const buttonValue = props.buttonValue;
  return (
    <Button shadow color="gradient" css={{ width: '70%' }}>
      {buttonValue}
    </Button>
  )
}

export default Submit