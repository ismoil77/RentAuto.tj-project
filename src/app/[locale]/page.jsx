import {useTranslations} from 'next-intl';
 
export default function HomePage() {
    
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
  <select name="" className='text-white' onChange={(e)=>handleChange(e.target.value)} id="">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>
  </>;
}