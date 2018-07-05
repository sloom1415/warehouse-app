import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import ListItem from './ListItem';
import { fetchOrders } from '../actions';
import { styles } from './styles';

export default class List extends Component {
  state = { ListEmpty: null, PrevData: this.props.data }

  renderItem({ item }) {
    return <ListItem item={item} />;
  }

  componentDidMount() {
    this.props.dispatch(fetchOrders(this.props.listType));
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
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.pk.toString()}
          refreshing={this.props.loading}
          onRefresh={this.handleRefresh}
          ListEmptyComponent={this.onListEmpty()}
        />
      </View>
    );
  }
}