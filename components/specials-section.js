import Button from 'components/button'

export default function SpecialsSection({ description, reverse, children, special }) {
  return (
    <div className="main">
      <style jsx>
        {`
          .main {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: ${reverse ? 'row-reverse' : 'row'};
            margin-top: var(--gap-double);
          }
          .content {
            margin: ${reverse ? `0 var(--gap-triple) 0 0` : `0 0 0 var(--gap-triple)`};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .content :global(a) {
            background-color: var(--accents-4);
            color: var(--white);
            border: 1px solid var(--accents-4);
            padding: var(--gap-quarter) var(--gap);
            margin: 0;
            align-self: center;
          }
          .content :global(a:focus),
          .content :global(a:hover) {
            background-color: transparent;
            color: var(--accents-1);
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
        <Button href="/specials">BOOK</Button>
      </div>
    </div>
  )
}
