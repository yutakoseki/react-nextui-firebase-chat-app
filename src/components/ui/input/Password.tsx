import { Input } from '@nextui-org/react'
import React from 'react'

interface StringProps {
  placeholder: string;
}

const Password: React.FC<StringProps> = (props) => {
  const placeholder = props.placeholder;
  return (
    <Input.Password
          bordered
          labelPlaceholder={placeholder}
          color="secondary"
          width='70%'
          />
  )
}

export default Password