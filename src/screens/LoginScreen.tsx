import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {ThemesContext} from '../context/Context';
import MessageIcon from '../components/MessageIcon';
import LockIcon from '../components/svgIcons/LockIcon';
import {colors} from '../constants/theme';

const LoginScreen = ({navigation}) => {
  const {width} = useContext(ThemesContext);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container]}>
      <View>
        <Image
          source={require('../assets/images/bg.png')}
          style={[styles.bgImage]}
        />
      </View>
      <View
        style={[
          styles.mainPayload,
          {
            paddingHorizontal: width * 0.1,
          },
        ]}>
        <View>
          <View style={[styles.centeringBlock]}>
            <MaskedView
              maskElement={
                <Text style={[styles.titleGradientElement]}>Log In</Text>
              }>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0.33}}
                style={{width: 128, height: 43}}
              />
            </MaskedView>
          </View>
        </View>
        <View
          style={[
            styles.bgtextInput,
            {
              borderWidth: focusEmail ? 2 : null,
              borderColor: focusEmail ? colors.primary : null,
            },
          ]}>
          <MessageIcon style={[styles.svgIconInput]} />
          <TextInput
            placeholder="alberto@mail.com"
            style={[styles.textInput]}
            autoCorrect={false}
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
            onTouchEnd={() => {
              setFocusPassword(false);
              setFocusEmail(true);
            }}
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={[
            styles.bgtextInput,
            {
              marginTop: 0,
              borderWidth: focusPassword ? 2 : null,
              borderColor: focusPassword ? colors.primary : null,
              marginBottom: 150,
            },
          ]}>
          <LockIcon style={[styles.svgIconInput]} />
          <TextInput
            placeholder="Password"
            style={[styles.textInput]}
            autoCorrect={false}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            onTouchEnd={() => {
              setFocusEmail(false);
              setFocusPassword(true);
            }}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity>
          <View>
            <LinearGradient
              start={{x: 2, y: 1.33}}
              end={{x: 0, y: -2}}
              colors={[colors.primary, colors.secondary, colors.primary]}
              style={[styles.buttonLogin, styles.centeringBlock]}>
              <Text style={styles.loginButtonText}>Login</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <View style={[styles.accountLoginBlock, styles.centeringBlock]}>
            <Text style={[styles.navToLoginText]}>Don’t have a account? </Text>
            <MaskedView
              maskElement={
                <Text style={[styles.navToLoginTextButton]}>Sign up here</Text>
              }>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0.33}}
                style={{width: 85, height: 16}}
              />
            </MaskedView>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
  },
  mainPayload: {
    flex: 1,
    paddingTop: 65,
    marginTop: -150,
    borderTopLeftRadius: 100,
    backgroundColor: colors.white,
  },
  titleGradientElement: {
    fontSize: 36,
    fontWeight: '700',
  },
  centeringBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 180,
    paddingVertical: 17,
    color: colors.gray800,
  },
  bgtextInput: {
    marginTop: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.gray100,
    width: '100%',
    borderRadius: 12,
    marginBottom: 24,
  },
  svgIconInput: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonLogin: {
    borderRadius: 12,
    width: '100%',
    height: 55,
  },
  loginButtonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 17,
  },
  accountLoginBlock: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  navToLoginText: {
    color: colors.gray800,
    fontWeight: '500',
  },
  navToLoginTextButton: {
    fontWeight: '600',
  },
});

export default LoginScreen;
