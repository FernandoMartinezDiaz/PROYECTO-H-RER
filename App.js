import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/components/screens/Home'
import SearchResults from './src/components/screens/SearchResults';
import Artist from './src/components/screens/Artist';

export default function App() {
  console.log("lo que sea");
  return (
    <>
    <Artist />
    <StatusBar style="auto" />
  </>);
}