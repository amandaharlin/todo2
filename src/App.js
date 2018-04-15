import 'semantic-ui-css/semantic.min.css';

import './App.css';

import _ from 'lodash';
import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Form,
  Header,
  Icon,
  Input,
  Modal,
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
  state = {
    allChores: mockChores,
    selectedChores: [mockChores[0]],
    openAddChoreModal: false
  };

  toggleRow = (event, chore) => {
    const { selectedChores, allChores } = this.state;
    let newData;
    const choreIsAlreadySelected = _.findIndex(selectedChores, chore) > -1;
    if (choreIsAlreadySelected) {
      newData = selectedChores.filter((thisChore, i) => {
        return thisChore.id != chore.id;
      });
    } else {
      newData = [chore, ...selectedChores];
    }
    this.setState({ selectedChores: newData });
  };

  renderChorePointSum = () => {
    const { selectedChores } = this.state;

    const chorePointSum = _.reduce(
      selectedChores,
      (acc, chore) => {
        return acc + chore.points;
      },
      0
    );

    return <Header size="large">Total Points = {chorePointSum}</Header>;
  };

  renderButtonModal = () => {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              openAddChoreModal: true
            });
          }}
        >
          Add Chore
        </Button>
        <Modal
          size="large"
          open={this.state.openAddChoreModal}
          onClose={() => {
            this.setState({
              openAddChoreModal: false
            });
          }}
        >
          <Modal.Content>
            <Header>Add a Chore</Header>
            <Form>
              <Form.Input label="Chore Name" placeholder="Mow Yard" />
              <Form.Input label="Chore Point Value" placeholder="3" />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="green"
              onClick={() => {
                const newChore = {
                  id: Math.random(),
                  choreDescription: 'mow yard',
                  points: 1
                };

                ///add chore

                this.setState({
                  openAddChoreModal: false
                });
              }}
            >
              <Icon name="checkmark" /> Add This Chore
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
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
          <Divider hidden />
          Selection Model Table
          <ChoreTable data={selectedChores} />
          {this.renderChorePointSum()}
          {this.renderButtonModal()}
        </Container>
      </div>
    );
  }
}

export default App;
