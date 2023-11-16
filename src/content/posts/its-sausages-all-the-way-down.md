---
pubDate: 2014-06-06
author: Rhys Jones
title: It’s sausages all the way down
description: Prevent hotlinking of your images and replace the image with some yummy sausages, lovely!

image:
  url: "../../images/journal/cover--fuck-facebook.png"
  alt: "#"

tags: ["wordpress", "tools"]
---
I work for a biotech­nol­o­gy com­pa­ny in very north­ern Nor­way look­ing after all of their graph­ic design and web devel­op­ment needs. It’s a ful­fill­ing job as I do not have a sci­en­tif­ic back­ground and am con­stant­ly chal­lenged to find new and inter­est­ing ways to inter­pret the data that is pro­duced by our scientists.

One of my tech­niques is to pro­duce sim­ple work­flows of rather com­plex and con­fus­ing sci­en­tif­ic pro­to­cols. These work­flows are usu­al only 3 steps and get right to the crux of the pro­to­col, they’re rather nice and quite sim­ple. So nice in fact that I have noticed oth­er com­pet­ing com­pa­nies direct­ly embed­ding and link­ing to these images.

Ini­tial­ly I was pissed off. There is a lot of hours put into these rather sim­ple look­ing work­flows. Lots of con­sult­ing with the sci­en­tists to make sure I under­stood their pro­to­col cor­rect­ly, that every­thing makes sense and there are no con­flict­ing mes­sages present through out the work­flow. I went for a walk to cool off and it dawned on me… these bas­tards are hot-link­ing to our images, I can have some fun and mess with them!

[.htac­cess to the rescue](https://simple.wikipedia.org/wiki/.htaccess)

``` apacheconf
# Prevent image hot-linking #
RewriteEngine on
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?domain.com [NC]
RewriteRule \.(jpg|jpeg|png|gif|bmp)$ http://i.imgur.com/WP7x9BX.jpg [NC,R,L]
```

What the above 4 lines of code do is check the HTTP_REFERER of the image request and if it’s not (www.)domain.com we send the web­page an image of sausages instead. Specif­i­cal­ly these rather deli­cious look­ing lamb sausages.

What result­ed next was hilar­i­ous and had the desired effect. The offend­ing web­site was now dis­play­ing these sausages through­out all of their prod­uct pages that once had my beau­ti­ful work­flow images.

Over the course of the next two weeks I mon­i­tored the offend­ing web­site, ful­ly expect­ing them to update all of their image links with­in the first 24 hours of this hap­pen­ing. It took them 14 days… that’s 10 whole busi­ness days. That’s poten­tial cus­tomers com­ing to your web­site and see­ing sausages instead of pret­ty images of work­flows and enzymes. Talk about hav­ing egg on your face! Still, result achieved.

One unin­ten­tion­al side effect of what I have now coined the ​“sausage script”, is a lot of our dis­trib­u­tors have also been hot-link­ing to our images. When this script went live it left a lot of them scram­bling as to what was going on, why were all of their prod­uct pages pol­lut­ed with these deli­cious, mouth water­ing sausages.

Some have fixed their erro­neous ways while some have not. I think we might add a ​“sausage script” clause into our dis­trib­u­tor agreements.
