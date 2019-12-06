<template lang="pug">
  section.nes-container.with-title.aab
    h2.title Support me

    .blink Best prices! Ending soon!

    //- SD Card:
    iframe(style='width:120px;height:240px;' marginwidth='0' marginheight='0' scrolling='no' frameborder='0' src='//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota03-21&language=fr_FR&marketplace=amazon&region=FR&placement=B073JYC4XM&asins=B073JYC4XM&linkId=0c0c5c15219a85621f153c4b893bbdbb&show_border=true&link_opens_in_new_window=true')

    //- USB-C cables
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota03-21&language=fr_FR&marketplace=amazon&region=FR&placement=B07CJJHVKX&asins=B07CJJHVKX&linkId=05d9d49315ceb8d66c243459a826e598&show_border=true&link_opens_in_new_window=true')

    //- USB-A to USB-C adapter
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota03-21&language=fr_FR&marketplace=amazon&region=FR&placement=B07L3Y4TKV&asins=B07L3Y4TKV&linkId=903a479ffa5d534c239f35f31b5b5b41&show_border=true&link_opens_in_new_window=true')

    //- Switch case
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota03-21&language=fr_FR&marketplace=amazon&region=FR&placement=B07VNB4SZB&asins=B07VNB4SZB&linkId=68c62a8ce330d512c75d01590ec6c369&show_border=true&link_opens_in_new_window=true')

    //- Nintendo Switch
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota03-21&language=fr_FR&marketplace=amazon&region=FR&placement=B07WKNQ8JT&asins=B07WKNQ8JT&linkId=6e28e3aba7eab001ed25fd9978d39b49&show_border=true&link_opens_in_new_window=true')

    //- Fortnite clothe
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota03-21&language=fr_FR&marketplace=amazon&region=FR&placement=B07L9DH3H6&asins=B07L9DH3H6&linkId=63b635fd35a66968fc974c7b03f433e3&show_border=true&link_opens_in_new_window=true')

    .blink Best prices! Ending soon!

    //- Generic link:
    //- iframe(
    //-   src='https://rcm-eu.amazon-adsystem.com/e/cm?o=8&pP=288&l=ez&f=ifr&linkID=ca38d3ac168d43f0ef31a2d02849e7d6&t=damota03-21&tracking_id=damota03-21'
    //-   width='320'
    //-   height='50'
    //-   scrolling='no'
    //-   border='0'
    //-   marginwidth='0'
    //-   style='border:none;'
    //-   frameborder='0'
    //- )

</template>

<style lang="stylus">
.aab {
  iframe {
    margin-right: 3px;
  }
  .blink {
    animation: blinker .3s linear infinite alternate;
  }

  @keyframes blinker { to { opacity: 0; } }
}
</style>
