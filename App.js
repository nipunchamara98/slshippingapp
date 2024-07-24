import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LocalMail from './components/LocalMail';
import Airmail from './components/Airmail';
import COD from './components/COD';
import SeaMail from './components/SeaMail';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-7463757845382729/1291240524';

const App = () => {
  const [tab, setTab] = useState('localMail');

  const renderTabContent = () => {
    switch (tab) {
      case 'localMail':
        return <LocalMail />;
      case 'airmail':
        return <Airmail />;
      case 'cod':
        return <COD />;
      case 'seaMail':
        return <SeaMail />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, tab === 'localMail' && styles.activeTab]}
          onPress={() => setTab('localMail')}
        >
          <Text style={styles.tabText}>Local Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === 'airmail' && styles.activeTab]}
          onPress={() => setTab('airmail')}
        >
          <Text style={styles.tabText}>Airmail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === 'cod' && styles.activeTab]}
          onPress={() => setTab('cod')}
        >
          <Text style={styles.tabText}>COD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === 'seaMail' && styles.activeTab]}
          onPress={() => setTab('seaMail')}
        >
          <Text style={styles.tabText}>Sea Mail</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>{renderTabContent()}</View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#64b5f6',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#2196f3',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  bannerAd: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default App;

