import Container from 'components/container'
import Page from 'components/page'
import Photos from 'components/photos'
import fs from 'fs'
import path from 'path'

export default function PhotosPage({ images }) {
  return (
    <Page title="Photos">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Photos images={images} />
        </Container>
      </Container>
    </Page>
  )
}

export const getStaticProps = () => {
  const images = fs
    .readdirSync('./public/showcase-thumbnails/')
    .filter(file => path.extname(file) === '.jpg')
  return {
    props: { images }
  }
}
