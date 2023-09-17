import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function useFetchUserPersonalDetails() {
    const {user} = useSelector(state => state.auth);
    const [fetchedPersonalDetails, setFetchedPersonalDetails] = useState({});
    
  return 
}

export default useFetchUserPersonalDetails