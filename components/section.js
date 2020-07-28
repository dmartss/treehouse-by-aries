import withPure from './hoc/pure'

export default withPure(({ description, margin, reverse, children }) => (
  <div>
    <style jsx>
      {`
        div {
          position: relative;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: space-between;
          margin: ${margin || 0};
          ${reverse ? 'flex-direction: row-reverse' : 'flex-direction: row'};
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
