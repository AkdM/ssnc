<template lang="pug">
  section.scanner
    section.container.with-title
      h2.title Scanner

      p Choose images to check their serial numbers

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
  head() {
    return {
      title: 'Scanner'
    }
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
  methods: {
    decode($file) {
      return new Promise((resolve, reject) => {
        let conf = this.configuration
        conf.src = $file
        Quagga.decodeSingle(conf, result => {
          if (result && result.codeResult) {
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
          } else {
            let serialStatus = this.checkedSerialsOutput

            serialStatus =
              `
                <tr>
                  <td colspan='2'>Not detected</td>
                </tr>
              ` + serialStatus

            this.$set(this, 'checkedSerialsOutput', serialStatus)
          }

          resolve()
        })
      })
    },
    async onImagesUpload($event) {
      if ($event.target.files && $event.target.files.length) {
        for (const file of $event.target.files) {
          await this.decode(URL.createObjectURL(file))
        }
      }
    }
  }
}
</script>

<style>
</style>
