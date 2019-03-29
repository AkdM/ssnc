<template lang="pug">
  section.about
    section.nes-container.with-title
      h2.title About

      h3 Changelog

      ul.nes-list.is-disc.changelog
        li.version v1.1.0
          ul.nes-list.is-circle.changes
            li Added some help so you know what the status mean. Also updated some styles :)
        li.version v1.0.4
          ul.nes-list.is-circle.changes
            li Updated XAW1; XAW4; XAW7; XAJ4; XAJ7 serials thanks to @shadow256
        li.version v1.0.3
          ul.nes-list.is-circle.changes
            li Updated XAW1; XAW4; XAW7; XAJ4; XAJ7 serials
        li.version v1.0.2
          ul.nes-list.is-circle.changes
            li Fixed XAJ4007 serial numbers
            li Added a changelog to the about page, so you can track what's going on here :)
        li.version v1.0.1
          ul.nes-list.is-circle.changes
            li Dramatically updated the algorithm thanks to the help of the community
        li.version v1.0.0
          ul.nes-list.is-circle.changes
            li Initial public release with multiple SN checker and barcode scanner

      hr

      h3 Who made this?
        p Me!
          a(:href='github' target='_blank') {{name}}
</template>

<script>
export default {
  head() {
    return {
      title: 'About'
    }
  },
  data() {
    return {
      name: 'AkdM',
      github: 'https://github.com/AkdM'
    }
  }
}
</script>

<style lang="stylus">
  ul.nes-list {
    li {
      &.version {
        margin-bottom: 20px;
      }
      &:before {
        top: 4px !important;
      }
    }
  }
</style>
