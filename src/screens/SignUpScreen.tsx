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

const SignUpScreen = () => {
  const {width, height} = useContext(ThemesContext);
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
                <Text style={[styles.titleGradientElement]}>Sign Up</Text>
              }>
              <LinearGradient
                colors={['rgb(255,169,37)', 'rgb(255,120,65)']}
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
              borderColor: focusEmail ? 'rgba(255, 169, 37, 1)' : null,
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
              borderColor: focusPassword ? 'rgba(255, 169, 37, 1)' : null,
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
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.buttonBlock]}>
            <LinearGradient
              start={{x: 2, y: 1.33}}
              end={{x: 0, y: -2}}
              colors={['rgb(255,169,37)', 'rgb(255,120,65)', 'rgb(255,169,37)']}
              style={[styles.buttonLogin, styles.centeringBlock]}>
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.accountLoginBlock, styles.centeringBlock]}>
            <Text style={[styles.navToLoginText]}>Do you have a account? </Text>
            <MaskedView
              maskElement={
                <Text style={[styles.navToLoginTextButton]}>Login here</Text>
              }>
              <LinearGradient
                colors={['rgb(255,169,37)', 'rgb(255,120,65)']}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0.33}}
                style={{width: 70, height: 16}}
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
    backgroundColor: '#ffffff',
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

    backgroundColor: '#ffffff',
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
    color: 'black',
  },
  bgtextInput: {
    marginTop: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F6F7FB',
    width: '100%',
    borderRadius: 12,
    marginBottom: 24,
  },
  svgIconInput: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonBlock: {
    marginTop: 150,
  },
  buttonLogin: {
    borderRadius: 12,
    width: '100%',
    height: 55,
  },
  loginButtonText: {
    color: '#FAFAFA',
    fontWeight: '600',
    fontSize: 17,
  },
  accountLoginBlock: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  navToLoginText: {
    color: '#262626',
    fontWeight: '500',
  },
  navToLoginTextButton: {
    fontWeight: '600',
  },
});

export default SignUpScreen;
