'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
export function Analytics() {
 const pathname=usePathname();
 const [production,setProduction]=useState(false);
 useEffect(()=>setProduction(window.location.hostname==='portfolio.patricklai.workers.dev'),[]);
 useEffect(()=>{
  if(process.env.NEXT_PUBLIC_ENABLE_EVENTS==='false'||(window.location.hostname!=='portfolio.patricklai.workers.dev'&&process.env.NEXT_PUBLIC_ENABLE_EVENTS!=='true'))return;
  const send=(event:string,project?:string)=>{if(navigator.doNotTrack==='1')return;navigator.sendBeacon('/api/events',new Blob([JSON.stringify({event,path:pathname,project})],{type:'application/json'}));};
  send(pathname.includes('/projects/')?'project_view':'portfolio_visit');
  const click=(e:MouseEvent)=>{const target=e.target instanceof Element?e.target.closest('a[data-track]'):null;if(target){const kind=target.getAttribute('data-track');if(kind==='upwork_click'||kind==='demo_click')send(kind,target.getAttribute('data-project')||undefined);}};
  document.addEventListener('click',click);return()=>document.removeEventListener('click',click);
 },[pathname]);return production ? <Script src="https://static.cloudflareinsights.com/beacon.min.js" strategy="afterInteractive" data-cf-beacon={JSON.stringify({token:process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN || "c4e8d1e8ac5c4ea5bb2453c26afb8843"})}/> : null;
}
