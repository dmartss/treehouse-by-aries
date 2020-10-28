import Container from 'components/container'
import Page from 'components/page'
import About from 'components/about'

export default function AboutPage() {
  return (
    <Page title="About">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <About />
        </Container>
      </Container>
    </Page>
  )
}
