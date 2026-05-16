const axios = require('axios');
const cheerio = require('cheerio');

const url = (number) =>{
    return `https://anikototv.to/ajax/episode/list/${number}?vrf=`
}

const headers = {
  "authority": "anikototv.to",
  "accept": "application/json, text/javascript, */*; q=0.01",
  "accept-language": "en-US,en;q=0.8",
  "cache-control": "no-cache",
  "cookie": "country_code=US",
  "pragma": "no-cache",
  "referer": "https://anikototv.to/",
  "sec-ch-ua": '"Not:A-Brand";v="99", "Brave";v="145", "Chromium";v="145"',
  "sec-ch-ua-mobile": "?1",
  "sec-ch-ua-platform": '"Android"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "sec-gpc": "1",
  "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Mobile Safari/537.36",
  "x-requested-with": "XMLHttpRequest"
};

async function getEpisodes(number) {
  try {
    const response = await axios.get(url(number), { headers });
    
    const $ = cheerio.load(response.data.result || response.data);

    const episodes = [];

    $('li').each((i, el) => {
      const title = $(el).attr('title');
      const $a = $(el).find('a');
      
      if ($a.length) {
        episodes.push({
          num: $a.attr('data-num'),
          malid: $a.attr('data-mal'),
          title: title || $a.text().trim(),
          data_id: $a.attr('data-id'),
          slug: $a.attr('data-slug'),
          timestamp: $a.attr('data-timestamp')
        });
      }
    });

    // bruh
   // console.log(`Total Episodes Found: ${episodes.length}`);
   // console.dir(episodes, { depth: null });

 

    return episodes;

  } catch (error) {
    console.error("Error:", error.message);
  }
}


module.exports = getEpisodes;