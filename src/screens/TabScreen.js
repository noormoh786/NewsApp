import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left, Body, Right, Title  } from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#111'}} hasTabs >
        <Left/>
          <Body>
            <Title>News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs  >
          <Tab tabStyle={{backgroundColor:'#1f1c21'}} activeTabStyle={{backgroundColor:'#1f1c21'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#1f1c21'}} activeTabStyle={{backgroundColor:'#1f1c21'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#1f1c21'}} activeTabStyle={{backgroundColor:'#1f1c21'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}