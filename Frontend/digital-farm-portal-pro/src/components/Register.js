import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Register(){
  const { t } = useTranslation();
  const [form,setForm] = useState({name:'',owner:'',location:'',type:'Poultry',capacity:'',contact:''});
  const [saved,setSaved] = useState(false);

  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    if(!form.name || !form.location || !form.contact){ alert('Please fill required fields'); return; }
    localStorage.setItem('farm_'+Date.now(), JSON.stringify(form));
    setSaved(true); setTimeout(()=>setSaved(false),2500);
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="card">
      <h2>{t('register')}</h2>
      <p className="small">Register your farm to receive local notifications and help during outbreaks.</p>
      <form onSubmit={submit} style={{marginTop:12}}>
        <div className="form-row">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Farm Name" />
          <input name="owner" value={form.owner} onChange={handleChange} placeholder="Owner Name" />
        </div>
        <div className="form-row">
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location (village/district)" />
          <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact (phone or email)" />
        </div>
        <div className="form-row">
          <select name="type" value={form.type} onChange={handleChange}>
            <option>Poultry</option><option>Pig</option><option>Mixed</option>
          </select>
          <input name="capacity" value={form.capacity} onChange={handleChange} placeholder="Capacity (eg: 200 birds)" />
        </div>
        <div style={{display:'flex',gap:10,marginTop:12}}>
          <button className="btn btn-primary" type="submit">{t('register_cta')}</button>
          <button type="button" className="btn" onClick={()=> setForm({name:'',owner:'',location:'',type:'Poultry',capacity:'',contact:''})}>Reset</button>
        </div>
      </form>
      {saved && <div style={{marginTop:12,color:'#096b38',fontWeight:700}}>{t('save_success')}</div>}
    </motion.div>
  );
}

export default Register;
