import React from 'react';
import { Container, Link, Typography } from '@mui/material';
import styled from '@mui/system/styled';

import svg from '../data/noise.svg';

const AboutWrapper = styled('div')(({ theme }) => ({
    color: theme.palette.greys.grey600,
    marginBottom: 100,
    marginTop: 100,
    filter: 'contrast(120%) brightness(115%)',
    background:
        `linear-gradient(-55deg, rgba(255, 205, 105,0.3), rgba(255, 155, 155,0.3),rgba(255, 205, 105,0.3)),
    url('${svg}')`,
}));

const About = () => {
    return (
        <Container sx={{ maxWidth: { xs: '100vw', md: '90%', lg: '80%' }, p: 0, mr: { xs: 0, md: 2, lg: 4 } }}>
            <AboutWrapper id="aboutSection">
                <Typography sx={{ m: 0, mt: 3, py: 3, pl: { xs: 2, md: 3, lg: 4 }, pr: { xs: 1, md: 2 } }} variant="h5" textAlign="right">
                    <p>
                        Hi!
                        I am what you might call an "aspiring" coder.
                        I've started to code a good year ago, realized it was even more fun than expected,
                        and decided to turn my career around. As of now (Feb 2022), I'm looking for my first job or internship
                        as a front-end developer.
                    </p>
                    <p>
                        My education includes courses focused on JavaScript and Node.js
                        (<Link href="https://www.incopolska.org/incode">INCODE</Link>)
                        or React.js (<Link href="https://szkolareacta.pl/zapisy/">React School</Link> (PL))
                        and countless hours spent tinkering with my own projects.
                    </p>
                    <p>
                        I'm currently participating in <Link href="https://challenges.dareit.io/">Dare IT: Portfolio Challenge</Link> programme and eagerly learning TypeScript.<br />
                    </p>
                    <p>
                        Web development will be a new path in my career life - up till now, I've worked as a Polish translator with English
                        and Japanese. A list of my literary translations is available <Link href="https://www.goodreads.com/author/show/17193907.Anna_Karpiuk?from_search=true&from_srp=true">here</Link>.
                    </p>
                    <p>
                        If you know a place where I would be a good fit, let me know!
                    </p>
                    <p>
                        Anna
                    </p>
                    <p>
                        anna.paulina.karpiuk@gmail.com
                    </p>
                </Typography>
            </AboutWrapper>
        </Container>
    )
}

export default About