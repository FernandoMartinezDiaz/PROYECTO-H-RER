import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/components/screens/Home'
import SearchResults from './src/components/screens/SearchResults';

export default function App() {
  console.log("lo que sea");
  return (
    <>
    <SearchResults />
    <StatusBar style="auto" />
  </>);
}