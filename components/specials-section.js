import Button from 'components/button'
import { REZTRIP_URL } from 'lib/constants'
import Image from './image'

export default function SpecialsSection({
  description,
  reverse,
  special,
  alt,
  src,
  width,
  height
}) {
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
      <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
      <div className="content">
        <h2 className="fp fw4">{special}</h2>
        <p className="f-reset fs fw4">{description}</p>
        <Button invert target="_blank" href={REZTRIP_URL}>
          Book
        </Button>
      </div>
    </div>
  )
}
