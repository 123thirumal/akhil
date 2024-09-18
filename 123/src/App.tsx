import React, { Component } from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { Container, Grid, Menu, Segment, Image } from 'semantic-ui-react'

import { NotFound } from './components/NotFound'
import { Items } from './components/Items'

import logo from './AWS logo.884800f1674e960b6134af7340ac45ab21d99682.png';

import background from './modern-abstract-deep-blue-gradient-background_84443-3754.png';

export interface AppProps {}

export interface AppProps {
  history: any
}

export interface AppState {}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
  }

  render() {
    return (
      <Container>
        {/* Heads up! We apply there some custom styling, you usually will not need it. */}
        <style>
          {`
          html, body {
            background-image: url(${background}); /* Replace with your image URL */
    background-size: cover; /* Ensures the image covers the entire background */
    background-repeat: repeat; /* Prevents the image from repeating */
    background-position: center; /* Centers the background image */
    background-attachement: fixed;
          }
          h1.ui.header {
            color: #fff !important;
          }
          p > span {
            opacity: 0.4;
            text-align: center;
          }
        }
        `}
        </style>
        <Segment style={{ padding: '2em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Image src={logo} alt='Logo' size='medium' verticalAlign='middle' centered />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Router history={this.props.history}>
                  {this.generateMenu()}

                  {this.generateCurrentPage()}
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }

  generateMenu() {
    return (
      <Menu>
        <Menu.Item name="items">
          <Link to="/">To do list</Link>
        </Menu.Item>
      </Menu>
    )
  }

  generateCurrentPage() {

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return <Items {...props} />
          }}
        />

        <Route component={NotFound} />
      </Switch>
    )
  }
}
