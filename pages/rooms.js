import fs from 'fs'
import path from 'path'
import { matches } from 'lib/constants'
import Page from 'components/page'
import Container from 'components/container'
import Rooms from 'components/rooms'

export default function RoomsPage({ images }) {
  return (
    <Page title="Rooms">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Rooms images={images} />
        </Container>
      </Container>
    </Page>
  )
}

export const getStaticProps = () => {
  const images = fs
    .readdirSync('./public/showcase-thumbnails/')
    .filter(file => path.extname(file) === '.jpg')
    .reduce((prev, curr) => {
      matches.forEach(match => {
        if (curr.includes(match)) prev.push(curr)
      })
      return prev
    }, [])

  return {
    props: { images }
  }
}
