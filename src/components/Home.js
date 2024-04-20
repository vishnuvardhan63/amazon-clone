import React from 'react'
import './Home.css'
import Product from './Product'
function Home(){
    return(
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
                <div className='home__row'>
                    <Product key={1} id={1} image={'https://m.media-amazon.com/images/I/61+08vKFVrL._SL1100_.jpg'} title={'Ignyte IGN-4 Hyena ISI/DOT Certified Double Visor Full Face Helmet with Outer Anti-Fog Clear Visor and Inner Smoke Sun Shield'} price={11.96} rating={5}/>
                    <Product key={2} id={2} image={'https://m.media-amazon.com/images/I/61SmnheBBRL._SL1500_.jpg'} title={'Redmi 12 5G Moonstone Silver 8GB RAM 256GB ROM'} price={15.86} rating={4}/>
                </div>
                <div className='home__row'>
                    <Product key={3} id={3} image={'https://m.media-amazon.com/images/I/61N48MmdLML._SL1000_.jpg'} title={'MSI Optix G24C4 Curved Gaming Monitor | 23.6 Inch (60 Cm) 1920 X 1080 Pixels'} price={155.86} rating={4}/>
                    <Product key={4} id={4} image={'https://m.media-amazon.com/images/I/51Q+khbHBZL._SY695_.jpg'} title={'Nike Mens Jordan Max Aura 5 Running Shoes'} price={155.86} rating={4}/>
                    <Product key={5} id={5} image={'https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,h=610/images/topmodels/4-s3n4vjwfzcimyvyeizqpl6cv-Original.png'} title={'Rolext watches | Extreme Resistance | Day to Day'} price={1555.86} rating={4}/>
                    
                </div>
                <div className='home__row'>
                <Product key={6}  id={6} image={'https://m.media-amazon.com/images/I/81MRU+3RJLL._SL1500_.jpg'} title={'Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)'} price={155.86} rating={4}/>
    
                </div>
            </div>
        </div>
    )
}
export default Home