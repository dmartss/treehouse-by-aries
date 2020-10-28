import Container from 'components/container'
import Page from 'components/page'
import Specials from 'components/specials'

export default function SpecialsPage() {
  return (
    <Page title="Specials">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Specials />
        </Container>
      </Container>
    </Page>
  )
}
