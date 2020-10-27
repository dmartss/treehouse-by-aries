import SectionHeader from 'components/section-header'
import { NAME, TEXT } from 'lib/constants'
import Container from 'components/container'
import Image from 'next/image'
import Page from 'components/page'

export default function About() {
  return (
    <Page title="About">
      <Container role="main" dotBackground>
        <Container center padding>
          <SectionHeader id="about" title={`About ${NAME[0]}`} description={TEXT[0]} />
          <Image
            className="image shadow radius"
            alt="Room 1"
            src="/showcase/back/1.jpg"
            width={3000 / 3.25}
            height={2000 / 3.25}
          />
          <SectionHeader id="service" title="Service" description={TEXT[1]} />
          <SectionHeader id="Where it's at" title="Where it's at" description={TEXT[2]} />
        </Container>
      </Container>
    </Page>
  )
}
