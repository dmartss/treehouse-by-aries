export default function Container({
  center = false,
  dark = false,
  wide = false,
  padding = false,
  overflow = false,
  dotBackground = false,
  children,
  ...props
}) {
  return (
    <div {...props}>
      {/* prettier-ignore */}
      <style jsx>
        {`
      {
        width: 100%;
        margin: 0 auto;
        padding: ${padding ? 'var(--gap-double)' : '0'} ${wide ? '0' : 'var(--gap)'};
        ${!wide ?  'max-width: 1024px;' : ''}
        ${wide && !overflow ? 'overflow: hidden;' : ''}
        ${center ? 'text-align: center;' : ''}
        ${dark ? `
          background-color: var(--accents-1);
          color: var(--light-gray);`
           : ''}
        ${dotBackground ? `
            background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;`
            : ''}
      }
      :after {
        content: '';
        display: table;
        clear: both;
      }

      @media screen and (max-width: 960px) {
        div {
          padding: ${padding ? 'var(--small-gap)' : '0'} ${wide ? '0' : 'var(--gap-double)'};
        }
      }
      @media screen and (max-width: 640px) {
        div {
          padding: ${padding ? 'var(--small-gap)' : '0'} ${wide ? '0' : 'var(--gap)'};
        }
      }
    `}
      </style>
      {children}
    </div>
  )
}
