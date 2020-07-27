import Container from 'components/container'
import { NAME_SHORT } from 'lib/constants'

export default function Home() {
  return (
    <Container role="main" padding wide center overflow dotBackground>
      <Container>
        <img className="no-drag no-tap-highlight" src="/room.jpg" />
        <div className="intro-container no-drag no-tap-highlight">
          <h3 className="mute fw3">Welcome to {NAME_SHORT}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
            dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
            parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
            nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
            donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
            morbi non arcu.
          </p>
        </div>
      </Container>
      <style jsx>{`
        .intro-container {
          padding: 3rem 0;
          overflow: visible;
        }
      `}</style>
    </Container>
  )
}
