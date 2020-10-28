import Container from 'components/container'
import Page from 'components/page'
import Home from 'components/home'

export default function HomePage() {
  return (
    <Page title="Home">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Home />
        </Container>
      </Container>
    </Page>
  )
}
