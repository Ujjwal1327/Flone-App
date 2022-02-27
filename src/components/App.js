import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Letter from './Letter';

export default function App() {
  return <>
  <Header />
<ProductCard/>
  <Letter/>
  <Footer/> 
  </>;
}
