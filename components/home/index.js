import Container from 'components/container'
import { NAME_SHORT } from 'lib/constants'

export default function Home() {
  return (
    <Container role="main" padding wide center overflow>
      <Container>
        <img className="no-drag" src="/room.jpg" />
        <h3>Welcome to {NAME_SHORT}</h3>
      </Container>
    </Container>
  )
}
