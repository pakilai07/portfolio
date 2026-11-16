'use client';

import { useEffect, useRef, useState } from 'react';
import { experiences, gallery } from '@/lib/content';

const companySites: Record<string, {url:string; icon:string}> = {JD:{url:'https://www.jd.com/',icon:'jd'},SHEIN:{url:'https://www.shein.com/',icon:'shein'},uCloudlink:{url:'https://www.ucloudlink.com/',icon:'ucloudlink'}};

export function ReadingProgress() {
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
        if (max > 0 && window.scrollY >= max - 2 && eligible.current && !shown.current) {
          shown.current = true; setCelebrate(true); timer = setTimeout(() => setCelebrate(false), 3000);
        }
      });
    };
    update(); const observer = new ResizeObserver(update); observer.observe(document.body);
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { clearTimeout(timer); cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <>{celebrate && <div className="celebration" role="status" aria-label="Celebration"><div className="confetti" aria-hidden="true">{Array.from({length:40},(_,i)=><i key={i} style={{'--x':`${(i*37)%100}vw`,'--rotation':`${i*43}deg`,'--delay':`${i%6*.06}s`,'--color':['#c5ed87','#e8b75e','#f4eee0','#89b8ae'][i%4]} as React.CSSProperties}/>)}</div><span className="confetti-cannon" aria-hidden="true">🎉</span></div>}</>;
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
  return <div><div className="employment-grid">{experiences.map(experience=><article key={experience.company}><h3>{companySites[experience.company] ? <a href={companySites[experience.company].url} target="_blank" rel="noopener noreferrer"><img src={`/icons/${companySites[experience.company].icon}.png`} alt="" width={32} height={32}/>{experience.company}</a> : <span className="freelance-name">{experience.company}</span>}</h3><p className="employment-date">{experience.period || "Dates To Be Added"}</p></article>)}</div><div ref={root} id="work" className="experience-gallery" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(false)}}><div className="gallery-heading"><p className="eyebrow">MY  PORTFOLIO</p><button className="text-link" aria-pressed={paused} onClick={()=>setPaused(p=>!p)}>{paused?'Play Gallery':'Pause Gallery'}</button></div><div className="gallery-grid" onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(active+(event.key==='ArrowRight'?1:-1))}}}>{gallery.map((project,i)=><button key={project.title} className={`gallery-card ${i===active?'is-active':''}`} onClick={()=>go(i)} aria-pressed={i===active} aria-label={`Show experience ${i+1}`}><div className="gallery-image">{project.image ? <img src={project.image} alt={project.title} width={800} height={800}/> : <span className="image-pending">Thumbnail To Be Added</span>}<span className="gallery-marker">0{i+1}</span></div><h3 title={project.title}>{project.title}</h3><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></button>)}</div><div className="carousel-controls"><p className="mono">0{active+1} / 0{gallery.length}</p><p className="gallery-current" aria-live={paused?'polite':'off'}>{gallery[active].title}</p><div className="flex gap-2"><button className="arrow-button" aria-label="Previous experience" onClick={()=>go(active-1)}>←</button><button className="arrow-button" aria-label="Next experience" onClick={()=>go(active+1)}>→</button></div></div></div></div>;
}
