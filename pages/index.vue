<template lang="pug">
  main
    section.hero.is-fullheight#checker(:class="serialStatus")

      .hero-body
        .container.has-text-centered
          b-field
            b-input(
              placeholder="Enter S/N"
              size="is-large"
              v-model="singleInput"
              @input="singleCheck()"
              maxlength=14
            )

      .hero-foot
        nav.tabs.is-boxed.is-fullwidth
          .container
            ul.has-text-centered
              li.is-active
                a(href="#checker") Serial Checker
              li
               a(href="#batch") Batch Checker
              li
                a(href="#list") Serials List
              li
                a(href="#about")  About


    section.hero.is-fullheight.is-info#batch

      .hero-body
        .container.has-text-centered
          b-field
            b-input(
              placeholder="Enter S/N numbers, one per line"
              v-model="batchInput"
              @input="batchCheck()"
              type="textarea"
            )
          b-field
            pre(v-html='batchedSerials')

      .hero-foot
        nav.tabs.is-boxed.is-fullwidth
          .container
            ul.has-text-centered
              li
                a(href="#checker") Serial Checker

              li.is-active
                a(href="#batch") Batch Checker
              li
                a(href="#list") Serials List
              li
                a(href="#about")  About


    section.hero.is-fullheight.is-info#list
      .hero-body
        .container
          .pre-container
            pre.
              XAW4:
              XAW4001100X and below are safe to buy
              XAW4001200X and above not not safe, possibly patched
              XAW4003000X and above definitely patched

              XAW7:
              XAW7001780X and below are safe to buy
              XAW7001790X and above not safe to buy, possibly patched
              XAW7003000X and above definitely patched

              XAJ1:
              XAJ1002000X and below are safe to buy
              XAJ1002100X and above not safe to buy, possibly patched
              XAJ1003000X and above definitely patched

              XAJ4:
              XAJ4004600X and below are safe to buy
              XAJ4004700X and above not safe to buy, possibly patched
              XAJ4006000X and above definitely patched

              XAJ7:
              XAJ7004000X and below are safe to buy
              XAJ7004100X and above not safe to buy, possibly patched
              XAJ7005000X and above definitely patched

              XAW9:
              Refurbished Consoles directly from Nintendo, no informations, but very possible all patched.

              XAK:
              No informations available, since those are only sold in Korea (?)


      .hero-foot
        nav.tabs.is-boxed.is-fullwidth
          .container
            ul.has-text-centered
              li
                a(href="#checker") Serial Checker
              li
                a(href="#batch") Batch Checker
              li.is-active
                a(href="#list") Serials List
              li
                a(href="#about")  About

    section.hero.is-fullheight.is-info#about
      .hero-body
        .container.has-text-centerd
          h1.title Hi :)

      .hero-foot
        nav.tabs.is-boxed.is-fullwidth
          .container
            ul.has-text-centered
              li
                a(href="#checker") Serial Checker
              li
                a(href="#batch") Batch Checker
              li
                a(href="#list") Serials List
              li.is-active
                a(href="#about")  About


</template>

<script>
import serials from 'static/serials.json'
import _find from 'lodash/find'

export default {
  name: 'HomePage',
  data() {
    return {
      status: false,
      singleInput: '',
      batchInput: '',
      batchedSerials: ''
    }
  },
  computed: {
    serialStatus: {
      cache: false,
      set(value) {
        this.$set(this, 'status', value)
      },
      get() {
        switch (this.status) {
          case 'safe':
            return 'is-success'
            break
          case 'warning':
            return 'is-warning'
            break
          case 'patched':
            return 'is-danger'
            break
          default:
            return 'is-black'
            break
        }
      }
    }
  },
  methods: {
    checkSerial(inputSerial) {
      var status = 'is-black'

      if (inputSerial.length >= 4) {
        let firstPart = inputSerial.substring(0, 4).toUpperCase()
        let secondPart = inputSerial.substring(3, 10).toUpperCase()
        if (serials[firstPart]) {
          if (inputSerial.length >= 10) {
            let serialPart = parseInt(secondPart)
            let currentSerials = serials[firstPart]
            for (const serial in currentSerials) {
              if (serialPart > parseInt(serial)) {
                continue
              } else {
                status = serials[firstPart][serial]
                break
              }
            }

            if (status == 'is-black') {
              status = 'patched'
            }
          } else {
            status = 'is-black'
          }
        } else {
          status = 'patched'
        }
      } else {
        status = 'is-black'
      }

      return status
    },

    singleCheck() {
      let status = this.checkSerial(this.singleInput)
      this.$set(this, 'serialStatus', status)
    },

    batchCheck() {
      let splitBatch = this.batchInput.split('\n')
      this.batchedSerials = ''
      const regex = /\d{7}/
      for (const serial of splitBatch) {
        var processingSerial = serial
        if (processingSerial !== '' && processingSerial.length >= 10) {
          if (processingSerial.substring(9, 10).toUpperCase() == 'X') {
            let a = processingSerial.split('')
            a[9] = '9'
            processingSerial = a.join('')
          }

          if (regex.test(processingSerial.substring(3, 10))) {
            let status = this.checkSerial(processingSerial)
            this.batchedSerials += `<p class="${status}">${serial
              .substring(0, 14)
              .toUpperCase()}\t${status}</p>`
          } else {
            this.batchedSerials += `<p class="incorrect">${serial
              .substring(0, 14)
              .toUpperCase()}\tincorrect</p>`
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus">
pre {
  white-space: pre-wrap;
}

pre p {
  font-weight: 800;
  margin-bottom: 5px;

  &.safe {
    color: #23d160;
  }

  &.warning {
    color: #ffdd57;
  }

  &.patched {
    color: #ff3860;
  }

  &.incorrect {
    color: #209cee;
  }
}
</style>
