import { SPECIALS, DESCRIPTIONS, TEXT } from 'lib/constants'
import SpecialsSection from './specials-section'
import SectionHeader from 'components/section-header'
import styles from './specials.module.css'

export default function Specials() {
  return (
    <>
      <SectionHeader
        id="specials"
        title="Specials"
        description="Attitude-Free Pricing & Packages"
      />
      <div className={styles.paragraph}>
        <p className="fs">{TEXT[0]}</p>
        <p className="fs">{TEXT[1]}</p>
        <p className="fs">{TEXT[2]}</p>
      </div>
      <SpecialsSection
        special={SPECIALS[0]}
        description={DESCRIPTIONS[0]}
        alt="Room QD 1"
        src="/showcase/rooms/qd/1.jpg"
      />
      <SpecialsSection
        reverse
        special={SPECIALS[1]}
        description={DESCRIPTIONS[1]}
        alt="Room QL 1"
        src="/showcase/rooms/ql/1.jpg"
      />
      <SpecialsSection
        special={SPECIALS[2]}
        description={DESCRIPTIONS[2]}
        alt="Room FR 1"
        src="/showcase/rooms/fr/1.jpg"
      />
    </>
  )
}
