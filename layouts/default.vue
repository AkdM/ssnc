<template lang="pug">
  section.container
    header
      h1
        i.nes-logo
        span &nbsp;SSNC
        span.small v{{version}}
      p Switch SN Checker
    main
      section.nes-container.with-title.is-mobile-centered.categories
        h2.title Categories
        section
          label
            input.nes-radio(type='radio' name='category' :checked='currentPage == "checker"')
            span
              nuxt-link.nes-btn.is-primary(to='/') Checker

          label
            input.nes-radio(type='radio' name='category' :checked='currentPage == "scanner"')
            span
              nuxt-link.nes-btn.is-success(to='/scanner') Barcode Scanner

          label
            input.nes-radio(type='radio' name='category' :checked='currentPage == "about"')
            span
              nuxt-link.nes-btn.is-warning(to='/about') About

      nuxt
    footer
</template>

<script>
export default {
  computed: {
    currentPage: {
      cache: false,
      get() {
        return this.$route.name
      }
    },
    version() {
      return process.env.version
    }
  }
}
</script>


<style lang="stylus">

body {
  padding: 0 2rem
  margin: 2rem

  header {
    h1 {
      .small {
        font-size: .5em
        margin-left: 15px
      }
    }
  }

  .nes-container {
    margin-top: 5px;
  }

  input, textarea {
    &:focus {
      outline: none
    }

    &[type="radio"] {
      display: none
    }
  }

  a {
    &.nes-btn {
      text-decoration: none
    }
  }

  textarea {
    &.input {
      max-height: 50vh
      height: 100%
    }
  }

  table {
    table-layout: fixed
    width: 100%;
    border-width: 0 !important;

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

@media (min-width : 900px) {
  body {
    section {
      &.categories {
        label {
          margin-left: 30px
        }
      }
    }
  }
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
      }
    }
  }
}
</style>
