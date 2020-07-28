import withPure from './hoc/pure'

export default withPure(({ description, margin = '0 0 5rem 0', reverse, children }) => (
  <div>
    <style jsx>
      {`
        div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          ${reverse ? 'flex-direction: row-reverse' : 'flex-direction: row'};
          text-align: center;
          margin: ${margin};
        }
        p {
          padding: var(--gap-double);
        }
        @media screen and (max-width: 640px) {
          div {
            padding: 0 var(--gap);
          }
        }
      `}
    </style>
    {children}
    {description && <p className="f-reset mute fw4">{description}</p>}
  </div>
))
