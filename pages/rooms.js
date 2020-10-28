import Page from 'components/page'
import Container from 'components/container'
import Rooms from 'components/rooms'

export default function RoomsPage() {
  return (
    <Page title="Rooms">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Rooms />
        </Container>
      </Container>
    </Page>
  )
}
