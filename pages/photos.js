import Container from 'components/container'
import Image from 'next/image'
import Page from 'components/page'
import { images } from 'lib/rooms'

export default function Photos() {
  return (
    <Page title="Photos">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <div className="images">
            {images.map(({ src, alt }) => (
              <Image
                key={src}
                className="image shadow radius"
                src={src}
                alt={alt}
                width={300}
                height={200}
              />
            ))}

            <style jsx>{`
              .images {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-row-gap: 20px;
                grid-column-gap: 10px;
              }

              @media (max-width: 960px) {
                .images {
                  grid-template-columns: auto;
                }
              }
            `}</style>
          </div>
        </Container>
      </Container>
    </Page>
  )
}
