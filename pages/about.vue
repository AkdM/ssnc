<template lang="pug">
  section.about
    section.container.with-title
      h2.title About

      h3 Changelog

      ul.changelog
        li.version v1.0.3
          ul.changes
            li.bugfix Updated XAW1; XAW4; XAW7; XAJ4; XAJ7 serials
        li.version v1.0.2
          ul.changes
            li.bugfix Fixed XAJ4007 serial numbers
            li.feature Added a changelog to the about page, so you can track what's going on here :)
        li.version v1.0.1
          ul.changes
            li.bugfix Dramatically updated the algorithm thanks to the help of the community
        li.version v1.0.0
          ul.changes
            li.initial Initial public release with multiple SN checker and barcode scanner

      hr

      h3 Who made this?
        p Me!
          a(:href='github' target='_blank') {{name}}
</template>

<script>
export default {
  head: {
    title: 'About'
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
ul {
  &.changelog, &.changes {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }

  li {
    &:before {
      padding-right: 10px;
    }

    &.version {
      &:before {
        content: '🔖';
      }

      margin-top: 25px;
    }

    &.feature {
      &:before {
        content: '✨';
      }
    }

    &.bugfix {
      &:before {
        content: '🔧';
      }
    }

    &.initial {
      &:before {
        content: '🎉';
      }
    }

    padding-left: 1em;
    text-indent: -1em;
  }
}
</style>
