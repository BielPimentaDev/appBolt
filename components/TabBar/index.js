import React from 'react';

import * as S from './styled';

import HomeIcon from '../../assets/TabBar/home.png';
import CarIcon from '../../assets/TabBar/car.png';
import BoltIcon from '../../assets/TabBar/bolt.png';
import GridIcon from '../../assets/TabBar/grid.png';
import ProfileIcon from '../../assets/TabBar/profile.png';

const Component = ({state, navigation}) => {
  return (
    <S.TabBarArea>
      <S.TabBarItem
        selected={state.index === 0}
        onPress={() => navigation.navigate('Main')}
      >
        <S.TabBarItemIcon source={HomeIcon}/>
      </S.TabBarItem>

      <S.TabBarItem
        selected={state.index === 1}
        onPress={() => navigation.navigate('Driving')}
      >
        <S.TabBarItemIcon source={CarIcon}/>
      </S.TabBarItem>

      <S.TabBarAlertItem
        expanded={true}
        onPress={() => navigation.navigate('Congratulation')}
      >
        <S.TabBarAlertItemIcon source={BoltIcon} />
      </S.TabBarAlertItem>

      <S.TabBarItem
        selected={state.index === 3}
        onPress={() => navigation.navigate('Wallet')}
      >
        <S.TabBarItemIcon source={GridIcon} />
      </S.TabBarItem>

      <S.TabBarItem
        selected={state.index === 4}
        onPress={() => navigation.navigate('Marketplace')}
      >
        <S.TabBarItemIcon source={ProfileIcon} />
      </S.TabBarItem>
    </S.TabBarArea>
  );
};

export default Component;