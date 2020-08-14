import Container from 'components/container'
import SectionHeader from 'components/section-header'
import { NAME_SHORT, TEXT } from 'lib/constants'
import Image from './image'

export default function Home() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="about">
      <Container center padding>
        <SectionHeader id="about" title={`About ${NAME_SHORT}`} description={TEXT[0]} />
        <Image
          shadow
          className="no-drag"
          oversize={false}
          alt="Room 1"
          src="/showcase/back/1.jpg"
          width={3000 / 4}
          height={2000 / 4}
        />
        <SectionHeader id="service" title="Service" description={TEXT[1]} />
        <SectionHeader id="Where it's at" title="Where it's at" description={TEXT[2]} />
      </Container>
    </Container>
  )
}
