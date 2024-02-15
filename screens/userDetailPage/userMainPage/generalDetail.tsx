import React from 'react'
import PersonalInfo from '../sections/PersonalInfo'
import Socials from '../sections/Socials'
import EducationNEmployment from '../sections/Education&Employment'
import Guarantor from '../sections/Guarantor'
import OtherVitals from '../sections/OtherVitals'
import { User } from '../../../interfaces'

  const GeneralDetails: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  return (
    <div>
      < PersonalInfo userDetails={userDetails} />
      <EducationNEmployment userDetails={userDetails}/>
      <Socials userDetails={userDetails}/>
      <Guarantor userDetails={userDetails}/>
      <OtherVitals userDetails={userDetails}/>
    </div>
  )
}

export default GeneralDetails
