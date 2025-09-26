'use client'
import SectionHome from '@/components/section1'
import SectionCatalog from '@/components/section2.jsx/section2'
import {useTranslations} from 'next-intl';
import { usePathname, useRouter } from 'next/navigation'
 
export default function HomePage() {
      const router = useRouter();
  const pathname = usePathname();
    const handleChange = (newLocale) => {
    
    const segments = pathname.split("/");
    if (segments[1] && segments[1].length === 2) {
      segments[1] = newLocale;
    } else {
      segments.unshift("", newLocale);
    }
    router.push(segments.join("/"));
  };

  const t = useTranslations('HomePage');
  return <>
  
  <h1>{t('title')}</h1>
  <select name="" className='' onChange={(e)=>handleChange(e.target.value)} id="">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>
  <SectionHome/>
  <SectionCatalog/>

  </>;
}