import withPure from './hoc/pure'

export default withPure(({ id, title, description, className, margin = '0 0 5rem 0' }) => (
  <div className={className}>
    <style jsx>
      {`
        h2 {
          letter-spacing: -1px;
          margin-top: var(--gap-double);
        }
        div {
          position: relative;
          text-align: center;
          margin: ${margin};
        }
        @media screen and (max-width: 640px) {
          div {
            padding: 0 var(--gap);
          }
        }
      `}
    </style>
    <h2 id={id} className="mute fw3">
      {title}
    </h2>
    {description && <p className="f-reset subtitle fw4">{description}</p>}
  </div>
))
