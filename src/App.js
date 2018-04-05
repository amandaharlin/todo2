import 'semantic-ui-css/semantic.min.css';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Divider hidden />
          <Table collapsing celled compact striped color="teal">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Finished?</Table.HeaderCell>
                <Table.HeaderCell>Chore</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell>mop floors</Table.Cell>
                <Table.Cell>1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell>roll down trash</Table.Cell>
                <Table.Cell>5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell>take out trash</Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Input
            icon={{ name: 'plus  ', circular: true, link: true }}
            placeholder="Add new chore"
          />

          <Divider hidden />
          <Table collapsing celled compact striped color="pink">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Finished?</Table.HeaderCell>
                <Table.HeaderCell>Chore</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {/* <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell>mop floors</Table.Cell>
                <Table.Cell>1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell>roll down trash</Table.Cell>
                <Table.Cell>5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox label="" />
                </Table.Cell>
                <Table.Cell>take out trash</Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row> */}

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
