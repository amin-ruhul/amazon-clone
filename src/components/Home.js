import React from 'react';
import './home.css';
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>



            <div className='home-row'>
                <Product 
                 id='45783' title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' price={19.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' rating={5}
                /> 

                <Product 
                    id='4567' title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price={239.99} image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                    rating={4}
                />  
                
            </div>
            <div className='home-row'>
                <Product 
                    id='123' title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' price={600} image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' rating={5}
                /> 
                <Product 
                    id='124' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    rating={3}
                />
                <Product 
                    id='125' title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' price={99.99} image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' rating={5}
                />
            </div>
            <div className='home-row'>
                <Product 
                    id='9980' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' rating={5}
                />
            </div>


            </div>

            
        </div>
    )
}

export default Home
