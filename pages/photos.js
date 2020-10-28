import Container from 'components/container'
import Page from 'components/page'
import Photos from 'components/photos'

export default function PhotosPage() {
  return (
    <Page title="Photos">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Photos />
        </Container>
      </Container>
    </Page>
  )
}
