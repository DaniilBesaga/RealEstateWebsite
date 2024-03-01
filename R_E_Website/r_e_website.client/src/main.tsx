import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import SlideShow from './components/SlideShow.tsx'
import SellAd from './components/SellAd.tsx'
import Reviews from './components/Reviews.tsx'
import InstPosts from './components/InstPosts.tsx'
import Footer from './components/Footer.tsx'
import QuickSearch from './components/QuickSearch.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <div>
        <Header></Header>
        <QuickSearch></QuickSearch>
    </div>
)
