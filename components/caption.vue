<template lang="pug">
  section
    button.nes-btn(type="button" v-bind:class="{'is-primary': !dialog, 'is-success': dialog}" @click="dialog = !dialog")
      span(v-if="!dialog") What does it mean? What can I do?
      span(v-else) Ok thanks
    section.nes-container.is-rounded(ref="caption" v-show="dialog")
      form(method="dialog")
        ul.nes-list.captions
          li(v-for="caption in captions" :class="caption.title")
            span.title {{caption.title}}:
            span.explanation {{caption.explanation}}

        section
          span How to exploit it? Search things like "Switch Hack Guide" on Google. You'll find things. :)
      </form>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      captions: [
        {
          title: 'incorrect',
          explanation: 'The serial number is at least 10 characters long.'
        },
        {
          title: 'safe',
          explanation:
            'The serial number range has been reported as "safe". It means that Nintendo Switch is vulnerable to the Fusée Gelée exploit.'
        },
        {
          title: 'warning',
          explanation:
            'The serial number range has mixed reports of working and not working exploit. That means the Nintendo Switch may NOT be vulnerable to the Fusée Gelée exploit.'
        },
        {
          title: 'patched',
          explanation:
            'The serial number range has clearly been reported that the Nintendo Switch IS NOT vulnerable to the Fusée Gelée exploit.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  section {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
  ul.captions {
    text-align: left;
    li {
      margin: 10px 0;
      &.safe {
        > span.title {
          background-color: #23d160
        }
      }

      &.warning {
        > span.title {
          background-color: #ffdd57
        }
      }

      &.patched {
        > span.title {
          background-color: #ff3860
        }
      }

      &.incorrect {
        > span.title {
          background-color: #209cee
        }
      }
      > span.title {
        font-weight: bold;
        padding: 5px;
      }
    }
  }
</style>
