import Container from 'components/container'

export default function Home() {
  return (
    <Container role="main" wide center overflow>
      <Container>
        <img className="no-drag" src="/room.jpg" />
      </Container>
    </Container>
  )
}
