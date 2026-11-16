'use client';

import { useEffect, useRef, useState } from 'react';
import { experiences, gallery } from '@/lib/content';

const companySites: Record<string, {url:string; icon:string}> = {JD:{url:'https://www.jd.com/',icon:'jd'},SHEIN:{url:'https://www.shein.com/',icon:'shein'},uCloudlink:{url:'https://www.ucloudlink.com/',icon:'ucloudlink'}};

function Paw() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="6" cy="7" rx="2.2" ry="3" transform="rotate(-25 6 7)"/><ellipse cx="11" cy="4.5" rx="2.1" ry="3"/><ellipse cx="16" cy="6" rx="2.1" ry="3" transform="rotate(20 16 6)"/><ellipse cx="20" cy="10" rx="2" ry="2.7" transform="rotate(35 20 10)"/><path d="M6 17c0-3 4-7 7-6s6 5 5 8-4 1-6 1-6 1-6-3Z"/></svg>;
}
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const eligible = useRef(false);
  const shown = useRef(false);
  useEffect(() => {
    // Only the first visit in this browser is eligible, even if it ends before 100%.
    try { eligible.current = !localStorage.getItem('patrick-portfolio-visited'); localStorage.setItem('patrick-portfolio-visited', '1'); }
    catch { eligible.current = true; }
    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = max <= 0 ? 0 : Math.max(0, Math.min(100, Math.round(window.scrollY / max * 100)));
        setProgress(percentage);
        if (max > 0 && window.scrollY >= max - 2 && eligible.current && !shown.current) {
          shown.current = true; setCelebrate(true); timer = setTimeout(() => setCelebrate(false), 3000);
        }
      });
    };
    update(); const observer = new ResizeObserver(update); observer.observe(document.body);
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { clearTimeout(timer); cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <><div className="reading-progress"><div role="progressbar" aria-label="Page reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="paw-track">{Array.from({length:24},(_,i)=><span key={i} className={progress >= (i+1)/24*100 ? 'paw filled' : 'paw'}><Paw /></span>)}</div><span className="progress-number">{progress}%</span></div>{celebrate && <div className="celebration" role="status" aria-label="Celebration"><div className="confetti" aria-hidden="true">{Array.from({length:40},(_,i)=><i key={i} style={{'--x':`${(i*37)%100}vw`,'--rotation':`${i*43}deg`,'--delay':`${i%6*.06}s`,'--color':['#c5ed87','#e8b75e','#f4eee0','#89b8ae'][i%4]} as React.CSSProperties}/>)}</div><span className="confetti-cannon" aria-hidden="true">🎉</span></div>}</>;
}

export function ExperienceCarousel() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const query=matchMedia('(prefers-reduced-motion: reduce)'); const change=()=>setReduced(query.matches);change();query.addEventListener('change',change);
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.2});if(root.current)observer.observe(root.current);
    return ()=>{observer.disconnect();query.removeEventListener('change',change)};
  },[]);
  useEffect(() => { if(!visible||paused||hovered||focused||reduced)return;const timer=setInterval(()=>{if(!document.hidden)setActive(i=>(i+1)%gallery.length)},3000);return()=>clearInterval(timer); },[visible,paused,hovered,focused,reduced]);
  function go(index:number){setActive((index+gallery.length)%gallery.length)}
  return <div><div className="employment-grid">{experiences.map(experience=><article key={experience.company}><h3>{companySites[experience.company] ? <a href={companySites[experience.company].url} target="_blank" rel="noopener noreferrer"><img src={`/icons/${companySites[experience.company].icon}.png`} alt="" width={32} height={32}/>{experience.company}<span>↗</span></a> : <span className="freelance-name"><span aria-hidden="true">↗</span>{experience.company}</span>}</h3></article>)}</div><div ref={root} id="work" className="experience-gallery" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(false)}}><div className="gallery-heading"><p className="eyebrow">FROM MY UPWORK PORTFOLIO</p><button className="text-link" aria-pressed={paused} onClick={()=>setPaused(p=>!p)}>{paused?'Play Gallery':'Pause Gallery'}</button></div><div className="gallery-grid" onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(active+(event.key==='ArrowRight'?1:-1))}}}>{gallery.map((project,i)=><button key={project.title} className={`gallery-card ${i===active?'is-active':''}`} onClick={()=>go(i)} aria-pressed={i===active} aria-label={`Show experience ${i+1}`}><div className="gallery-image">{project.image ? <img src={project.image} alt={project.title} width={800} height={800}/> : <span className="image-pending">Thumbnail To Be Added</span>}<span className="gallery-marker">0{i+1}</span></div><h3>{project.title}</h3><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></button>)}</div><div className="carousel-controls"><p className="mono">0{active+1} / 0{gallery.length}</p><p className="gallery-current" aria-live={paused?'polite':'off'}>{gallery[active].title}</p><div className="flex gap-2"><button className="arrow-button" aria-label="Previous experience" onClick={()=>go(active-1)}>←</button><button className="arrow-button" aria-label="Next experience" onClick={()=>go(active+1)}>→</button></div></div></div></div>;
}
