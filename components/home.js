import SectionHeader from 'components/section/section-header'
import Section from 'components/section'
import { NAME, TEXT } from 'lib/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        className="image shadow radius"
        alt="Room 1"
        src="/showcase/home-1.jpg"
        width={2000}
        height={1333}
        priority
      />
      <SectionHeader id="welcome" title={`Welcome to ${NAME[0]}`} description={TEXT[0]} />
      <Section
        description={TEXT[1]}
        alt="Room 2"
        src="/showcase/home-2.jpg"
        width={1500}
        height={1000}
      />
      <Section
        reverse
        description={TEXT[2]}
        alt="Room 3"
        src="/showcase/about.jpg"
        width={1500}
        height={1000}
      />
    </>
  )
}
