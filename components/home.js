import Container from 'components/container'
import SectionHeader from 'components/section-header'
import Section from 'components/section'
import { NAME_SHORT } from 'lib/constants'
import Image from './image'

export default function Home() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="welcome">
      <Container center padding>
        <Image
          shadow
          className="no-drag no-tap-highlight"
          oversize={false}
          alt="Room 1"
          src="/images/room-1.jpg"
          width={3000 / 2}
          height={2000 / 2}
        />
        <SectionHeader
          id="welcome"
          title={`Welcome to ${NAME_SHORT}`}
          className="no-drag no-tap-highlight"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu."
        />
        <Section
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu."
        >
          <Image
            shadow
            className="no-drag no-tap-highlight"
            alt="Room 2"
            src="/images/room-2.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
        </Section>
        <Section
          reverse
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu."
        >
          <Image
            shadow
            className="no-drag no-tap-highlight"
            alt="Room 3"
            src="/images/room-3.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
        </Section>
      </Container>
    </Container>
  )
}
