import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ProjectDetail } from '@/components/project-detail';
export const dynamicParams = false;
export function generateStaticParams(){return projects.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:`${p?.title || 'Project'} | Patrick Lai`,description:p?.overview,openGraph:{title:p?.title,description:p?.overview}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();return <ProjectDetail project={project}/>;}
