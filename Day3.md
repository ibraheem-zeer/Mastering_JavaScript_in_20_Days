# Quiz project
```
<!DOCTYPE html>
<!-- saved from url=(0063)https://anjana.dev/javascript-first-steps/2-jsquiz-starter.html -->
<html lang="en-US">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>Quiz.js</title>
    <style>
        body {
            margin: 1rem auto;
            padding: 3rem;
            font-family: sans-serif;
        }
        
        header {
            width: 50%;
            margin: 1em auto;
        }
        
        main {
            min-width: 25rem;
            max-width: 50%;
            margin: 0px auto;
            display: flex;
            flex-direction: column;
        }
        
        #statement {
            border: 1px solid black;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px gray;
            padding: 1rem;
            font-size: x-large;
            text-align: center;
            margin: 1rem 0px;
            min-height: 2em;
        }
        
        #explanation {
            padding: 1rem;
            text-align: center;
        }
        
        #options {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        
        button {
            padding: 0.5rem;
            font-size: medium;
            border-radius: 5px;
        }
        
        .correct {
            background-color: lightgreen;
        }
        
        .incorrect {
            background-color: lightpink;
        }
    </style>
    <style type="text/css" id="operaUserStyle">
        video {
            filter: -opera-shader(url(data:text/plain;base64,dW5pZm9ybSBzaGFkZXIgaUNodW5rOwp1bmlmb3JtIGZsb2F0MiBpQ2h1bmtTaXplOwoKY29uc3QgZmxvYXQgVEhSRVNIT0xEX0FSRUEgPSA4MDAgKiA2MDA7CmNvbnN0IGZsb2F0IE1JTl9BUkVBID0gNDAwICogMTAwOwpjb25zdCBmbG9hdCBNSU5fU1RSSVAgPSAyMDsKY29uc3QgZmxvYXQgTUFSR0lOID0gMTsKCmhhbGYzIHBpeGVsKGNvbnN0IGludCB4LCBjb25zdCBpbnQgeSwgaW4gaGFsZjIgeHkpCnsKCXJldHVybiBpQ2h1bmsuZXZhbCh4eSArIGhhbGYyKHgsIHkpKS5yZ2I7Cn0gIAoKaGFsZjMgUkdYKGhhbGYyIHh5KXsKCWhhbGYzIGYgPQoJcGl4ZWwoLTEsLTEsIHh5KSAqICAxLiArICAgICAgICAgICAgICAgICAgICAgCglwaXhlbCggMCwtMSwgeHkpICogLTEuICsgICAgICAgICAgICAgICAgICAgIAoJcGl4ZWwoIDEsLTEsIHh5KSAqICAxLiArCgkKCXBpeGVsKC0xLCAwLCB4eSkgKiAtMS4gKyAgICAgICAgICAgICAgICAgICAgCglwaXhlbCggMCwgMCwgeHkpICogLTIuICsgICAgICAgICAgICAgICAgICAgICAKCXBpeGVsKCAxLCAwLCB4eSkgKiAtMS4gKyAgICAgICAgICAgICAgICAgICAgIAoJCglwaXhlbCgtMSwgMSwgeHkpICogIDEuICsgICAgICAgICAgICAgICAgICAgICAKCXBpeGVsKCAwLCAxLCB4eSkgKiAtMS4gKyAgICAgICAgICAgICAgICAgICAgIAoJcGl4ZWwoIDEsIDEsIHh5KSAqICAxLgoJOwoJcmV0dXJuIGYgLyAtMjsKfQoKaGFsZjMgUkdYTW9yZShoYWxmMiB4eSl7CgloYWxmMyBmID0KCXBpeGVsKC0xLC0xLCB4eSkgKiAgMS4gKyAgICAgICAgICAgICAgICAgICAgIAoJcGl4ZWwoIDAsLTEsIHh5KSAqIC0xLiArICAgICAgICAgICAgICAgICAgICAKCXBpeGVsKCAxLC0xLCB4eSkgKiAgMS4gKwoJCglwaXhlbCgtMSwgMCwgeHkpICogLTEuICsgICAgICAgICAgICAgICAgICAgIAoJcGl4ZWwoIDAsIDAsIHh5KSAqIC0xLiArICAgICAgICAgICAgICAgICAgICAgCglwaXhlbCggMSwgMCwgeHkpICogLTEuICsgICAgICAgICAgICAgICAgICAgICAKCQoJcGl4ZWwoLTEsIDEsIHh5KSAqICAxLiArICAgICAgICAgICAgICAgICAgICAgCglwaXhlbCggMCwgMSwgeHkpICogLTEuICsgICAgICAgICAgICAgICAgICAgICAKCXBpeGVsKCAxLCAxLCB4eSkgKiAgMS4gCgk7CglyZXR1cm4gZiAvIC0xOwp9CgoKaGFsZjQgbWFpbihmbG9hdDIgeHkpCnsKCWhhbGY0IGNvbG9yID0gaUNodW5rLmV2YWwoeHkpOwoJCglpZiAoY29sb3IuYSA8IDEpIHsKCQlyZXR1cm4gY29sb3I7Cgl9CgkKCWlmIChpQ2h1bmtTaXplLnggKiBpQ2h1bmtTaXplLnkgPCBNSU5fQVJFQSkgewoJCXJldHVybiBjb2xvcjsKCX0KCglpZiAoaUNodW5rU2l6ZS55IDwgTUlOX1NUUklQIHx8IGlDaHVua1NpemUueCA8IE1JTl9TVFJJUCkgewoJCXJldHVybiBjb2xvcjsKCX0KCglpZiAoeHkueCA8IE1BUkdJTiB8fCB4eS54ID4gKGlDaHVua1NpemUueCAtIE1BUkdJTikgfHwKCSAgICB4eS55IDwgTUFSR0lOIHx8IHh5LnkgPiAoaUNodW5rU2l6ZS55IC0gTUFSR0lOKSkgewogICAgCXJldHVybiBjb2xvcjsgICAgCiAgICB9CgkKCWlmIChpQ2h1bmtTaXplLnggKiBpQ2h1bmtTaXplLnkgPiBUSFJFU0hPTERfQVJFQSkgewoJCWNvbG9yID0gaGFsZjQoUkdYTW9yZSh4eSksIDEpOwoJfSBlbHNlIHsKCQljb2xvciA9IGhhbGY0KFJHWCh4eSksIDEpOwoJfQoKCXJldHVybiBjb2xvcjsKfQo=));
        }
    </style>
    <style type="text/css">
         :root zeus-ad,
         :root topadblock,
         :root span[id^="ezoic-pub-ad-placeholder-"],
         :root guj-ad,
         :root gpt-ad,
         :root div[id^="zergnet-widget"],
         :root div[id^="yandex_ad"],
         :root div[id^="vuukle-ad-"],
         :root div[id^="sticky_ad_"],
         :root div[id^="rc-widget-"],
         :root div[id^="gpt_ad_"],
         :root div[id^="ezoic-pub-ad-"],
         :root div[id^="div-gpt-"],
         :root div[id^="dfp-ad-"],
         :root div[id^="advads_ad_"],
         :root div[id^="adspot-"],
         :root div[id^="ads300_250-widget-"],
         :root div[id^="ads300_100-widget-"],
         :root div[id^="ads250_250-widget-"],
         :root div[id^="adrotate_widgets-"],
         :root div[id^="_vdo_ads_player_ai_"],
         :root div[id*="ScriptRoot"],
         :root div[id*="MarketGid"],
         :root div[data-native_ad],
         :root div[data-mini-ad-unit],
         :root div[data-insertion],
         :root div[data-id-advertdfpconf],
         :root div[data-google-query-id],
         :root hl-adsense,
         :root div[data-contentexchange-widget],
         :root div[data-content="Advertisement"],
         :root div[data-alias="300x250 Ad 2"],
         :root div[data-alias="300x250 Ad 1"],
         :root div[data-adzone],
         :root div[data-adunit-path],
         :root div[data-ad-wrapper],
         :root div[data-ad-targeting],
         :root div[data-ad-placeholder],
         :root div[class^="native-ad-"],
         :root div[data-dfp-id],
         :root div[class^="kiwi-ad-wrapper"],
         :root div[class^="Adstyled__AdWrapper-"],
         :root div[aria-label="Ads"],
         :root display-ads,
         :root display-ad-component,
         :root bottomadblock,
         :root atf-ad-slot,
         :root aside[id^="adrotate_widgets-"],
         :root article.ad,
         :root ark-top-ad,
         :root app-advertisement,
         :root app-ad,
         :root amp-fx-flying-carpet,
         :root amp-embed[type="taboola"],
         :root amp-connatix-player,
         :root amp-ad-custom,
         :root ad-shield-ads,
         :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"]+.ob_source,
         :root citrus-ad-wrapper,
         :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"],
         :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"]+.ob_source,
         :root a[href^="https://yogacomplyfuel.com/"],
         :root a[href^="https://www.sugarinstant.com/?partner_id="],
         :root a[href^="https://www.purevpn.com/"][href*="&utm_source=aff-"],
         :root a[href^="https://www.privateinternetaccess.com/"]>img,
         :root a[href^="https://www.onlineusershielder.com/"],
         :root a[href^="https://www.nutaku.net/signup/landing/"],
         :root a[href^="https://www.nudeidols.com/cams/"],
         :root a[href^="https://www.mypornstarcams.com/landing/click/"],
         :root a[href^="https://www.kingsoffetish.com/tour?partner_id="],
         :root a[href^="https://www.infowarsstore.com/"]>img,
         :root a[href^="https://t.grtyi.com/"],
         :root a[href^="https://www.highperformancecpmgate.com/"],
         :root a[href^="https://www.highcpmrevenuenetwork.com/"],
         :root a[href^="https://www.get-express-vpn.com/offer/"],
         :root a[href^="https://www.financeads.net/tc.php?"],
         :root a[href^="https://www.brazzersnetwork.com/landing/"],
         :root div[class^="Display_displayAd"],
         :root a[href^="https://www.sheetmusicplus.com/?aff_id="],
         :root a[href^="https://www.bang.com/?aff="],
         :root [data-template-type="nativead"],
         :root a[href^="https://www.adultempire.com/"][href*="?partner_id="],
         :root a[href^="https://webroutetrk.com/"],
         :root a[href^="https://twinrdsyn.com/"],
         :root a[href^="https://tsartech.g2afse.com/"],
         :root [href^="https://www.mypatriotsupply.com/"]>img,
         :root a[href^="https://trk.softonixs.xyz/"],
         :root a[href^="https://trk.nfl-online-streams.club/"],
         :root a[href^="https://tracking.avapartner.com/"],
         :root a[href^="https://track.wg-aff.com"],
         :root a[href^="https://track.afcpatrk.com/"],
         :root a[href^="https://torguard.net/aff.php"]>img,
         :root div[data-adname],
         :root a[href^="https://thechleads.pro/"],
         :root [data-role="tile-ads-module"],
         :root a[href^="https://adsrv4k.com/"],
         :root a[href^="https://go.xlviirdr.com"],
         :root a[href^="https://thaudray.com/"],
         :root a[href^="https://www.5mno3.com/"],
         :root a[href^="https://taghaugh.com/"],
         :root a[href^="https://click.candyoffers.com/"],
         :root [href^="https://zstacklife.com/"] img,
         :root a[href^="https://t.aslnk.link/"],
         :root a[href^="https://t.adating.link/"],
         :root a[href^="https://go.trackitalltheway.com/"],
         :root [href^="https://track.fiverr.com/visit/"]>img,
         :root a[href^="https://syndication.exoclick.com/"],
         :root a[href^="https://syndication.dynsrvtbg.com/"],
         :root a[href^="https://streamate.com/landing/click/"],
         :root a[href^="https://ad.doubleclick.net/"],
         :root a[href^="https://static.fleshlight.com/images/banners/"],
         :root a[href^="https://aweptjmp.com/"],
         :root a[href^="https://s.zlinkc.com/"],
         :root a[href^="https://www.mrskin.com/account/"],
         :root a[href^="https://s.optzsrv.com/"],
         :root a[data-obtrack^="http://paid.outbrain.com/network/redir?"],
         :root a[href^="https://reinstandpointdumbest.com/"],
         :root a[href^="https://go.strpjmp.com/"],
         :root a[href^="https://refpa4903566.top/"],
         :root a[href^="https://pubads.g.doubleclick.net/"],
         :root a[href^="https://prf.hn/click/"][href*="/camref:"]>img,
         :root a[href^="https://serve.awmdelivery.com/"],
         :root a[href^="https://prf.hn/click/"][href*="/adref:"]>img,
         :root [href^="https://r.kraken.com/"],
         :root a[href^="https://mmwebhandler.aff-online.com/"],
         :root a[href^="https://www.bet365.com/"][href*="affiliate="],
         :root a[href^="https://pb-track.com/"],
         :root a[href^="https://paid.outbrain.com/network/redir?"],
         :root ps-connatix-module,
         :root div[id^="ad_position_"],
         :root a[href^="https://ovb.im/"],
         :root div[id^="ad-div-"],
         :root a[href^="https://newbinotracs.com/"],
         :root a[href^="https://natour.naughtyamerica.com/track/"],
         :root [href^="https://stvkr.com/"],
         :root a[href^="https://mediaserver.entainpartners.com/renderBanner.do?"],
         :root [href^="https://www.herbanomic.com/"]>img,
         :root a[href^="https://maymooth-stopic.com/"],
         :root a[href^="https://loboclick.com"],
         :root [href^="https://routewebtk.com/"],
         :root a[href^="https://see.kmisln.com/"],
         :root .nya-slot[style],
         :root a[href^="https://a.bestcontentweb.top/"],
         :root a[href^="https://lobimax.com/"],
         :root a[href^="https://lead1.pl/"],
         :root a[href^="https://refpa.top/"],
         :root a[href^="https://landing.brazzersnetwork.com/"],
         :root a[href^="https://safesurfingtoday.com/"][href*="?skip="],
         :root a[href^="https://ads.leovegas.com/redirect.aspx?"],
         :root a[href^="https://land.brazzersnetwork.com/landing/"],
         :root a[href^="https://track.adform.net/"],
         :root [data-css-class="dfp-inarticle"],
         :root .card-captioned.crd>.crd--cnt>.s2nPlayer,
         :root a[href^="https://go.tmrjmp.com"],
         :root a[href^="https://l.hyenadata.com/"],
         :root a[href^="https://juicyads.in/"],
         :root a[href^="https://mediaserver.gvcaffiliates.com/renderBanner.do?"],
         :root a[href^="https://join.dreamsexworld.com/"],
         :root a[href^="https://itubego.com/video-downloader/?affid="],
         :root a[href^="https://iqbroker.com/"][href*="?aff="],
         :root a[href^="https://incisivetrk.cvtr.io/click?"],
         :root [data-revive-zoneid],
         :root a[href^="https://googleads.g.doubleclick.net/pcs/click"],
         :root a[href^="https://clk.wrenchsound.store/"],
         :root a[href^="https://go.zybrdr.com"],
         :root [href^="http://join.michelle-austin.com/"],
         :root [class^="tile-picker__CitrusBannerContainer-sc-"],
         :root a[href^="https://go.xxxiijmp.com"],
         :root a[href^="https://go.xtbaffiliates.com/"],
         :root a[href^="https://ismlks.com/"],
         :root a[href^="//a.bestcontentfare.top/"],
         :root [href^="https://www.mypillow.com/"]>img,
         :root a[href^="https://azpresearch.club/"],
         :root a[href^="https://go.xlirdr.com"],
         :root a[href^="https://go.skinstrip.net"][href*="?campaignId="],
         :root a[href^="https://go.markets.com/visit/?bta="],
         :root a[href^="https://billing.purevpn.com/aff.php"]>img,
         :root a[href^="https://go.hpyrdr.com/"],
         :root a[href^="https://go.goaserv.com/"],
         :root a[href^="https://go.dmzjmp.com"],
         :root a[href^="https://twinrdsrv.com/"],
         :root a[href^="https://go.admjmp.com/"],
         :root [href^="https://kingered-banctours.com/"],
         :root a[href^="https://get.surfshark.net/aff_c?"][href*="&aff_id="]>img,
         :root a-ad,
         :root a[href^="https://affiliate.rusvpn.com/click.php?"],
         :root a[href^="https://geniusdexchange.com/"],
         :root a[href^="https://frameworkdeserve.com/"],
         :root a[href^="https://flirtandsweets.life/"],
         :root a[href^="https://www.mrskin.com/tour"],
         :root a[href^="https://financeads.net/tc.php?"],
         :root [data-freestar-ad],
         :root a[href^="https://fc.lc/ref/"],
         :root div[data-native-ad],
         :root a[href^="https://engine.trackingdesks.com/"],
         :root [href^="https://totlnkcl.com/"],
         :root a[href^="https://www.adskeeper.com"],
         :root a[data-redirect^="https://paid.outbrain.com/network/redir?"],
         :root [href^="https://www.reimageplus.com/"],
         :root a[href^="https://engine.phn.doublepimp.com/"],
         :root a[href^="https://engine.blueistheneworanges.com/"],
         :root div[id^="optidigital-adslot"],
         :root a[href^="https://wantopticalfreelance.com/"],
         :root a[href^="https://dl-protect.net/"],
         :root a[href^="https://datingoffers30.info/"],
         :root a[href^="https://clixtrac.com/"],
         :root a[href^="https://click.linksynergy.com/fs-bin/"]>img,
         :root AD-TRIPLE-BOX,
         :root a[href^="https://click.hoolig.app/"],
         :root a[href^="https://track.totalav.com/"],
         :root img[src^="https://images.purevpnaffiliates.com"],
         :root a[href^="https://porntubemate.com/"],
         :root a[href^="http://www.gfrevenge.com/landing/"],
         :root a[href^="https://clickadilla.com/"],
         :root a[href^="https://click.dtiserv2.com/"],
         :root a[href^="https://go.xlvirdr.com"],
         :root a[href^="https://claring-loccelkin.com/"],
         :root [class^="s2nPlayer"],
         :root a[href^="https://chaturbate.jjgirls.com/?track="],
         :root a[href^="https://chaturbate.com/in/?track="],
         :root a[href^="https://chaturbate.com/in/?tour="],
         :root a[href^="https://cams.imagetwist.com/in/?track="],
         :root a[href^="https://affcpatrk.com/"],
         :root a[href^="https://bongacams2.com/track?"],
         :root a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="],
         :root a[href^="https://bngpt.com/"],
         :root a[href^="https://bluedelivery.pro/"],
         :root a[href^="https://black77854.com/"],
         :root a[href^="https://bc.game/"],
         :root a[href^="https://ndt5.net/"],
         :root a[href^="https://batheunits.com/"],
         :root a[target="_blank"][onmousedown="this.href^='http://paid.outbrain.com/network/redir?"],
         :root a[href^="https://banners.livepartners.com/"],
         :root a[href^="//whulsaux.com/"],
         :root a[href^="https://m.do.co/c/"]>img,
         :root [href="https://masstortfinancing.com"] img,
         :root a[href^="https://bongacams10.com/track?"],
         :root a[href^="https://albionsoftwares.com/"],
         :root a[href^="https://t.hrtye.com/"],
         :root a[href^="https://go.etoro.com/"]>img,
         :root a[href^="https://www.adxsrve.com/"],
         :root a[href^="https://convertmb.com/"],
         :root a[href^="https://join.sexworld3d.com/track/"],
         :root a[href^="https://intenseaffiliates.com/redirect/"],
         :root a[href^="https://ads.ad4game.com/"],
         :root [id^="google_ads_iframe"],
         :root a[href^="https://syndication.optimizesrv.com/"],
         :root a[href^="https://affpa.top/"],
         :root a[href^="https://adnetwrk.com/"],
         :root a[href^="https://adjoincomprise.com/"],
         :root [href^="http://misslinkvocation.com/"],
         :root a[href^="https://adclick.g.doubleclick.net/"],
         :root a[href^="https://go.nordvpn.net/aff"]>img,
         :root [href^="http://clicks.totemcash.com/"],
         :root a[href^="https://misspkl.com/"],
         :root a[href^="https://ad.zanox.com/ppc/"]>img,
         :root a[href^="https://adultfriendfinder.com/go/"],
         :root a[href^="https://a.bestcontentoperation.top/"],
         :root [data-m-ad-id],
         :root a[href^="https://a-ads.com/"],
         :root [href="https://ourgoldguy.com/contact/"] img,
         :root a[href^="https://brightadnetwork.com/"],
         :root [href^="https://www.avantlink.com/click.php"] img,
         :root a[href^="http://www.onwebcam.com/random?t_link="],
         :root a[href^="https://www.googleadservices.com/pagead/aclk?"],
         :root a[href^="http://www.mrskin.com/tour"],
         :root a[href^="https://agacelebir.com/"],
         :root a[href^="https://spygasm.com/track?"],
         :root a[href^="http://d2.zedo.com/"],
         :root a[href^="http://www.friendlyduck.com/AF_"],
         :root a[href^="https://ad.kubiccomps.icu/"],
         :root a[href^="http://trk.globwo.online/"],
         :root a[href^="https://prf.hn/click/"][href*="/creativeref:"]>img,
         :root a[href^="http://www.adultempire.com/unlimited/promo?"][href*="&partner_id="],
         :root a[href^="http://traffic.tc-clicks.com/"],
         :root a[href^="http://tour.mrskin.com/"],
         :root a[href^="https://join.virtualtaboo.com/track/"],
         :root a[href^="https://funkydaters.com/"],
         :root [id^="ad_sky"],
         :root a[href^="http://https://www.get-express-vpn.com/offer/"],
         :root div[id^="google_dfp_"],
         :root a[href^="http://googleads.g.doubleclick.net/pcs/click"],
         :root .rc-cta[data-target],
         :root [href^="http://go.cm-trk2.com/"],
         :root a[href^="http://click.payserve.com/"],
         :root a[href^="https://porngames.adult/?SID="],
         :root a[href^="https://landing1.brazzersnetwork.com"],
         :root #slashboxes>.deals-rail,
         :root [href^="http://globsads.com/"],
         :root [href^="https://www.brighteonstore.com/products/"] img,
         :root a[href^="http://bc.vc/?r="],
         :root a[href^="https://mityneedn.com/"],
         :root [href^="http://homemoviestube.com/"],
         :root a[href^="http://ad.doubleclick.net/"],
         :root a[href^="//zunsoach.com/"],
         :root a[href^="https://a2.adform.net/"],
         :root a[href^="http://static.fleshlight.com/images/banners/"],
         :root a[href^="https://a.adtng.com/"],
         :root a[href^="//pubads.g.doubleclick.net/"],
         :root a[href^="//go.eabids.com/"],
         :root [data-d-ad-id],
         :root a[href*=".engine.adglare.net/"],
         :root [href^="https://awbbjmp.com/"],
         :root a[href^="https://tracker.loropartners.com/"],
         :root #kt_player>a[target="_blank"],
         :root a[href*=".cfm?fp="][href*="&maxads="],
         :root [data-dynamic-ads],
         :root a[data-widget-outbrain-redirect^="http://paid.outbrain.com/network/redir?"],
         :root [data-ad-width],
         :root [href^="https://join.playboyplus.com/track/"],
         :root a[data-url^="http://paid.outbrain.com/network/redir?"]+.author,
         :root a[href^="https://axdsz.pro/"],
         :root a[href^="http://bodelen.com/"],
         :root a[data-oburl^="https://paid.outbrain.com/network/redir?"],
         :root [href^="https://cpa.10kfreesilver.com/"],
         :root a[href^="https://a.bestcontentfood.top/"],
         :root a[href^="http://wct.link/"],
         :root [href^="https://goldforyourfuture.com/clk.trk"] img,
         :root [href^="https://infinitytrk.com/"],
         :root [onclick^="location.href='http://www.reimageplus.com"],
         :root [id^="section-ad-banner"],
         :root a[href^="https://go.julrdr.com/"],
         :root .trc_rbox_div .syndicatedItemUB,
         :root [href^="https://zone.gotrackier.com/"],
         :root [href^="https://detachedbates.com/"],
         :root [href^="https://www.targetingpartner.com/"],
         :root a[href^="https://fourwhenstatistics.com/"],
         :root [href^="https://www.restoro.com/"],
         :root a[href^="https://join.virtuallust3d.com/"],
         :root .section-subheader>.section-hotel-prices-header,
         :root [href^="https://go.affiliatexe.com/"],
         :root [href^="https://www.hostg.xyz/"]>img,
         :root [href^="https://ilovemyfreedoms.com/landing-"],
         :root a[href^="https://staRTgaming.net/tienda/"],
         :root a[href^="https://STaRtgAmInG.net/tienda/"],
         :root a[href^="http://adultfriendfinder.com/go/"],
         :root a[href^="https://fastestvpn.com/lifetime-special-deal?a_aid="],
         :root a[href^="https://tour.mrskin.com/"],
         :root div[id^="ad-position-"],
         :root a[href^="http://affiliate.glbtracker.com/"],
         :root a[href^="https://leg.xyz/?track="],
         :root div[id^="crt-"][style],
         :root a[href^="http://adultgames.xxx/"],
         :root a[href^="https://traffic.bannerator.com/"],
         :root [href^="https://shiftnetwork.infusionsoft.com/go/"]>img,
         :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"],
         :root [href^="https://secure.bmtmicro.com/servlets/"],
         :root a[href^="https://losingoldfry.com/"],
         :root .scroll-fixable.rail-right>.deals-rail,
         :root a[href^="https://oackoubs.com/"],
         :root a[href^="https://ak.psaltauw.net/"],
         :root a[href^="https://awptjmp.com/"],
         :root a[href^="https://go.goasrv.com/"],
         :root [href^="http://mypillow.com/"]>img,
         :root a[href^="http://bongacams.com/track?"],
         :root a[href^="https://fleshlight.sjv.io/"],
         :root [data-ad-manager-id],
         :root a[href^="https://promo-bc.com/"],
         :root a[href^="https://clicks.pipaffiliates.com/"],
         :root [href^="https://noqreport.com/"]>img,
         :root [href^="https://mypatriotsupply.com/"]>img,
         :root [href^="https://mylead.global/stl/"]>img,
         :root #leader-companion>a[href],
         :root a[href^="https://transfer.xe.com/signup/track/redirect?"],
         :root .vid-present>.van_vid_carousel__padding,
         :root div[id^="adngin-"],
         :root [data-rc-widget],
         :root a[href^="https://go.xxxijmp.com"],
         :root [href^="https://istlnkcl.com/"],
         :root [href^="https://go.4rabettraff.com/"],
         :root a[href^="https://tm-offers.gamingadult.com/"],
         :root [href^="https://charmingdatings.life/"],
         :root [href^="https://glersakr.com/"],
         :root ins.adsbygoogle,
         :root a[href^="https://1startfiledownload1.com/"],
         :root .trc_rbox_border_elm .syndicatedItem,
         :root a[href^="http://www.onclickmega.com/jump/next.php?"],
         :root a[href^="https://wittered-mainging.com/"],
         :root [href^="https://engine.gettopple.com/"],
         :root a[href^="https://go.gldrdr.com/"],
         :root [data-id^="div-gpt-ad"],
         :root a[href^="https://k2s.cc/pr/"],
         :root [href^="https://affect3dnetwork.com/track/"],
         :root a[href^="https://camfapr.com/landing/click/"],
         :root [href="//sexcams.plus/"],
         :root a[href^="https://go.currency.com/"],
         :root [href^="http://www.mypillow.com/"]>img,
         :root div[id^="div-ads-"],
         :root [href^="https://rapidgator.net/article/premium/ref/"],
         :root [href^="https://join3.bannedsextapes.com"],
         :root div[data-spotim-slot],
         :root [href^="https://antiagingbed.com/discount/"]>img,
         :root a[href^="https://go.247traffic.com/"],
         :root [href^="https://join.girlsoutwest.com/"],
         :root [href^="http://trafficare.net/"],
         :root a[href^="https://tc.tradetracker.net/"]>img,
         :root a[href^="https://adserver.adreactor.com/"],
         :root [href^="http://join.shemalesfromhell.com/"],
         :root [id^="ad_slider"],
         :root #searchResultsList>div>div[onclick$="'inline.ad'});"],
         :root [data-adbridg-ad-class],
         :root a[href^="http://www.adultdvdempire.com/?partner_id="][href*="&utm_"],
         :root [href^="http://join.shemale.xxx/"],
         :root a[href^="https://ads.betfair.com/redirect.aspx?"],
         :root [href^="http://www.fleshlightgirls.com/"],
         :root [href^="http://join.trannies-fuck.com/"],
         :root .trc_rbox .syndicatedItem,
         :root a[href^="http://cam4com.go2cloud.org/aff_c?"],
         :root a[href^="https://cpmspace.com/"],
         :root [href^="https://freecourseweb.com/"]>.sitefriend,
         :root a[href^="https://thefacux.com/"],
         :root a[href^="https://ads.planetwin365affiliate.com/redirect.aspx?"],
         :root [href^="http://join.rodneymoore.com/"],
         :root a[href*=".trust.zone"],
         :root [href^="https://shrugartisticelder.com"],
         :root [href^="https://go.xlrdr.com"],
         :root a[href^="https://staRTgamIng.net/tienda/"],
         :root div[id^="lazyad-"],
         :root a[href^="http://com-1.pro/"],
         :root [name^="google_ads_iframe"],
         :root a[href^="https://go.xxxjmp.com"],
         :root [data-desktop-ad-id],
         :root [href^="https://wct.link/"],
         :root div[recirculation-ad-container],
         :root [href^="https://traffserve.com/"],
         :root [href="https://www.masstortfinancing.com/"]>img,
         :root .ob_container .item-container-obpd,
         :root [id^="div-gpt-ad"],
         :root [href^="https://mypillow.com/"]>img,
         :root [href^="https://ad.admitad.com/"],
         :root a[href^="https://u.expresstech.io/"],
         :root a[href^="https://www.geekbuying.com/dynamic-ads/"],
         :root a[href^="https://lnkxt.bannerator.com/"],
         :root [href="https://jdrucker.com/gold"]>img,
         :root [href^="https://v.investologic.co.uk/"],
         :root [href^="https://mystore.com/"]>img,
         :root ADS-RIGHT,
         :root [href^="https://cipledecline.buzz/"],
         :root a[href^="https://track.ultravpn.com/"],
         :root [href^="https://goldcometals.com/clk.trk"],
         :root a[href^="https://go.hpyjmp.com"],
         :root [data-mobile-ad-id],
         :root a[href^="http://tc.tradetracker.net/"]>img,
         :root a[href^="http://affiliates.thrixxx.com/"],
         :root [data-ez-name],
         :root a[href^="http://go.xtbaffiliates.com/"],
         :root .grid>.container>#aside-promotion,
         :root DFP-AD,
         :root [data-adblockkey],
         :root .trc_related_container div[data-item-syndicated="true"],
         :root a[href^="https://www.liquidfire.mobi/"],
         :root [href^="https://click2cvs.com/"],
         :root a[href^="https://startgAming.net/tienda/"],
         :root [href^="https://safer-redirection.com"],
         :root [href^="https://optimizedelite.com/"]>img,
         :root [data-name="adaptiveConstructorAd"],
         :root [onclick*="content.ad/"],
         :root AMP-AD,
         :root [data-ad-cls],
         :root a[href^="https://www.goldenfrog.com/vyprvpn?offer_id="][href*="&aff_id="],
         :root [id^="ad-wrap-"],
         :root div[id^="taboola-stream-"],
         :root [href^="https://go.astutelinks.com/"],
         :root [class^="amp-ad-"],
         :root [href^="https://affiliate.fastcomet.com/"]>img,
         :root [class^="adDisplay-module"],
         :root AD-SLOT,
         :root a[href^="https://go.xlviiirdr.com"],
         :root [href^="http://join.shemalepornstar.com/"],
         :root a[href^="http://partners.etoro.com/"],
         :root [data-advadstrackid],
         :root [href^="https://trackfin.asia/"],
         :root .plistaList>.plista_widget_underArticle_item[data-type="pet"],
         :root .ob_dual_right>.ob_ads_header~.odb_div,
         :root .trc_rbox_div .syndicatedItem,
         :root div[data-adunit],
         :root app-large-ad,
         :root [href^="https://turtlebids.irauctions.com/"] img,
         :root a[href^="https://iactrivago.ampxdirect.com/"],
         :root a[href^="https://a.medfoodhome.com/"],
         :root [data-ad-module],
         :root a[href^="https://cam4com.go2cloud.org/"],
         :root a[href^="http://li.blogtrottr.com/click?"],
         :root a[href^="https://go.cmtaffiliates.com/"],
         :root a[href^="https://bs.serving-sys.com"],
         :root [href^="http://residenceseeingstanding.com/"],
         :root a[href*="//lkstrck2.com/"],
         :root .plistaList>.itemLinkPET,
         :root a[href^="https://traffdaq.com/"],
         :root [class^="div-gpt-ad"],
         :root a[href^="https://refpazkjixes.top/"],
         :root #mgb-container>#mgb,
         :root [href^="https://www.cloudways.com/en/?id"],
         :root a[href^="https://trk.sportsflix4k.club/"],
         :root a[href^="https://go.xlivrdr.com"] {
            display: none !important;
        }
    </style>
</head>

<body>
    <header>
        <h1>Quiz.js</h1>
        <p>Do you know JS? Find out!</p>
    </header>

    <main>
        <div id="statement">

        </div>

        <div id="options">
            <button name="true" value="true">true</button>
            <button name="false" value="false">false</button>
        </div>

        <div id="explanation">


        </div>

    </main>



    <script type="text/javascript">
        // TODO 1: Declare & assign variables pointing to the corresponding element(s)
        // statement should be the "statement" div
        const statment = document.getElementById("statement");
        // optionButtons should be all the elements within the "options" div
        const optionButtons = document.querySelectorAll("#options button");
        // explanation should be the "explanation" div
        const explanation = document.getElementById("explanation");


        // TODO 2: Declare & assign a variable called fact
        // Its value should be an object with a statement, true/false answer, and explanation 
        let fact = {
            statment: "Array are like objects",
            answer: false,
            explanation: "Type of Array are Object",
        }

        // TODO 3: Set the text of the statement element to the fact's statement
        statment.textContent = fact.statment;

        // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
        // disable(button) should set the button element's attribute "disabled" to the value ""
        const disable = button => {
            button.setAttribute("disabled", "true");
        };
        // enable(button) should remove the attribute "disabled" from the button element
        const enable = button => {
            button.removeAttribute("disabled");
        };
        // TODO 5: Declare an isCorrect function that compares a guess to the right answer
        // isCorrect(guess) should return true if the guess matches the fact's answer
        function isCorrect(val) {
            return val === fact.answer.toString();
        }

        // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
        for (let button of optionButtons) {
            button.addEventListener('click', (event) => {
                console.log(`heard a click`);
                // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
                explanation.textContent = fact.explanation;
                // TODO 7: Within the event handler function, 
                // Use a for loop to disable all the option buttons
                for (let button of optionButtons) {
                    disable(button);
                }

                // TODO 8: Within the event handler function,
                // Get the guessed value from the clicked button
                // Use a conditional to compare the guess to the fact's answer
                // and add the "correct"/"incorrect" class as appropriate
                if (isCorrect(button.value)) {
                    button.classList.add("correct")
                } else {
                    button.classList.add("incorrect")
                }
            });
        };
    </script>

</body>

</html>
```
























### Answer to Questions
---
Q1
```
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
```
---
Q2
```
// Declare the myGlobal variable below this line

const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
---
Q3
```
function myLocalScope() {
  // Only change code below this line
  var myVar = "ibraheem"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
---
Q4
```
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear   = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
```
---
Q5
```
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const rmd = arr.shift();
  return rmd;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```








