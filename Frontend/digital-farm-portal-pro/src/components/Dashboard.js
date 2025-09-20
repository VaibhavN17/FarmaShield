import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  {name:'Jan', farms:10, vacc:120},
  {name:'Feb', farms:20, vacc:320},
  {name:'Mar', farms:35, vacc:520},
  {name:'Apr', farms:50, vacc:920},
  {name:'May', farms:68, vacc:1200},
];

const pie = [{name:'Healthy', value:70},{name:'Watch', value:20},{name:'Risk', value:10}];
const COLORS = ['#2d9a6a','#f6ad55','#ff6b6b'];

function Dashboard(){
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let start=0; const end=128; const dur=1000; const step=Math.ceil(end/40);
    const iv=setInterval(()=>{ start+=step; if(start>=end){ setCount(end); clearInterval(iv);} else setCount(start); }, dur/40);
    return ()=> clearInterval(iv);
  },[]);

  const speak = (text) => {
    if(!window.speechSynthesis) return alert('Speech not supported in this browser');
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = i18n.language === 'hi' ? 'hi-IN' : (i18n.language === 'mr' ? 'mr-IN' : 'en-US');
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
      <div className="grid">
        <div className="card">
          <div className="hero">
            <div>
              <h1 style={{margin:0}}>{t('title')}</h1>
              <div className="small" style={{marginTop:6}}>{t('subtitle')}</div>
              <div style={{marginTop:12}}><button className="btn btn-primary">{t('register_cta')}</button></div>
            </div>
            <div style={{width:320}} className="card">
              <h3>{t('farm_health_score')}</h3>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{flex:1}}>
                  <div className="counter">{count}</div>
                  <div className="small">{t('registered_farms')}</div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/farm.svg'} alt="farm" style={{width:84,height:84}} />
              </div>
            </div>
          </div>

          <div style={{marginTop:16}} className="card">
            <h3>{t('recent_alerts')}</h3>
            <div style={{display:'flex',gap:12,alignItems:'center',marginTop:10}}>
              <img src={process.env.PUBLIC_URL + '/assets/chicken.svg'} alt="chicken" style={{width:80}}/>
              <div>
                <div style={{fontWeight:800}}>Avian Influenza</div>
                <div className="small">Reported in nearby area. Increase biosecurity.</div>
                <div style={{marginTop:8}}>
                  <button className="btn" onClick={()=>speak('Avian Influenza reported nearby. Increase hygiene and isolate sick birds.')}>{t('tts_play')}</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <h3 style={{marginBottom:8}}>Vaccination trend</h3>
            <div style={{width:'100%',height:260}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="vacc" stroke="#2d9a6a" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Health Distribution</h3>
          <div style={{width:'100%',height:220}}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pie} dataKey="value" innerRadius={40} outerRadius={80}>
                  {pie.map((entry, idx)=>(<Cell key={idx} fill={COLORS[idx%COLORS.length]} />))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{marginTop:14}} className="card-image">
            <img src={process.env.PUBLIC_URL + '/assets/pig.svg'} alt="pig"/>
            <div>
              <div style={{fontWeight:800}}>Interactive Actions</div>
              <div className="small">Click cards to expand details and hear alerts.</div>
              <div style={{marginTop:10}} className="chips">
                <div className="chip">Register Farm</div>
                <div className="chip">Send Alert</div>
                <div className="chip">Export Report</div>
              </div>
            </div>
          </div>

          <div style={{marginTop:12}} className="small">Pro tip: Switch language to show judges regional support.</div>
        </div>
      </div>

      <div className="footer">Made for Hackathon • Multilingual • Interactive</div>
    </motion.div>
  );
}

export default Dashboard;
