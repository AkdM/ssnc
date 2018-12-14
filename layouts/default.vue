<template lang="pug">
  section
    header
      h1
        i.nes-logo
        span &nbsp;SSNC
      p Switch SN Checker
    main
      section.container.with-title.is-mobile-centered
        h2.title Categories
        section
          label
            input.radio(type='radio' name='category' :checked='currentPage == "checker"')
            span
              nuxt-link.btn.is-primary(to='/') Checker

          label
            input.radio(type='radio' name='category' :checked='currentPage == "scanner"')
            span
              nuxt-link.btn.is-success(to='/scanner') Barcode Scanner

          label
            input.radio(type='radio' name='category' :checked='currentPage == "about"')
            span
              nuxt-link.btn.is-warning(to='/about') About

      nuxt
    footer
</template>

<script>
require('nes.css/css/nes.css')

export default {
  computed: {
    currentPage: {
      cache: false,
      get() {
        return this.$route.name
      }
    }
  }
}
</script>


<style lang="stylus">
body {
  padding: 0 2rem
  margin: 2rem

  input, textarea {
    &:focus {
      outline: none
    }
  }

  a {
    &.btn {
      text-decoration: none
    }
  }

  textarea {
    &.input {
      max-height: 50vh
      height: 100%
    }
  }

  .table {
    table-layout: fixed
    background-color: #fff
    width: 100%;

    &.is-centered th {
      text-align: center
    }
    &.is-bordered {
      box-shadow: 4px 0 #212529, 0 -4px #212529, -4px 0 #212529, 0 4px #212529

      th, td {
        padding: 0.5rem
        word-wrap: break-word
      }

      tr {
        th + th {
          box-shadow: -4px 0 #212529
        }
        td {
          box-shadow: 0 -4px #212529
        }
        td:not(:first-child) {
          box-shadow: -4px 0 #212529, 0 -4px #212529
        }
      }
    }
    tbody {
      &.is-centered {
        text-align: center
      }
      tr {
        &.safe {
          background-color: #23d160
        }

        &.warning {
          background-color: #ffdd57
        }

        &.patched {
          background-color: #ff3860
        }

        &.incorrect {
          background-color: #209cee
        }
      }
    }
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity .15s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

@media (max-width : 900px) {
  body {
    padding: 0
    margin: 2rem 1rem
    section {
      &.is-mobile-centered {
        text-align: center
        label, .btn {
          width: 100%
        }
        .radio:checked + span::before {
          top: 37px
          left: calc(-100% - 35px)
        }
      }
    }
  }
}
</style>
