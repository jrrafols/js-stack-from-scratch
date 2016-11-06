import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.dog.get('hasBarked') ? 'The dog is barking' : 'The dog stopped barking',
});

export default connect(mapStateToProps)(Message);
