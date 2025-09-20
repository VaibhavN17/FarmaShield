import React from 'react';

const alerts=[
  {id:1,level:'High',msg:'Avian Influenza outbreak nearby. Increase hygiene.'},
  {id:2,level:'Medium',msg:'Swine fever vaccination program ongoing.'}
];

function Alerts(){
  return (
    <div className="card">
      <h2>Regional Alerts</h2>
      <div style={{marginTop:12}}>
        {alerts.map(a=> (<div key={a.id} className="alert"><div style={{width:12,height:12,borderRadius:6,background: a.level==='High'? '#ff6b6b':'#f6ad55'}}></div><div style={{marginLeft:8}}><strong>{a.level}</strong>: {a.msg}</div></div>))}
      </div>
    </div>
  );
}

export default Alerts;
