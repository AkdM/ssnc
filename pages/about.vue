<template lang="pug">
  section.about
    section.container.with-title
      h2.title About

      p By&nbsp;
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

<style>
</style>
