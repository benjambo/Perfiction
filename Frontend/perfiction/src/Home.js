import React from 'react'
import { Jumbotron } from './components/Jumbotron'
import styled from 'styled-components'

const Styles = styled.div`
    .paragraph {
        text-color: white
        text-align: center;
        z-index: 0;
    }
`


export const Home = () => {
    return (
        <Styles>
            <div>
                <Jumbotron />
                <div className="paragraph">
                <h3>THE COMPANY</h3>
                    <p>Perfiction is a long-term dream of two entrepreneurs combining science, art and coffee.</p>
                    <p>We are located in the center of Helsinki at the corner of Lönnrotinkatu and Abrahaminkatu.</p>
                    <p>In our cafe, we have a miniature grinding machine which guarantees fresh coffee daily.</p>
                    <p>Welcome to enjoy our goods!</p>
                </div>
                <div className="paragraph">
                <h3>OUR VISION</h3>
                    <p>Established in 2019, our cafe offers high-quality, well-chosen and well-studied coffees.</p>
                    <p>We prefer local food and small-scale products.
                        We also offer small sweet and salty delicacies in Perfiction
                        which are all produced within a radius of less than 10 km.</p>
                    <p>Our company's priority is to act responsibly and environmentally friendly.</p>
                </div>
                <div className="paragraph">
                <h3>THE ROASTERY</h3>
                    <p>Our roastery staff currently consists of two employees who produce
                        30 kg of roasted coffee weekly.</p>
                    <p>There is also a shop where you can buy beans or coffee of choosing at our cafe or roastery.</p>
                    <p>Our high quality coffee and future product development is guaranteed by constantly testing and experimenting with new ways.</p>
                    <p>Our staff works hard and passionately which guarantees the best flavors and products.</p>
                </div>
            </div>
        </Styles>
    )
}