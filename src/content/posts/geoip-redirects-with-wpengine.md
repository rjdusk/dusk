---
pubDate: 2017-12-04
author: Rhys Jones
title: GeoTarget redi­rects with WP Engine
description: Redi­rect vis­i­tors to your site based by country to a spe­cif­ic page, with WP Engine GeoTarget plugin.

image:
  url: "../../images/journal/cover--fuck-facebook.png"
  alt: "#"

tags: ["wordpress", "tools"]
---
Where I work we host all of our web­sites with WP Engine. They offer com­pelling host­ing plans that do a lot of things right and at a good price. One of the main rea­sons I want­ed to host our web­sites with them was because they man­age the host­ing. As in I don’t need to update Word­press when there is a new release, WP Engine does. On top of that they offer fine­ly tuned servers, CDN’s, stag­ing sites, SSL cer­tifi­cates through Let’s Encrypt and great sup­port. This takes a huge amount of weight off my shoul­ders, as the lone cre­ative man­ag­ing all of our orga­ni­za­tions web­sites. Also peace of mind for the busi­ness units with­in the orga­ni­za­tion. Should any­thing go wrong — like me get­ting hit by a bus — then they still have the sup­port chan­nel through with WP Engine.

One of our busi­ness units had a require­ment to redi­rect all vis­i­tors from the Unit­ed States to a spe­cif­ic page on their web­site. Here the vis­i­tor would be pre­sent­ed with some infor­ma­tion about the cur­rent state of the prod­uct in the US and a form to reg­is­ter their inter­est. This was due to the prod­uct being under FDA review and what claims were allowed to be made with­in the US.

To han­dle this I imple­ment­ed [WP Engines GeoTarget plu­g­in](https://wordpress.org/plugins/wpengine-geoip/){target="_blank" rel="noopener"} (note: this will only work on the Busi­ness or high­er plan) along with the below PHP function.
```php
/** USA GEOIP REDIRECT but allow bots **/
function country_geo_redirect() {
  $country = getenv('HTTP_GEOIP_COUNTRY_CODE');
  $agent = $_SERVER['HTTP_USER_AGENT'];
  $host = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
  if ( $host == 'domain.com/us/' || $host == 'domain.com/feed/' || isset($_SERVER['HTTP_USER_AGENT']) && preg_match('/bot|crawl|slurp|spider/i', $_SERVER['HTTP_USER_AGENT']) || $country != "US" ) {
    return;
  }
  wp_redirect('https://domain.com/us/', 301);
  exit;
}
add_action('init', 'country_geo_redirect');
```
What the above func­tion above does, is checks if the vis­i­tor has request­ed cer­tain pages which we don’t want to restrict access to — in this case, our US land­ing page and the RSS feed. Next we check if they are from out­side the US. Final­ly we check if they are a search bot — because we still want Google and the like to access our site so they can index it. If any of those con­di­tions return true then the vis­i­tor is allowed to access the request­ed page.

How­ev­er if those con­di­tions are not met, then the vis­i­tor is redi­rect­ed to the US land­ing page. This is ini­tial­ized as soon as pos­si­ble from with­in Word­press so the vis­i­tor doesn’t need to down­load addi­tion­al resources.

Result achieved. We are now redi­rect­ing US based vis­i­tors to a ​“reg­is­ter your inter­est” page dur­ing the time the prod­uct is under going FDA review, while still allow­ing Google and oth­er search bots to index our site.

Some side notes — The main rea­son for going with WP Engines GEOIP plu­g­in over oth­er Word­press GEOIP plu­g­ins, is that oth­er plu­g­ins would cause a redi­rect loop. I sus­pect the redi­rect loops occurred because of WP Engines caching tech­nol­o­gy. Also ini­tial­ly I had blocked US vis­i­tors from view­ing the RSS feed. How­ev­er this broke func­tion­al­i­ty with­in MailChimp — who’s servers are based in the US — which would scrape our RSS feed for new blog posts and send out a month­ly news digest.
