
import React from 'react';
import Db2v1 from './Db2v1';
import Db2v2 from './Db2v2';
import Db2v3 from './Db2v3';


const Dashboard2 = () => {
  
  return (
    <div className='bg-[#191D33] flex w-full h-[420px] gap-4 p-4'>
     <Db2v1/>
     <Db2v2/>
     <Db2v3/>
    </div>
  )
}

export default Dashboard2
