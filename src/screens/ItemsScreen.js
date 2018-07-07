import React, {Component} from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import { ITEMS } from  '../actions/names';
import { fetchOrders } from '../actions';
import { styles } from '../components/styles';
import ExpandingListItem from '../components/ExpandingListItem'

class ItemsScreen extends Component {
    state = { data: this.props.items, searchInput: '' }

    componentDidMount() {
        this.requestData();
    }

    handleRefresh = () => {
        this.requestData();
    }
    
    requestData = () => {
        this.props.dispatch(fetchOrders(ITEMS));
        this.setState({ data: this.props.items });
    }

    renderItem = ({ item }) => {
        return (
            <ExpandingListItem item={item} />
        );
    }
    renderData () {
        return(
            _.filter(this.props.items, item => {
                return contains(item, this.state.searchInput)
            })
        );
    }

    handleSearch = (text) => {
        const searchInput = text.toLowerCase();
        this.setState({ searchInput }, () => this.requestData() );
    }

    onListEmpty () {
        if (this.props.loading === false)
          return(
            <View style={{paddingTop: 180, justifyContent: 'center' }}>
              <Text style={styles.listEmptyTextStyle}>No items</Text>
            </View>
            );
        return null;
      }
      renderSearchBar() {
        return(
            <SearchBar
                onChangeText={this.handleSearch}
                placeholder='Search items here'
                autoCapitalize='none'
                platform={Platform.os === 'ios' ? 'ios' : 'android'}
                lightTheme
                value={this.state.searchInput}
               // showLoading={this.props.loading}
                containerStyle={styles.searchBarContainerStyle}
            />
        );
      }

    render () {
        return(
            <View style={{ flex: 1 }}>
                <View style={styles.statusBarStyle} />
                {this.renderSearchBar()}
                <FlatList
                    data={this.renderData()}
                    extraData={this.state.index}
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

const contains = ({ id, name }, query) => {
    if(id.includes(query) || name.toLowerCase().includes(query))
        return true;
    return false
}



const mapStateToProps = state => {
    return { items: state.items.items, loading: state.items.loading, error: state.items.error };
  };
  
  export default connect(mapStateToProps)(ItemsScreen);