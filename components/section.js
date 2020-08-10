export default function Section({ description, reverse, children }) {
  return (
    <div>
      <style jsx>
        {`
          div {
            position: relative;
            display: flex;
            justify-content: space-between;
            text-align: ${reverse ? 'left' : 'right'};
            flex-direction: ${reverse ? 'row-reverse' : 'row'};
          }
          p {
            margin: ${reverse ? `0 var(--gap-triple) 0 0` : `0 0 0 var(--gap-triple)`};
            align-self: center;
          }
          @media screen and (max-width: 960px) {
            div {
              flex-direction: column;
              text-align: center;
            }
            p {
              padding: 0 var(--gap);
              margin: 0;
            }
          }
        `}
      </style>
      {children}
      <p className="f-reset mute fw4">{description}</p>
    </div>
  )
}
