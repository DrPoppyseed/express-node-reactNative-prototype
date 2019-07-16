import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  List,
  Content,
  ListItem,
  Left,
  Right,
  Icon,
  Body
} from 'native-base';
// import UniversityItem from './common/UniversityItem';
import { renderUniversities } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.universities = this.props.renderUniversities();
  }

  renderError() {
    if (this.props.error) {
      const errorMessage = this.props.error;
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderUniversitiesList() {
    if (this.props.loading) {
      return <StatusBar />;
    }
    return (
      this.props.universities.map(() =>
        <ListItem>
          <Left>
            <Text>{university.name}</Text>
          </Left>
          <Right>
            <Icon name='arrow-forward' />
          </Right>
        </ListItem>
      )
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Text>This is what the ListItems should look like</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            {this.renderUniversitiesList()}
            {this.renderError()}
          </List>
        </Content>
      </Container>
    )
  }
};

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ home }) => {
  const { universities, error, loading } = home;
  return { universities, error, loading };
}

export default connect(
  mapStateToProps,
  { renderUniversities }
)(Home);
