import SectionHeader from 'components/section-header'
import Container from 'components/container'
import Page from 'components/page'
import Image from 'components/image'
import { NAME_SHORT, TEXT } from 'lib/constants'

export default function About() {
  return (
    <Page title="About">
      <Container role="main" wide dotBackground aria-labelledby="about">
        <Container center padding>
          <SectionHeader id="about" title={`About ${NAME_SHORT}`} description={TEXT[0]} />
          <Image
            shadow
            className="no-drag"
            oversize={false}
            alt="Room 1"
            src="/showcase/back/1.jpg"
            width={3000 / 3.25}
            height={2000 / 3.25}
          />
          <SectionHeader id="service" title="Service" description={TEXT[1]} />
          <SectionHeader id="Where it's at" title="Where it's at" description={TEXT[2]} />
        </Container>
      </Container>
      )
    </Page>
  )
}
