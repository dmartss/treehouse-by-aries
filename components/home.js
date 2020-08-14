import Container from 'components/container'
import SectionHeader from 'components/section-header'
import Section from 'components/section'
import { NAME_SHORT, TEXT } from 'lib/constants'
import Image from './image'

export default function Home() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="welcome">
      <Container center padding>
        <Image
          shadow
          className="no-drag"
          oversize={false}
          alt="Room 1"
          src="/showcase/rooms/ql/1.jpg"
          width={3000 / 2}
          height={2000 / 2}
        />
        <SectionHeader id="welcome" title={`Welcome to ${NAME_SHORT}`} description={TEXT[0]} />
        <Section
          description={TEXT[1]}
          alt="Room 2"
          src="/showcase/front/1.jpg"
          width={3000 / 6}
          height={2000 / 6}
        />
        <Section
          reverse
          description={TEXT[2]}
          alt="Room 3"
          src="/showcase/back/1.jpg"
          width={3000 / 6}
          height={2000 / 6}
        />
      </Container>
    </Container>
  )
}
