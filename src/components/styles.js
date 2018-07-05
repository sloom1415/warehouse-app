import { Constants } from 'expo';

export const styles = {
    containerStyle: {
        flex: 1
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
      },
      statusBarStyle: {
        backgroundColor: '#fff',
        height: Constants.statusBarHeight
      },
      searchBarContainerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      }
}