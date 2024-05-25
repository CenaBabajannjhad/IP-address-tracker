import React from 'react'
import TableTitle from './Table_Title'
import TableResult from './Table_Result'


const Information_Table = () => {
  
  let tableTatleStatic = ['ip address' , 'location' , 'timezone' , 'isp'];

  let informations = {
    id : 1,
    IP : '192.168.52.80',
    location : 'Broklyn , NY 10001',
    timezone : "utc -05:00",
    isp : "spaceX starlink"
  };

  return (
    <main className='absolute left-6 right-6 z-50 bg-white mt-6 pb-5 rounded-xl text-center shadow-lg'>

      <section className='pt-5'>
        <TableTitle title={tableTatleStatic[0]}></TableTitle>
        <TableResult result={informations.IP}></TableResult>
      </section>

      <section className='pt-5'>
        <TableTitle title={tableTatleStatic[1]}></TableTitle>
        <TableResult result={informations.location}></TableResult>
      </section>

      <section className='pt-5'>
        <TableTitle title={tableTatleStatic[2]}></TableTitle>
        <TableResult result={informations.timezone}></TableResult>
      </section>

      <section className='pt-5'>
        <TableTitle title={tableTatleStatic[3]}></TableTitle>
        <TableResult result={informations.isp}></TableResult>
      </section>

    
    </main>
  )
}

export default Information_Table
