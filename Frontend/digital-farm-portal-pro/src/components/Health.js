import React, {useState} from 'react';

function Health(){
  const [records,setRecords] = useState([]);
  const [animal,setAnimal] = useState('');
  const [vaccine,setVaccine] = useState('');

  const add = ()=>{ if(!animal || !vaccine) return alert('Enter both'); setRecords([{id:Date.now(),animal,vaccine},...records]); setAnimal(''); setVaccine(''); };
  const remove = id => setRecords(records.filter(r=>r.id!==id));

  return (
    <div className="card">
      <h2>Health Records</h2>
      <p className="small">Keep vaccination history for quick reference.</p>
      <div style={{marginTop:12}} className="form-row">
        <input placeholder="Animal ID / Tag" value={animal} onChange={e=>setAnimal(e.target.value)} />
        <input placeholder="Vaccine or Note" value={vaccine} onChange={e=>setVaccine(e.target.value)} />
        <button className="btn btn-primary" onClick={add}>Add</button>
      </div>
      <table className="table" style={{marginTop:12}}>
        <thead><tr><th>Animal</th><th>Details</th><th>Action</th></tr></thead>
        <tbody>{records.map(r=> (<tr key={r.id}><td>{r.animal}</td><td>{r.vaccine}</td><td><button className="btn" onClick={()=>remove(r.id)}>Delete</button></td></tr>))}</tbody>
      </table>
    </div>
  );
}

export default Health;
