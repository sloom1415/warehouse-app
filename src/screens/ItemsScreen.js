import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/List';
import { ITEMS } from  '../actions/names';

class ItemsScreen extends Component {
    render () {
        return(
            <View style={{ flex: 1 }}>
                <List
                    listType={ITEMS}  
                    data={this.props.orders}
                    loading={this.props.loading}
                    error={this.props.error}
                    {...this.props}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { orders: state.items.orders, loading: state.items.loading, error: state.items.error };
  };
  
  export default connect(mapStateToProps)(ItemsScreen);