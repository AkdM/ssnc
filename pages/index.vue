<template lang="pug">
  section.hero.is-fullheight(:class="serialStatus")
    // Hero head: will stick at the top
    .hero-head
      header.navbar
        .container
          .navbar-brand
            a.navbar-item
              //- img(src='https://bulma.io/images/bulma-type-white.png', alt='Logo')
            span.navbar-burger.burger(data-target='navbarMenuHeroC')
              span
              span
              span

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
              a Serial Checker
            li
              a Serials List
            li
              a About

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
