import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  professionaView: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: Colors.white,
    paddingVertical: hp(3),
  },
  addButton: {
    alignSelf: 'flex-end',
    bottom: hp(2),
    position: 'absolute',
    right: wp(3),
  },
  addBtn: {
    width: wp(90),
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  profileview: {
    backgroundColor: Colors.white,
    width: hp(10),
    height: hp(10),
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: hp(2),
  },
  cameraBtn: {
    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
  inputWrapper: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4),
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  detailView: {
    marginTop: hp(4),
    paddingTop: hp(2),
  },
  colWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  serviceWrapper: {height: hp(7), borderRadius: 20},
  modal: {
    backgroundColor: Colors.white,
    height: hp(50),
    width: wp(100),
    alignSelf: 'center',
    bottom: hp(-5),
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: wp(5),
    paddingBottom: hp(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  checkBox: {backgroundColor: Colors.white, borderWidth: 0, paddingHorizontal:0},
});
