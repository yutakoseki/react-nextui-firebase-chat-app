import React from 'react'
import EditProfileUI from './EditProfileUI';

const EditProfile = () => {
    const onClickButton = (value: boolean) => {
        if(value){
            console.log("EditProfile");
        }
    }

  return (
    <><EditProfileUI onClickButton={onClickButton}/></>
  )
}

export default EditProfile