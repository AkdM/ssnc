<template lang="pug">
  section.nes-container.with-title.aab
    h2.title Support me

    .blink Best prices! Ending soon!

    //- SD Card:
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=damota0b-20&marketplace=amazon&region=US&placement=B073JYC4XM&asins=B073JYC4XM&linkId=af7e36813469703a379533293b326019&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff')

    //- USB-C cables
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=damota0b-20&marketplace=amazon&region=US&placement=B01LNA0XCU&asins=B01LNA0XCU&linkId=e0a20e0f380862bd113ad05ab95bc245&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff')

    //- Switch screen protector
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota0b-20&language=en_US&marketplace=amazon&region=US&placement=B01N3ASPNV&asins=B01N3ASPNV&linkId=baa1e2290d6afd7e2e72f5eb97b48e98&show_border=true&link_opens_in_new_window=true')

    //- Switch case
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota0b-20&language=en_US&marketplace=amazon&region=US&placement=B07VNB4SZB&asins=B07VNB4SZB&linkId=3d120ca8d9a22e641cbbfd08370987af&show_border=true&link_opens_in_new_window=true')

    //- Nintendo Switch
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=damota0b-20&language=en_US&marketplace=amazon&region=US&placement=B07VGRJDFY&asins=B07VGRJDFY&linkId=18495ed78df1391ab322b16bc4a3e32c&show_border=true&link_opens_in_new_window=true')

    //- Joy-Cons
    iframe(style='width:120px;height:240px;', marginwidth='0', marginheight='0', scrolling='no', frameborder='0', src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=damota0b-20&marketplace=amazon&region=US&placement=B078GZM4H8&asins=B078GZM4H8&linkId=3285c4d2ed7e94acdcfef67c12124520&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff')

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
