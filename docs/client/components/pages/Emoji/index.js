/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import styles from './styles.css';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';

export default class App extends Component {

  // description what the plugin does

  // h2 "Simple Example"
  // an simple editor with hashtag plugin (can be copied from unicorn editor)
  // simple code example

  // h2 "Custom Styling"
  // an editor with hashtag plugin & custom styles (can be copied from unicorn editor)
  // custom styles code example

  // h2 "API"
  // a table explaining what is exported

  render() {
    return (
      <div>
        <Container>
          <div className={ styles.root }>Emoji</div>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
        </AlternateContainer>
      </div>
    );
  }
}