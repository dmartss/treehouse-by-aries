import Container from 'components/container'
import rooms from 'lib/rooms'
import Image from './image'

const imgWidth = 300
const imgHeight = 200

export default function Rooms() {
  return (
    <Container role="main" wide dotBackground>
      <Container center padding>
        {rooms.map(({ name, type, occupancy, quantity, description, images }) => (
          <div className="room" key={name}>
            <h3 className="mute fw3">{name}</h3>
            <div className="info title">
              {type && <h5 className="fw4">Type: {type}</h5>}
              {occupancy && <h5 className="fw4">Occupancy: {occupancy}</h5>}
              {quantity && <h5 className="fw4"># of Rooms: {quantity}</h5>}
            </div>
            {description && <h5 className="mute fw4">{description}</h5>}
            <div className="images">
              {images.map(({ src }) => (
                <Image
                  key={src}
                  className="no-drag no-tap-highlight"
                  margin={10}
                  shadow
                  alt={src}
                  src={`/images${src}`}
                  layout="responsive"
                  width={imgWidth}
                  height={imgHeight}
                />
              ))}
            </div>
            <style jsx>{`
              .room {
                padding-bottom: var(--gap-double);
              }
              .room:not(:first-of-type) {
                border-top: 1px solid #efefef;
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
                grid-template-columns: ${images.length >= 3 ? 'repeat(3, 1fr)' : 'auto'};
              }

              .images > :global(figure):nth-last-child(1):nth-child(even) {
                grid-column: 2;
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
        ))}
      </Container>
    </Container>
  )
}
