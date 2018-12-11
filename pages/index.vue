<template lang="pug">
  main
    section.hero.is-fullheight#checker(:class="serialStatus")

      .hero-body
        .container.has-text-centered
          b-field
            b-input(
              placeholder="Enter S/N"
              size="is-large"
              v-model="serialInput"
              @input="checkSerial()"
              maxlength=14
            )

      .hero-foot
        nav.tabs.is-boxed.is-fullwidth
          .container
            ul.has-text-centered
              li.is-active
                a(href="#checker") Serial Checker
              li
                a(href="#list") Serials List
              li
                a(href="#about")  About


    section.hero.is-fullheight#list(:class="serialStatus")
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
              li.is-active
                a(href="#list") Serials List
              li
                a(href="#about")  About

    section.hero.is-fullheight#about(:class="serialStatus")
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
      serialInput: ''
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
    checkSerial() {
      if (this.serialInput.length >= 4) {
        if (serials[this.serialInput.substring(0, 4)]) {
          if (this.serialInput.length >= 10) {
            let serialPart = parseInt(this.serialInput.substring(3, 10))
            let currentSerials = serials[this.serialInput.substring(0, 4)]
            for (const serial in currentSerials) {
              if (serialPart > parseInt(serial)) {
                continue
              } else {
                this.$set(
                  this,
                  'serialStatus',
                  serials[this.serialInput.substring(0, 4)][serial]
                )
                break
              }
            }

            if (this.serialStatus == 'is-black') {
              this.$set(this, 'serialStatus', 'patched')
            }
          } else {
            this.$set(this, 'serialStatus', false)
          }
        } else {
          this.$set(this, 'serialStatus', 'patched')
        }
      } else {
        this.$set(this, 'serialStatus', false)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  pre {
    white-space: pre-wrap
  }
</style>
