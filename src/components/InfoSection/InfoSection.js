import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../GlobalStyles'
import {
    InfoSec, InfoRow, InfoColumn, TextWrapper,
    TopLine, Heading, Subtitle,
    ImgWrapper, Img
} from './InfoSections.elements'


const InfoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headLine,
    lightText,
    topLine,
    img,
    alt,
    start }) => {
    return (
        <div>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </div>
    )
}

export default InfoSection
