import SectionHeader from 'components/section/section-header'
import { NAME, TEXT } from 'lib/constants'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <SectionHeader id="about" title={`About ${NAME[0]}`} description={TEXT[0]} />
      <Image
        className="image shadow radius"
        alt="Room 1"
        src="/showcase/about.jpg"
        width={1500}
        height={1000}
      />
      <SectionHeader id="service" title="Service" description={TEXT[1]} />
      <SectionHeader id="Where it's at" title="Where it's at" description={TEXT[2]} />
    </>
  )
}
