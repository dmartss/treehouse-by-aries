import Container from 'components/container'
import { images } from 'lib/rooms'
import Image from './image'

const imgWidth = 300
const imgHeight = 200

export default function Photos() {
  return (
    <Container role="main" wide dotBackground>
      <Container center padding>
        <div className="images">
          {images.map(src => (
            <Image
              key={src}
              className="no-drag no-tap-highlight"
              margin={20}
              shadow
              alt={src}
              src={`/images${src}`}
              layout="responsive"
              width={imgWidth}
              height={imgHeight}
            />
          ))}

          <style jsx>{`
            .images {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
            }

            @media (max-width: 960px) {
              .images {
                grid-template-columns: auto;
              }
              .images > :global(figure):nth-last-child(1):nth-child(even) {
                grid-column: 1;
              }
            }
          `}</style>
        </div>
      </Container>
    </Container>
  )
}
