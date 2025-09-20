import React from 'react';

function Monitoring(){
  const farms=[{name:'Green Acres',type:'Poultry',loc:'Village A',status:'OK'},{name:'Sunrise Pigs',type:'Pig',loc:'Village B',status:'Alert'}];
  return (
    <div className="card">
      <h2>Monitoring</h2>
      <table className="table" style={{marginTop:12}}>
        <thead><tr><th>Farm</th><th>Type</th><th>Location</th><th>Status</th></tr></thead>
        <tbody>{farms.map((f,i)=>(<tr key={i}><td>{f.name}</td><td>{f.type}</td><td>{f.loc}</td><td>{f.status}</td></tr>))}</tbody>
      </table>
    </div>
  );
}

export default Monitoring;
