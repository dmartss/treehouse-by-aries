import Button from 'components/button'
import { REZTRIP_URL } from 'lib/constants'

export default function SpecialsSection({ description, reverse, children, special }) {
  return (
    <div className="main">
      <style jsx>
        {`
          .main {
            position: relative;
            display: flex;
            flex-direction: ${reverse ? 'row-reverse' : 'row'};
            margin-top: var(--gap-double);
          }
          .content {
            margin: ${reverse ? `0 var(--gap-triple) 0 0` : `0 0 0 var(--gap-triple)`};
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .content :global(a) {
            background-color: var(--accents-4);
            color: var(--white);
            border: 1px solid var(--accents-4);
            padding: var(--gap-quarter) var(--gap);
            margin: 0;
            align-self: center;
          }
          @media screen and (max-width: 960px) {
            .main {
              flex-direction: column;
              text-align: center;
            }
            .content {
              padding: 0 var(--gap);
              margin: 0;
            }
          }
        `}
      </style>
      {children}
      <div className="content">
        <h2 className="mute fw4">{special}</h2>
        <p className="f-reset subtitle fw4">{description}</p>
        <Button invert href={REZTRIP_URL}>
          Book
        </Button>
      </div>
    </div>
  )
}
