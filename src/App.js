import 'semantic-ui-css/semantic.min.css';

import _ from 'lodash';
import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Icon,
  Input,
  Table
} from 'semantic-ui-react';

import { mockChores } from './mockData/mockChores';

class Chore extends Component {
  render() {
    const { chore } = this.props;
    const { id, choreDescription, points, status } = chore;
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox label="" />
          </Table.Cell>
          <Table.Cell>{choreDescription}</Table.Cell>
          <Table.Cell>{status}</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }
}

class ChoreTable extends Component {
  render() {
    function choreToHTML(chore, i) {
      return <Chore chore={chore} key={chore.id} />;
    }

    const choreTableHTML = _.chain(mockChores)
      .map(choreToHTML)
      .value();

    return (
      <div>
        <Table collapsing celled compact striped color="teal">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Completed</Table.HeaderCell>
              <Table.HeaderCell>Chore</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {choreTableHTML}
        </Table>

        <Table collapsing celled compact striped color="teal">
          <Table.Header>
            <Table.Row />
          </Table.Header>
        </Table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Divider hidden />

          <ChoreTable />

          <Input
            icon={{ name: 'plus', circular: true, link: true }}
            placeholder="Add new chore"
          />

          <Divider hidden />

          <Table collapsing celled compact striped color="pink">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Completed</Table.HeaderCell>
                <Table.HeaderCell>Chore</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
