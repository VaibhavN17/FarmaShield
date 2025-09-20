import React from 'react';

function Guidelines(){
  const docs=[
    {t:'Vaccination Schedule', d:'Follow the recommended schedule and record dates.'},
    {t:'Sanitation', d:'Ensure clean water, remove waste regularly.'},
    {t:'Outbreak Response', d:'Isolate sick animals and inform authorities.'}
  ];
  return (
    <div className="card">
      <h2>Guidelines & Training</h2>
      <div style={{marginTop:12}}>{docs.map((d,i)=>(<div key={i} className="accordion-item"><div className="accordion-title"><strong>{d.t}</strong></div><div style={{marginTop:8}}>{d.d}</div></div>))}</div>
    </div>
  );
}

export default Guidelines;
