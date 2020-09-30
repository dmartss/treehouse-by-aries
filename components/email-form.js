import EmailClosedIcon from './icons/email-closed'
import { renderToString } from 'react-dom/server'

const Icon = renderToString(<EmailClosedIcon height="15" width="15" fill="currentColor" />)

export default function EmailForm({ flex }) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script type="text/javascript" src="//contact-api.inguest.com/bundles/revinatecontactapi/js/revinate-form.js?v=1"></script>
          <form class="form" id="revinate_contact_api_form" token="${token}"
                onsubmit="revFormOnSubmit(); event.preventDefault();">
            <div class=${flex ? 'flex' : ''}>
              <div>
                <label class="label">
                  <span class="icon">
                  ${Icon}
                </span>
                <input placeholder="you@domain.com" class=${
                  flex ? 'flex' : ''
                } type="email" name="email" required/>
              </div>
              </label>
              <div class="button">
                <button class=${flex ? 'flex' : ''} type="submit">Subscribe</button>
              </div>
            </div>

          <style scoped>
          form.form {
            display: inline-block;
            position: relative;
            max-width: 100%;
          }

          form.form label.label {
            background-color: transparent;
            display: flex;
            border-radius: 8px;
            border: 1px solid #999;
            align-items: center;
            margin: 0 auto;
          }

          form.form span.icon {
            margin: 0 14px;
            display: inline-flex;
          }

          form.form div {
            width: 240px;
            max-width: 100%;
            text-align: center;
            margin: auto;
            transition: border-bottom-color 100ms ease-in, color 100ms ease-in;
          }

          form.form div.flex {
            display: flex;
            flex-direction: row;
            width: 490px;
            align-items: center;
            justify-content: space-between;
          }

          form.form input {
            background-color: transparent;
            box-sizing: border-box;
            display: block;
            text-align: left;
            font-size: 14px;
            font-family: var(--font-sans);
            padding: 4px 10px;
            margin: 0 auto;
            height: 40px;
            line-height: 27px;
            width: 100%;
            box-shadow: none;
            color: var(--black);
            background-color: transparent;
            border: none;
            border-radius: 0;
            box-sizing: border-box;
          }

          form.form input.flex {
            color: var(--white);
          }

          input::placeholder {
            color: #999;
            transition: color 100ms ease-in;
          }

          form.form input::placeholder {
            color: #999;
          }

          form.form input:focus {
            outline: none;
            background: none;
            transition: border-color 100ms ease-in;
            border-color: var(--accents-8);
          }

          form.form input.flex:focus {
            border-color: var(--white);;
          }

          form.form input:disabled {
            color: #666;
          }

          form.form input::-ms-clear {
            display: none;
          }

          form.form button {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            padding: var(--gap-quarter) var(--gap-half);
            margin: calc(-1 * var(--gap-quarter)) calc(-1 * var(--gap-half));
            border-radius: var(--radius);
            color: var(--accents-3);
            background-color: var(--black);
            border: 1px solid var(--black);
            font-size: inherit;
            line-height: inherit;
            transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
            outline: none;
            height: 45px;
            margin: 10px 0;
            width: 100%;
            color: var(--white);
          }

          form.form button.flex {
            background-color: var(--accents-3);
            color: var(--black);
            width: 175px;
          }

          form.form button:focus,
          form.form button:hover {
            background-color: transparent;
            outline: none;
            border-color: var(--black);
            color: var(--black);
          }

          form.form button.flex:focus,
          form.form button.flex:hover {
            border-color: var(--accents-3);
            color: var(--accents-3);
          }

          @media (max-width: 640px) {
            form.form div.flex {
              display: flex;
              flex-direction: column;
              width: 80vw;
              align-items: center;
              justify-content: space-between;
            }
          }
          </style>
      </form>`
      }}
    />
  )
}
