import Container from 'components/container'
import SectionHeader from 'components/section-header'
import SpecialsSection from 'components/specials-section'
import Image from './image'
import { PHONE } from 'lib/constants'

export default function Home() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="specials">
      <Container center padding>
        <SectionHeader
          id="specials"
          title="Specials"
          description={`Attitude-Free Pricing & Packages`}
        />
        <div className="paragraph">
          <p className="subtitle">
            Transformed from an American motel classic to an uber-chic, boutique urban oasis, The
            Vagabond Hotel Miami is bringing back stylish highly-personalized service to the
            Biscayne Boulevard corridor! Throughout the year, you'll find unique Miami experiences
            like Art Basel, Miami Boat and Auto Show, Miami Book Fair International, South Beach
            Food and Wine Festival, and more. Go ahead and call dibs on one while you still can…
          </p>
          <p className="subtitle">
            WE MAKE IT SUPER QUICK, EASY AND CONVENIENT. During these challenging times, we know
            flexibility is key so don't worry we've got you covered! Reservations for future
            arrivals through November 30, 2020 can be changed or cancelled without charge up to 24
            hours before the scheduled arrival date. However, please note that changes to
            reservations will be subject to availability and rate differences. We are always only a
            phone call away at {PHONE}
          </p>
        </div>
        <SpecialsSection
          special="Advance Purchase - Non Refundable"
          description="Last-minute travel is great, but why not plan ahead and take advantage of our Non - Refundable Advance Purchase Special.  Book at least 42 days in advance and Save 10% off your entire stay.  Black-out dates apply,  December 1 st - 8 th and December 27 th - January 1 st.
          And it gets even better! This promotion can be combined with our Stay More and Save specials, allowing you to save up to 25% off eligible stays.  Promotion Includes: complimentary wifi, parking and 2 bottles of water daily."
        >
          <Image
            shadow
            className="no-drag no-tap-highlight"
            alt="Room QD 1"
            src="/images/rooms/qd/1.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
        </SpecialsSection>
        <SpecialsSection
          reverse
          special="Stay 6 Nights and Save 15%"
          description="Last-minute travel is great, but why not plan ahead and take advantage of our Non - Refundable Advance Purchase Special.  Book at least 42 days in advance and Save 10% off your entire stay.  Black-out dates apply,  December 1 st - 8 th and December 27 th - January 1 st.
          And it gets even better! This promotion can be combined with our Stay More and Save specials, allowing you to save up to 25% off eligible stays.  Promotion Includes: complimentary wifi, parking and 2 bottles of water daily"
        >
          <Image
            shadow
            className="no-drag no-tap-highlight"
            alt="Room QL 1"
            src="/images/rooms/ql/1.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
        </SpecialsSection>
      </Container>
      <style jsx>
        {`
          .paragraph {
            border-top: 1px solid var(--accents-3);
            border-bottom: 1px solid var(--accents-3);
            padding: var(--gap-double);
          }
        `}
      </style>
    </Container>
  )
}
