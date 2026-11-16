'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export function ProcessMoment(){const pathname=usePathname();useEffect(()=>{let cancelled=false;let module:{mountAll(root?:Document):unknown;unmountAll(root?:Document):unknown}|undefined;const url='/assets/moments/moments.js';import(/* webpackIgnore: true */ url).then(m=>{module=m;if(!cancelled)m.mountAll(document)});return()=>{cancelled=true;module?.unmountAll(document)}},[pathname]);return null;}
