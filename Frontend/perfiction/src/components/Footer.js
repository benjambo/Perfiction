import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
* {
    box-sizing: border-box;
  }

    .footer {
        text-align: center;
        background-color: #2B303A;
        color: white;
        
    }

    ul {
        list-style-type: none;
        background-color: #2B303A;
       }

    .column {
        float: left;
        width: 33.33%;
        Height: 210px
        padding: 2vh;
        margin: 0;
    }
`

export const Footer = () => {
    return (
        <Styles>
            <div className="footer">
                <ul className="column">
                    <li><strong className="otsikot" >Perfiction</strong></li>
                    <li>Roast And Coffee Shop</li>
                    <li>Lönnrotinkatu 32</li>
                    <li>00180</li>
                    <li>HELSINKI</li>
                    <li><a href="https://www.facebook.com/groups/2107970076086665/" >Facebook / Cup o'Roast</a></li>
                </ul>
                <ul className="column">
                    <li><strong className="otsikot">INFO</strong></li>
                    <li>info@cuporoast.cof</li>
                    <li>+358411234567</li>
                    <li>Availability on weekdays:</li>
                    <li>9:00 - 16:00</li>
                </ul>
                <ul className="column">
                    <li><strong className="otsikot">OPENING HOURS</strong></li>
                    <li>Coffee shop</li>
                    <li>open:</li>
                    <li>Mon - Thu 6:00 - 18:00</li>
                    <li>Friday 6:00 - 21:00</li>
                    <li>Sat - Sun 10:00 - 20:00</li>
                </ul>
            </div>
        </Styles>
    )
}