

import React from "react"
import Section from "./Section"


export default class Main extends React.Component{
    render(){
        return(
            <div class="main row">
                <Section empName="Rushiswar" empRole="AC"></Section>
                <Section empName="Shankar" empRole="AC"></Section>
                <Section empName="Poojitha" empRole="AC"></Section>
                <Section empName="Richie" empRole="AC"></Section>
                <Section empName="Sunil" empRole="LC"></Section>
                <Section empName="Sushma" empRole="LC"></Section>
                <Section empName="Rajani" empRole="AC"></Section>
                <Section empName="Arun" empRole="SM"></Section>
                <Section empName="Ramya" empRole="SM"></Section>
            </div>
        )
    }
}
