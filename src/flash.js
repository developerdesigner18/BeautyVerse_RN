import {showMessage} from 'react-native-flash-message';

export default success = message => {
  return showMessage({
    message: message,
    floating: true,
    type: 'success',
  });
};
