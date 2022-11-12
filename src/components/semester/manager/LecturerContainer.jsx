import { useState } from 'react';
import LecturerList from './LecturerList';
import InforModal from '../InforModal';

const LecturerContainer = ({admin, semester}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedLecturer, setSelectedLecturer] = useState({});

  const handleSelect = (id, name, email) => {
    setSelectedLecturer({id, name, email})
    setIsSelected(true);
  }

  console.log(selectedLecturer)

  return (
    <>
      <LecturerList handleSelect={handleSelect} admin={admin}/>
      <InforModal isSelected={isSelected} setIsSelected={setIsSelected} semester={semester}
        selectedLecturer={selectedLecturer} admin={admin}/>
    </>
  )
}

export default LecturerContainer
