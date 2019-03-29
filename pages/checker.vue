<template lang="pug">
  section.checker
    section.nes-container.with-title
      h2.title Checker

      p Input your serials in the text box

      textarea.nes-textarea(
        placeholder="Enter S/Ns"
        @input="batchCheck($event.target.value)"
      )

    section.nes-container.with-title(v-if='checkedSerials')
      h2.title Checked Serials

      Caption

      table.nes-table.nes-table-responsive.is-bordered.is-centered
        thead
          tr
            th Serial
            th Status
        tbody.is-centered(v-html='checkedSerials')

</template>

<script>
import Caption from '~/components/caption'

export default {
  head() {
    return {
      title: 'Checker'
    }
  },
  components: {
    Caption
  },
  data() {
    return {
      checkedSerials: ''
    }
  },
  methods: {
    batchCheck($batchInput) {
      let splitBatch = $batchInput.split('\n')
      let currentSerials = ''
      const regex = /\d{7}/
      for (const serial of splitBatch) {
        var processingSerial = serial
        if (processingSerial !== '') {
          let status = this.$serialChecker(processingSerial)
          currentSerials += `
            <tr class='${status}'>
              <td>${serial.substring(0, 14).toUpperCase()}</td>
              <td>${status}</td>
            </tr>
          `
        }
      }

      this.$set(this, 'checkedSerials', currentSerials)
    }
  }
}
</script>

<style lang="stylus">
</style>
