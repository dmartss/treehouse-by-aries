import withPure from './hoc/pure'

export default withPure(({ description, margin, reverse, children }) => (
  <div>
    <style jsx>
      {`
        div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: ${margin || 0};
          text-align: ${reverse ? 'left' : 'right'};
          flex-direction: ${reverse ? 'row-reverse' : 'row'};
        }
        p {
          padding: var(--gap-double);
        }
        @media screen and (max-width: 960px) {
          div {
            flex-direction: column;
          }
        }
      `}
    </style>
    {children}
    <p className="f-reset mute fw4">{description}</p>
  </div>
))
