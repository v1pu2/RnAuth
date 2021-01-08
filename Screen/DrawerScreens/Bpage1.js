import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

// Use FlatList and ListItem to show data with pagination
class Bpage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      randomUserData: [],
      loadingExtraData: false,
      page: 1,
    };
  }
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    fetch(`https://randomuser.me/api/?results=10&page=${this.state.page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('in page 1 response', responseJson);
        this.setState({
          randomUserData:
            this.state.page === 1
              ? responseJson.results
              : [...this.state.randomUserData, ...responseJson.results],
        });
      });
  };
  renderCustomItem = ({item, index}) => {
    console.log('item in rendercustom item', item);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{item.gender}</Text>
        <Text>
          {item.name['first']} {item.name['last']}
        </Text>
        <Image
          source={{uri: item.picture['medium']}}
          style={{width: 200, height: 200}}
        />
      </View>
    );
  };
  keyExtractor = (item, index) => item.email;
  LoadMoreRandomData = () => {
    console.log('in loadmore page', this.state.page);
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => this.loadUsers(),
    );
  };
  render() {
    return (
      <View style={{marginTop: 50}}>
        <FlatList
          data={this.state.randomUserData}
          style={{width: 350, height: 800}}
          renderItem={this.renderCustomItem}
          keyExtractor={this.keyExtractor}
          onEndReachedThreshold={0}
          onEndReached={this.LoadMoreRandomData}
        />
      </View>
    );
  }
}

export default Bpage1;
