import { load } from 'cheerio';

export const extract = (html: string): string[] => {
  if (html === '') return [];

  const $ = load(html);
  const crawledRealtimeKeywords = $(
    'img',
  );

  const keywords: string[] = 
    $(crawledRealtimeKeywords)
    .map((i, ele): string => {
      return `:${$(ele).attr('src')}`;
    })
    .get();

  return keywords;
};