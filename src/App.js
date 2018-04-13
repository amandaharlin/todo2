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

class ChoreRow extends Component {
  render() {
    const { chore, isActive, onClickRow } = this.props;
    const { id, choreDescription, points, status } = chore;

    return (
      <Table.Body>
        <Table.Row
          onClick={event => {
            if (typeof onClickRow === 'function') {
              onClickRow(event, chore);
            }
          }}
        >
          <Table.Cell collapsing>
            <Checkbox label="" checked={isActive} />
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
    const { data, selection, onClickRow } = this.props;

    function choreToHTML(chore, i) {
      const selectedInModel = _.findIndex(selection, chore) > -1;
      console.log('selectedInModel', selectedInModel);
      return (
        <ChoreRow
          chore={chore}
          key={chore.id}
          isActive={selectedInModel}
          onClickRow={onClickRow}
        />
      );
    }

    const choreTableHTML = _.chain(data)
      .map(choreToHTML)
      .value();

    return (
      <div>
        <Table collapsing celled compact striped color="teal" className="todo">
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

  toggleRow = (event, chore) => {
    const { selectedChores, allChores } = this.state;
    let newData;
    const choreIsAlreadySelected = _.findIndex(selectedChores, chore) > -1;
    if (choreIsAlreadySelected) {
      console.log('remove it');
      newData = selectedChores.filter((thisChore, i) => {
        return thisChore.id != chore.id;
      });
    } else {
      console.log('add it');
      newData = [chore, ...selectedChores];
    }
    this.setState({ selectedChores: newData });
    console.log('newData', newData);
  };

  render() {
    const { allChores, selectedChores } = this.state;

    return (
      <div className="App">
        <Container>
          <Divider hidden />
          <ChoreTable
            data={allChores}
            selection={selectedChores}
            onClickRow={this.toggleRow}
          />
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

//add number at bottom that adds up all selected points chores with a reduce function
//if you deselect all the number is 0
