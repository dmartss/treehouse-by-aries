import Container from 'components/container'
import SectionHeader from 'components/section-header'
import { NAME_SHORT } from 'lib/constants'

export default function Home() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="about">
      <Container center padding>
        <SectionHeader
          id="about"
          title={`About ${NAME_SHORT}`}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu."
        />
        <SectionHeader
          id="more"
          title="More"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum. Orci nulla pellentesque dignissim enim sit. Natoque penatibus et magnis dis
          parturient montes. Est velit egestas dui id ornare arcu odio ut. Fusce ut placerat orci
          nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing diam
          donec adipiscing tristique risus. In fermentum posuere urna nec tincidunt. Eget dolor
          morbi non arcu."
        />
      </Container>
    </Container>
  )
}
