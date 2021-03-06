import React,{useState} from 'react';
import useFetchJobs from './useFetchJobs';
import {Container} from  'react-bootstrap'
import Job from './Job'


function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs,loading,error} = useFetchJobs(params, page)
  return (
    <Container>
   {loading && <h1> loading... </h1>}
   {error && <h1>try refresh</h1>}
   <h1>{jobs.length}</h1>
   {/* {jobs.map(job =>{
     return <Job key={job.id} job= {job}/>
   })} */}
   </Container>
  )
}

export default App;
