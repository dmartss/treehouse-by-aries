import Container from 'components/container'
import Image from 'next/image'
import Page from 'components/page'
import rooms from 'lib/rooms'

export default function Rooms() {
  return (
    <Page title="Rooms">
      <Container role="main" dotBackground>
        <Container center padding>
          {rooms.map(
            ({ name, type, occupancy, quantity, description, images }) =>
              description && (
                <div className="room" key={name}>
                  <h3 className="fs fw3">{name}</h3>
                  <div className="info fp">
                    <h5 className="fw4">Type: {type}</h5>
                    <h5 className="fw4">Occupancy: {occupancy}</h5>
                    <h5 className="fw4"># of Rooms: {quantity}</h5>
                  </div>
                  <h5 className="fs fw4">{description}</h5>
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
                  </div>
                  <style jsx>{`
                    .room {
                      padding-bottom: var(--gap-double);
                    }
                    .room:not(:first-of-type) {
                      border-top: 1px solid var(--accents-3);
                      padding-top: var(--gap-double);
                    }
                    .info {
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    }
                    .info > h5 {
                      flex: 1;
                    }
                    .images {
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      grid-row-gap: 20px;
                      grid-column-gap: 10px;
                    }
                  `}</style>
                </div>
              )
          )}
        </Container>
      </Container>
    </Page>
  )
}
