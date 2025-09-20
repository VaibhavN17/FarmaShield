import React from 'react';
import { motion } from 'framer-motion';

const items=[
  {t:'Entry Protocol', d:'Visitors must wash hands and change footwear before entering. Keep visitor log.'},
  {t:'Vehicle Control', d:'Limit outside vehicle access. Disinfect vehicle wheels and cargo.'},
  {t:'Isolation', d:'Isolate sick animals immediately.'},
  {t:'Cleaning', d:'Daily cleaning and weekly disinfection of sheds.'},
  {t:'PPE', d:'Use gloves, boots and masks when handling sick animals.'}
];

function Biosecurity(){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="card">
      <h2>Biosecurity Checklist</h2>
      <div style={{marginTop:12}}>
        {items.map((it,i)=> (
          <motion.div key={i} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}} className="accordion-item">
            <div className="accordion-title"><strong>{it.t}</strong></div>
            <div style={{marginTop:8}}>{it.d}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Biosecurity;
