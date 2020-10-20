import EmailClosedIcon from './icons/email-closed'
import { renderToString } from 'react-dom/server'

const Icon = renderToString(<EmailClosedIcon height="15" width="15" fill="currentColor" />)

export default function EmailForm({ banner }) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script type="text/javascript" src="//contact-api.inguest.com/bundles/revinatecontactapi/js/revinate-form.js?v=1"></script>
          <form class="form" id="revinate_contact_api_form" token="${token}"
                onsubmit="revFormOnSubmit(); event.preventDefault();">
            <div class=${banner ? 'banner' : 'div'}>
              <div>
                <label class="label">
                  <span class="icon">
                  ${Icon}
                </span>
                <input placeholder="you@domain.com" class=${
                  banner ? 'banner' : ''
                } type="email" name="email" required/>
              </div>
              </label>
              <div class="button">
                <button class=${banner ? 'banner' : ''} type="submit">Subscribe</button>
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
            display: inline-flex;
            margin: 0 14px;
          }

          form.form div {
            width: 240px;
            max-width: 100%;
            text-align: center;
            margin: auto;
          }

          form.form div.banner {
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
            color: var(--white);
            border: none;
            border-radius: 0;
          }

          form.form input.banner {
            color: #fff;
          }

          form.form input::placeholder {
            color: #999;
            transition: color 200ms ease-in-out;
          }

          form.form input:focus::placeholder {
            color: var(--white);
          }

          form.form label:focus-within,
          form.form label:hover {
            transition: border-color 200ms ease-in-out;
            border-color: var(--accents-3);
          }

          form.form label:focus-within input {
            outline: none;
            background: none;
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
            background-color: var(--white);
            border: 1px solid var(--white);
            font-size: inherit;
            line-height: inherit;
            transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
            outline: none;
            height: 45px;
            margin: 10px 0;
            width: 100%;
            color: var(--black);
          }

          form.form button.banner {
            background-color: var(--accents-3);
            color: #fff;
            border: 1px solid var(--accents-3);
            width: 175px;
          }

          form.form button:focus,
          form.form button:hover {
            background-color: transparent;
            outline: none;
            border-color: var(--white);
            color: var(--white);
          }

          form.form button.banner:focus,
          form.form button.banner:hover {
            border-color: var(--accents-3);
            color: var(--accents-3);
          }

          @media (max-width: 640px) {
            form.form div.banner {
              display: flex;
              flex-direction: column;
              width: 80vw;
              align-items: center;
              justify-content: space-between;
            }
            form.form button.banner {
              width: 100%;
            }
          }
          </style>
      </form>`
      }}
    />
  )
}
