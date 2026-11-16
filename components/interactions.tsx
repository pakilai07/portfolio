'use client';

import { useEffect, useRef, useState } from 'react';
import { experiences } from '@/lib/content';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max <= 0 ? 0 : Math.max(0, Math.min(100, Math.round(window.scrollY / max * 100))));
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div className="reading-progress"><div role="progressbar" aria-label="Page reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="progress-track"><span style={{ width: `${progress}%` }} /></div><span className="progress-number">{progress}%</span></div>;
}

export function ExperienceCarousel() {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  function go(index: number) {
    const next = (index + experiences.length) % experiences.length;
    const element = track.current?.children[next] as HTMLElement | undefined;
    if (element && track.current) track.current.scrollTo({ left: element.offsetLeft - track.current.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <div><div ref={track} className="experience-track" aria-label="Career experience" tabIndex={0} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); go(active + (event.key === 'ArrowRight' ? 1 : -1)); } }} onScroll={() => { if (!track.current) return; const width = track.current.clientWidth; setActive(Math.round(track.current.scrollLeft / width)); }}>
    {experiences.map((experience, index) => <article key={experience.period} className="experience-slide" aria-label={`${index + 1} of ${experiences.length}`}><div className="experience-image" role="img" aria-label="Reserved blank space for an experience image" /><div className="experience-copy"><span className="eyebrow">{experience.period}</span><span className="draft-label">Add your experience</span><h3>{experience.role}</h3><p className="company">{experience.company}</p><p>{experience.description}</p><div className="tags">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}
  </div><div className="carousel-controls"><span className="mono" aria-live="polite">0{active + 1} <span className="muted">/ 0{experiences.length}</span></span><div className="carousel-dots">{experiences.map((_, i) => <button key={i} aria-label={`Show experience ${i + 1}`} aria-current={active === i ? 'true' : undefined} onClick={() => go(i)}><span className={active === i ? 'active' : ''} /></button>)}</div><div className="flex gap-2"><button className="arrow-button" aria-label="Previous experience" onClick={() => go(active - 1)}>←</button><button className="arrow-button" aria-label="Next experience" onClick={() => go(active + 1)}>→</button></div></div></div>;
}
