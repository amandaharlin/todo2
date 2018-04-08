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

function toggleCheckbox() {}

class ChoreRow extends Component {
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
          <Table.Cell>{points}</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }
}

class ChoreTable extends Component {
  render() {
    function choreToHTML(chore, i) {
      return <ChoreRow chore={chore} key={chore.id} />;
    }

    const { data } = this.props;

    const choreTableHTML = _.chain(data)
      .map(choreToHTML)
      .value();

    return (
      <div>
        <Table
          collapsing
          celled
          compact
          striped
          color="teal"
          className="todo"
          data={mockChores}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Completed</Table.HeaderCell>
              <Table.HeaderCell>Chore</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {choreTableHTML}
        </Table>
      </div>
    );
  }
}

class App extends Component {
  state = { allChores: mockChores, selectedChores: [mockChores[0]] };

  render() {
    const { allChores, selectedChores } = this.state;

    return (
      <div className="App">
        <Container>
          <Divider hidden />
          <ChoreTable data={allChores} selection={selectedChores} />
          <Divider hidden />
          <Input
            icon={{ name: 'plus', circular: true, link: true }}
            placeholder="Add new chore"
          />
          <Divider hidden />
          Selection Model Table
          <ChoreTable data={selectedChores} />
        </Container>
      </div>
    );
  }
}

export default App;
