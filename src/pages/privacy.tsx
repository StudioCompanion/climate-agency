import { styled } from 'styles/stitches.config'

import { Link, LinkProps } from '../components/Links/Link'

const linkSophie = {
  href: `mailto:sophie@climateagency.net`,
  children: `sophie@climateagency.net`,
  color: 'transparent',
  isExternal: true,
} as LinkProps

const linkIco = {
  href: `https://ico.org.uk`,
  children: `ico.org.uk`,
  color: 'transparent',
  isExternal: true,
} as LinkProps

const Privacy = () => {
  return (
    <PrivacyWrap>
      <Title> The Climate Agency Privacy Policy</Title>
      <ContentWrap>
        <Subtitle>How we use your information</Subtitle>
        <Paragraph>
          <SubParagraph>
            When you contact us to work with us on a project, or to discuss a
            future partnership, we ask you to give us some of your personal
            details so that we can prepare a proposal or contract for you. We
            are committed to keeping all the information we hold about you
            secure, private and confidential. This information explains why we
            need to collect your personal details and what we do with it. It
            also sets out the legal basis on which we collect and use your
            information and outlines the rights you have under current data
            protection legislation.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Which of my details do you collect?</Subtitle>
        <Paragraph>
          <SubParagraph>
            We ask for your full name (title, forename(s) and surname), postal
            address, phone number and email address. We need this personal
            information so that we can provide you with the service that you
            have asked for. If you don’t provide it, then we won’t be able to
            provide you with our services.
          </SubParagraph>
        </Paragraph>
        <Subtitle>When do you collect these details?</Subtitle>
        <Paragraph>
          <SubParagraph>
            We will collect them when you make your initial enquiry with us, by
            phone or in person. We also collect some of your details whenever
            you make a transfer to us, such as a note of the name a bank
            transfer for an invoice payment is received from. This can be online
            by phone, by post, by email or secure message.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Using our website, email & social media?</Subtitle>
        <Paragraph>
          <SubParagraph>
            We only use cookie or other tracking technologies to collect
            information related to performance and usage.
          </SubParagraph>
          <SubParagraph>
            We may also use posts on social media to find out how people view
            our services.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Providing details on behalf of someone else</Subtitle>
        <Paragraph>
          <SubParagraph>
            When you give us details about someone else, you must have their
            agreement to do so.
          </SubParagraph>
        </Paragraph>
        <Subtitle>What do you do with my information?</Subtitle>
        <Paragraph>
          <SubParagraph>
            The main reasons we use your information are to create our working
            agreements, process your payments, and keep you up to date with
            information about your contract with us, or projects we are working
            on together for the future.
          </SubParagraph>
          <SubParagraph>We may also use your information to:</SubParagraph>
          <SubParagraph>
            <ParagraphList>
              <li>
                meet our legal obligation to check your identity and address.
              </li>
              <li>prevent or detect fraud or other crime.</li>
              <li>
                develop, test and improve our products, systems and services.
              </li>
              <li>invite you to take part in market research and surveys.</li>
              <li>
                carry out anonymous statistical analysis (we won't be able to
                identify individuals when we do this).
              </li>
            </ParagraphList>
          </SubParagraph>
        </Paragraph>
        <Subtitle>Who do you share my details with?</Subtitle>
        <Paragraph>
          <SubParagraph>
            We use selected organisations to help us deliver the service we
            provide to you. We may share your personal information with:
          </SubParagraph>
          <SubParagraph>
            <ParagraphList>
              <li>
                Our service providers who provide sub-contracting services to
                us, for example helping to administer your contract, printing
                and sending warranties and statements to you, and sending you
                emails about your contract. We only share the information that's
                necessary for them to provide their services.
              </li>
              <li>
                Credit reference agencies to check your identity, address and to
                prevent fraud. We may also share your information with
                government bodies, law enforcement agencies, courts or other
                third parties to comply with our legal obligations or lawful
                disclosure requests, for example.
              </li>
            </ParagraphList>
          </SubParagraph>
        </Paragraph>
        <Subtitle>How long do you keep my information for?</Subtitle>
        <Paragraph>
          <SubParagraph>
            We keep your personal information where we have an ongoing
            legitimate or lawful need to do so.
          </SubParagraph>
          <SubParagraph>
            For example, we keep some records for audit purposes for up to seven
            years after completing our contract with you. When we no longer have
            a legitimate or lawful need to keep your personal information, we
            will delete it.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Do you send my information outside Europe?</Subtitle>
        <Paragraph>
          <SubParagraph>
            The UK are no longer part of Europe but an understanding has been
            met that to all intents and purposes the EU-GDPR and UK-GDPR will
            run parallel with each other for the medium term.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Keeping each other informed</Subtitle>
        <Paragraph>
          <SubParagraph>
            We will give you information about your contract and provide regular
            invoice statements. If we need to get in touch, we will call you,
            write to you by email or letter or send you a text message. In the
            event of a data breach that could lead to a high risk to your rights
            and freedoms, for example the risk of financial loss, we will let
            you know as soon as we reasonably can.
          </SubParagraph>
          <SubParagraph>
            To make sure you can receive information and communications from us,
            please make sure you tell us whenever you change your name, address,
            phone number or email address. Giving us your most up to date
            details will also help protect your contract by making sure any
            information we send you doesn't fall into the wrong hands. You can
            update your details by contacting us.
          </SubParagraph>
        </Paragraph>
        <Subtitle>The legal background & your rights</Subtitle>
        <Paragraph>
          <SubParagraph>
            Here we summarise the lawful basis on which we collect and use your
            information and outline the rights you have under current data
            protection legislation.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Contract</Subtitle>
        <Paragraph>
          <SubParagraph>
            We need to collect and use your personal information to be able to
            provide you with the services that you have requested. We cannot
            provide the service if you don't give us the information we ask for.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Legal obligation</Subtitle>
        <Paragraph>
          <SubParagraph>
            We may need to use your personal information to meet our legal
            obligations, for example if we need to check your identity and
            address to comply with the Money Laundering Regulations.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Legitimate interests</Subtitle>
        <Paragraph>
          <SubParagraph>
            We have a legitimate interest in promoting our services. For this
            reason, we may use your personal details to, for example, send you
            marketing information about our contract or services that we think
            you may be interested in. You can ask us to stop sending you
            marketing at any time.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Consent</Subtitle>
        <Paragraph>
          <SubParagraph>
            We only rely on consent as a lawful basis for using your personal
            information in a few limited circumstances, for example if you ask
            us to share your contract information with an authorised third party
            that wishes to provide services to your contract.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Public task</Subtitle>
        <Paragraph>
          <SubParagraph>
            There are times when we need to share information with other
            government bodies to allow them to meet their legal obligations.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Your rights</Subtitle>
        <Paragraph>
          <SubParagraph>
            You have a range of data protection rights in relation to the
            information we hold about you. You can exercise any of these rights
            by contacting us. Note that not all of the rights are absolute –
            some of them depend on which lawful basis we are using to process
            your information.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Right of access</Subtitle>
        <Paragraph>
          <SubParagraph>
            You can ask us to provide you with a copy of the information we hold
            about you by making a 'Data Subject Access Request' contact us via
            our email.
          </SubParagraph>
          <SubParagraph></SubParagraph>
        </Paragraph>
        <Subtitle>Right to data portability</Subtitle>
        <Paragraph>
          <SubParagraph>
            Where we process your personal information for contractual purposes,
            or with your consent, you can ask us to provide the information we
            hold about you in a structured, machine readable format (for example
            a CSV file).
          </SubParagraph>
        </Paragraph>
        <Subtitle>Right to rectification</Subtitle>
        <Paragraph>
          <SubParagraph>
            If the information we hold about you is incorrect, out of date or
            incomplete, please let us know and we will put it right.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Right to restrict processing</Subtitle>
        <Paragraph>
          <SubParagraph>
            If you think the information we hold about you isn't accurate, you
            can ask us not to process it until we have corrected any errors or
            verified that the information is accurate.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Right to erasure</Subtitle>
        <Paragraph>
          <SubParagraph>
            You can ask us to delete your personal information when:
          </SubParagraph>
          <SubParagraph>
            <ParagraphList>
              <li>we no longer need it.</li>
              <li>you have given us consent and you later withdraw it.</li>
              <li>
                you have objected to us processing your information and we have
                no lawful basis to do so.
              </li>
              <li>we are legally obliged to delete it.</li>
            </ParagraphList>
          </SubParagraph>
        </Paragraph>
        <Subtitle>Right to object</Subtitle>
        <Paragraph>
          <SubParagraph>
            Where we have a legitimate interest or a public interest in
            processing your personal information, you can object to this.
          </SubParagraph>
        </Paragraph>
        <Subtitle>
          Right not to be subject to automated decision-making
        </Subtitle>
        <Paragraph>
          <SubParagraph>
            Some of our processes are partly or wholly automated, but we don't
            make decisions that have a significant or legal effect without human
            involvement. For example, we may check your evidence of identity
            electronically, but if this is unsuccessful we will write to you to
            ask for documentary evidence instead.
          </SubParagraph>
        </Paragraph>
        <Subtitle>
          Right to lodge a complaint with a supervisory authority
        </Subtitle>
        <Paragraph>
          <SubParagraph>
            If you have a complaint about the way we have used your information,
            please contact us first and we will do our best to put things right
            for you. If you are not happy with our response, you can escalate
            your complaint to the Information Commissioner's Office (ICO).
          </SubParagraph>
        </Paragraph>
        <Subtitle>Changes to how we use your information</Subtitle>
        <Paragraph>
          <SubParagraph>
            From time to time we may update this privacy notice. You can see the
            latest version on our website or call or email us and we can send
            you a copy. If we make a significant change to how we use your
            information, we will let you know in advance.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Data protection questions or concerns?</Subtitle>
        <Paragraph>
          <SubParagraph>
            Sophie Gallois is the data controller of the information we hold
            about you. If you have any questions or concerns about how we
            process your information, you can contact us at{' '}
            <LinkWrap {...linkSophie} /> or write to: Flat 105, Union Wharf, 23
            Wenlock Road N1 7 SE London.
          </SubParagraph>
        </Paragraph>
        <Subtitle>Want to find out more?</Subtitle>
        <Paragraph>
          <SubParagraph></SubParagraph>
          <SubParagraph></SubParagraph>
          <SubParagraph></SubParagraph>
        </Paragraph>
        <Subtitle></Subtitle>
        <Paragraph>
          <SubParagraph>
            You can find out more about data protection and the rights you have
            by contacting the independent Information Commissioner's Office:{' '}
            <LinkWrap {...linkIco} />
          </SubParagraph>
          <SubParagraph></SubParagraph>
          <SubParagraph></SubParagraph>
        </Paragraph>
      </ContentWrap>
    </PrivacyWrap>
  )
}

export default Privacy

const PrivacyWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',
  mt: '0',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const Title = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XXL',
  lineHeight: '$XXL',
  gridColumn: 'span 8',
  mb: '$60',

  '@tabletUp': {
    pl: '$30',
    mb: '$110',
  },
})

const ContentWrap = styled('div', {
  gridColumn: 'span 8',
  mb: '$80',

  '@tabletUp': {
    gridColumn: '5 / span 4',
    mb: '$120',
  },
})

const Subtitle = styled('h3', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: 'span 8',
  mb: '$40',
})

const Paragraph = styled('div', {
  gridColumn: 'span 8',
  mb: '$40',

  '@tabletUp': {
    gridColumn: '5 / span 4',
  },
})

const SubParagraph = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  mb: '$20',
})

const LinkWrap = styled(Link, {
  display: 'inline',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  p: '0',
})

const ParagraphList = styled('ul', {
  listStyleType: 'disc',
  ml: '$16',

  '& > * + *': {
    mt: '$8',
  },
})
