import React from 'react'
import { Button } from '../../GlobalStyles'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form, FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIconLink,
    WebsiteRights,
    SocialIcons
}
from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to
                    recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <FooterSubText>
                    <Form>
                        <FormInput
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                            <Button fontBig >Subscribe</Button>
                    </Form>
                </FooterSubText>
            </FooterSubscription>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                            About Us
                        </FooterLinksTitle>
                        <FooterLink to='/sign-up'> How it works</FooterLink>
                        <FooterLink to='/'> Testimonials</FooterLink>
                        <FooterLink to='/'> Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                            Contact Us
                        </FooterLinksTitle>
                        <FooterLink to='/'> Contact </FooterLink>
                        <FooterLink to='/'> Support</FooterLink>
                        <FooterLink to='/'> Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                            Videos
                        </FooterLinksTitle>
                        <FooterLink to='/'> Submit Video</FooterLink>
                        <FooterLink to='/'> Ambassadors</FooterLink>
                        <FooterLink to='/'> Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                            Social Media
                        </FooterLinksTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>Ultra &#169; 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank'
                            aria_label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria_label='Intagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria_label='Youtube' rel='noopener noreferrer'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria_label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
