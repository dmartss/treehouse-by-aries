import Container from 'components/container'
import Image from 'components/image'
import Page from 'components/page'
import { images } from 'lib/rooms'

const imgWidth = 300
const imgHeight = 200

export default function Photos() {
  return (
    <Page title="Photos">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <div className="images">
            {images.map(({ src, alt }) => (
              <Image
                key={src}
                className="no-drag"
                shadow
                margin={20}
                alt={alt}
                src={src}
                width={imgWidth}
                height={imgHeight}
                layout="responsive"
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
    </Page>
  )
}
