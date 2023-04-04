// prettier-ignore
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import 'vanilla-cookieconsent/src/cookieconsent.js'

const cookieConsentPlugin = () => {
  const cookieConsent = window.initCookieConsent()
  cookieConsent.run({
    current_lang: 'en',
    page_scripts: true,
    auto_language: 'browser',
    cookie_path: '/ssnc',
    force_consent: true,
    gui_options: {
      consent_modal: {
        layout: 'box',
        position: 'middle center',
        transition: 'slide',
        swap_buttons: true
      },
      settings_modal: {
        layout: 'box',
        transition: 'slide'
      }
    },
    languages: {
      en: {
        consent_modal: {
          title: 'Mmmmh, cookies 🍪',
          description: `
            Hi, cookies are used for ads personalisation on this website. Some of them are essential to ensure its proper operation and others like tracking cookies are meant to understand how you interact with it. The latter will be set only after consent.<br><br>
            For more details relative to cookies and other sensitive data, please read our full <a target="_blank" href="https://gist.github.com/AkdM/5a2bfac3dc3c07ed207337443ed70ebf#file-privacypolicy-md" class="cc-link">privacy policy</a>. You can also access <a target="_blank" href="https://policies.google.com/technologies/partner-sites" class="cc-link">Google's Privacy & Terms site here</a>.
            `,
          primary_btn: {
            text: '✅ Accept all',
            role: 'accept_all'
          },
          secondary_btn: {
            text: 'Personalize…',
            role: 'settings'
          }
        },
        settings_modal: {
          title: 'Cookie preferences',
          save_settings_btn: 'Save settings',
          accept_all_btn: 'Accept all',
          reject_all_btn: 'Reject all',
          close_btn_label: 'Close',
          cookie_table_headers: [
            { col1: 'Name' },
            { col2: 'Domain' },
            { col3: 'Expiration' },
            { col4: 'Description' }
          ],
          blocks: [
            {
              title: 'Cookie usage 📢',
              description: `
                I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a target="_blank" href="https://gist.github.com/AkdM/5a2bfac3dc3c07ed207337443ed70ebf#file-privacypolicy-md" class="cc-link">privacy policy</a>. You can also access <a target="_blank" href="https://policies.google.com/technologies/partner-sites" class="cc-link">Google's Privacy & Terms site here</a>.
              `
            },
            {
              title: 'Strictly necessary cookies',
              description:
                'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true
              }
            },
            {
              title: 'Performance and Analytics cookies',
              description:
                'These cookies allow the website to remember the choices you have made in the past',
              toggle: {
                value: 'analytics',
                enabled: false,
                readonly: false
              },
              cookie_table: [
                {
                  col1: '^_ga',
                  col2: 'google.com',
                  col3: '2 years',
                  col4:
                    'Google Analytics: enables a service to distinguish one visitor from another and lasts for 2 years',
                  is_regex: true
                },
                {
                  col1: '_gid',
                  col2: 'google.com',
                  col3: '1 day',
                  col4:
                    'Registers a unique ID that is used to generate statistical data on how the visitor uses the website'
                }
              ]
            },
            {
              title: 'Advertisement and Targeting cookies',
              description:
                'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
              toggle: {
                value: 'targeting',
                enabled: false,
                readonly: false
              }
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="mailto:AkdM@users.noreply.github.com?subject=SSNC Cookies">contact us</a>.'
            }
          ]
        }
      }
    }
  })
}

export default cookieConsentPlugin
