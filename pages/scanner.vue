<template lang="pug">
  section.scanner
    section.container.with-title
      h2.title Scanner

      p Choose a file to check its serial number

      input(
        type="file"
        accept="image/*"
        @change="onImagesUpload($event)"
        multiple
      )

    section.container.with-title(v-if='checkedSerialsOutput')
      h2.title Checked Serials

      table.table.is-bordered.is-centered
        thead
          tr
            th Serial
            th Status
        tbody.is-centered(v-html='checkedSerialsOutput')
</template>

<script>
import Quagga from 'quagga'

export default {
  head: {
    title: 'Scanner'
  },
  data() {
    return {
      checkedSerials: [],
      checkedSerialsOutput: '',
      configuration: {
        inputStream: {
          size: 800,
          singleChannel: false
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        decoder: {
          readers: ['code_128_reader']
        },
        locate: true,
        src: null
      }
    }
  },
  mounted() {
    Quagga.onDetected(result => {
      let detectedSerial = result.codeResult.code
      if (detectedSerial) {
        let serialStatus = this.checkedSerialsOutput
        this.checkedSerials.push(detectedSerial)

        let status = this.$serialChecker(detectedSerial)
        serialStatus =
          `
            <tr class='${status}'>
              <td>${detectedSerial.substring(0, 14).toUpperCase()}</td>
              <td>${status}</td>
            </tr>
          ` + serialStatus

        this.$set(this, 'checkedSerialsOutput', serialStatus)
      }
    })
  },
  methods: {
    decode($file) {
      let conf = this.configuration
      conf.src = $file
      Quagga.decodeSingle(conf, function(result) {})
    },
    onImagesUpload($event) {
      if ($event.target.files && $event.target.files.length) {
        for (const file of $event.target.files) {
          this.decode(URL.createObjectURL(file))
        }
      }
    }
  }
}
</script>

<style>
</style>
