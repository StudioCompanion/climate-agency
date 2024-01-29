import { styled } from 'styles/stitches.config'

import { CaseStudy, CaseStudyProps } from '../Cards/CaseStudy'

export interface CaseStudiesBlockProps {
  title?: string
  caseStudies: CaseStudyProps[][]
  className?: string
}

export const CaseStudiesBlock = ({
  title,
  caseStudies,
  className,
}: CaseStudiesBlockProps) => {
  return (
    <CaseStudiesBlockWrap className={className}>
    {title ? (
      <HeaderWrap>
        <TitleWrap>{title}</TitleWrap>
      </HeaderWrap>
    ) : null}
      <CaseStudiesGrid>
        {caseStudies.map((group, idx) => (
          <CaseStudiesGroupWrap key={idx}>
            <InnerCaseStudiesGroupWrap>
              {group.map((user) => (
                <CaseStudiesMemberWrap key={user.name}>
                  <CaseStudy {...user} />
                </CaseStudiesMemberWrap>
              ))}
            </InnerCaseStudiesGroupWrap>
          </CaseStudiesGroupWrap>
        ))}
      </CaseStudiesGrid>
    </CaseStudiesBlockWrap>
  )
}

const CaseStudiesBlockWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  rowGap: '$50',
  p: '$16',
  backgroundColor: '$yellow',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    rowGap: '$100',
    p: '$20',
  },
})

const HeaderWrap = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',

  '@tabletUp': {
    gridColumn: 'span 8',
    gap: '$20',
  },
  '@desktopUp': {
    gridColumn: 'span 6',
  },
})

const TitleWrap = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  letterSpacing: '$normal',

  '@tabletUp': {
    gridColumn: 'span 8',
    fontSize: '$L',
    lineHeight: '$L',
  },
})

const CaseStudiesGrid = styled('ol', {
  listStyleType: 'none',
  gridColumn: 'span 8',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '0',
  alignItems: 'flex-start',

  '@tabletUp': {
    gridColumn: 'span 12',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
  },
})

const CaseStudiesGroupWrap = styled('li', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 12',
  },
})

const InnerCaseStudiesGroupWrap = styled('ul', {
  gridColumn: 'span 8',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',

  '@tabletUp': {
    gridColumn: 'span 12',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
  },
})

const CaseStudiesMemberWrap = styled('li', {
  gridColumn: 'span 8',
  mb: '$40',
  backgroundColor: '$stone',
  transition: 'all linear 0.175s',

  '@tabletUp': {
    gridColumn: 'span 6',
    mb: '$28',
  },
  '@desktopUp': {
    gridColumn: 'span 4',
  },
})
