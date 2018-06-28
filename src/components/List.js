import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import ListItem from './ListItem';
import { fetchOrders } from '../actions';

export default class List extends Component {
  state = { ListEmpty: null }

  componentDidMount() {
    this.props.dispatch(fetchOrders(this.props.listType));
  }

  renderItem({ item }) {
    return <ListItem item={item} {...this.props} />;
  }

  handleRefresh = () => {
    this.props.dispatch(fetchOrders(this.props.listType));
  }

  renderError() {
    if (this.props.error) {
      return(
        <View style={styles.errorStyle}>
          <Text style={styles.errorTextStyle}>No connection</Text>
        </View>
      );
    }
  }

  onListEmpty () {
    if (this.props.loading === false)
      return(
        <View style={{paddingTop: 180, justifyContent: 'center' }}>
          <Text style={styles.listEmptyTextStyle}>No {this.props.listType}s</Text>
        </View>
        );
    return null;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderError()}
        <FlatList
          contentContainerStyle={styles.listStyle}
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={this.props.loading}
          onRefresh={this.handleRefresh}
          ListEmptyComponent={this.onListEmpty()}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  listStyle :{
    flex: 1,
  },
  listEmptyTextStyle: {
    textAlign: 'center'
  },
  errorStyle: {
    backgroundColor: '#ff3232',
    borderBottomWidth: 1,
    padding: 5,
  },
  errorTextStyle: {
    textAlign: 'center',
    color: '#fff'
  }
}
