

import  { useParans } from 'react-router-dom';
import { useState, useEffect } from 'react'; 


const EventDetailsPage = () => {
   const { id } = useParams(); 
   const [ event , setEvent ] = useState(null);
    const [ error , setError ] = useState('');
     const [ loading, setLoading ] = useState(true);

     useEffect (() => {
      
    
     }, [])




  return (
    <div>
      
    </div>
  )
}

export default EventDetailsPage


  
