import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/components/screens/Home'
import SearchResults from './src/components/screens/SearchResults';

export default function App() {
  return (
    <>
    <SearchResults />
    <StatusBar style="auto" />
  </>);
}