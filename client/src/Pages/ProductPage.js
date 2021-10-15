import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../css/ProductPage.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function ProductPage({ match }) {
  const productId = match.params.productid

  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(`/api/product?productid=${productId}`)
      setProduct(data[0])
    }
    fetchMyAPI()
  }, [])

  return (
    <div className='productpage'>
      <Header />
      <h1 className='productpage__title'>{product.title}</h1>
      <div className='productpage__image-container'>
        {product.images &&
          product.images.map((prodsrc) => (
            <img
              src={prodsrc}
              alt='Product Image'
              key={prodsrc}
              className='image-container__image'
            />
          ))}
      </div>
      <div className='productpage__details'>
        <h2 className='details__title'>Details</h2>
        {product.details &&
          product.details.map((detail) => (
            <span className='details__detail' key={detail}>
              {detail}
            </span>
          ))}
      </div>
      <div
        className='productpage__extrainfo'
        style={{
          display: product.extraDetails
            ? 'block'
            : product.priceList
            ? 'block'
            : 'none',
        }}
      >
        {product.extraDetails && product.prodType == 'Shed' ? (
          <>
            <h1 className='extrainfo__title'>Extra Doors & Windows</h1>
            <h2 className='extrainfo__sub'>Doors</h2>
            <span className='extrainfo__details'>3' Single-$85.00</span>
            <span className='extrainfo__details'>4' Double-$95.00</span>
            <span className='extrainfo__details'>5' Double-$100.00</span>
            <span className='extrainfo__details'>6' Double-$115.00</span>
            <span className='extrainfo__details'>7' Double-$130.00</span>
            <span className='extrainfo__details'>3' 8' Double-$160.00</span>
            <h2 className='extrainfo__sub'>Windows</h2>
            <span className='extrainfo__details'>
              18X23 awing or slider small w/shutters-$80.00
            </span>
            <span className='extrainfo__details'>
              24x36 large slider w/shutters-$95.00
            </span>
            <span className='extrainfo__details'>
              Up grade one small to large window-$45.00
            </span>
            <span className='extrainfo__details'>Wood corner-$50.00/shed</span>
            <span className='extrainfo__details'>
              Flower boxes (vinyl)-$40.00
            </span>
            <span className='extrainfo__details'>
              Shutter on mini barns-$30.00/pair
            </span>
            <span className='extrainfo__details'>
              15x60 Jalousie window-$80.00
            </span>
            <br />
            <span className='extrainfo__details'>
              For higher doors - 6" higher add $75.00 -- for 12" higher add
              $100.00
            </span>
            <h2 className='extrainfo__sub'>9x7 Garage Doors:</h2>
            <span className='extrainfo__details'>Non insulated-$500.00</span>
            <span className='extrainfo__details'>Insulated-$600.00</span>
            <span className='extrainfo__details'>$50.00 extra for glass</span>
            <h2 className='extrainfo__sub'>Higher Walls:</h2>
            <span className='extrainfo__details'>12" higher - 12%</span>
            <span className='extrainfo__details'>6" higher - 7%</span>
            <h2 className='extrainfo__sub'>Roofing:</h2>
            <span className='extrainfo__details'>
              Architectural design shingles 3% of shed price
            </span>
            <span className='extrainfo__details'>
              3% discount for customer shingle
            </span>
            <span className='extrainfo__details'>
              6/12 roof pitch 3% of shed price
            </span>
            <span className='extrainfo__details'>
              Tar paper on roof 10x16 or smaller-$30.00 over 10x16 $50.00
            </span>
            <span className='extrainfo__details'>
              Ridge vent 10' section-$50.00
            </span>
            <span className='extrainfo__details'>
              Drip edge colors-White-Black-Brown
            </span>
            <span className='extrainfo__details'>End vents-$35.00/pair</span>
            <span className='extrainfo__note'>
              NOTE: ALL GARAGES COME STANDARD WITH A 24X36 SLIDER WINDOW ALL
              WHITE BUILDINGS ARE $25.00 EXTRA
            </span>
            <h2 className='extrainfo__sub'>Options:</h2>
            <span className='extrainfo__details'>
              Vinyl Siding 25% of shed price
            </span>
            <h2 className='extrainfo__sub'>Ramps:</h2>
            <span className='extrainfo__details'>3'-$60.00</span>
            <span className='extrainfo__details'>4'-$70.00</span>
            <span className='extrainfo__details'>5'-$80.00</span>
            <span className='extrainfo__details'>6'-$90.00</span>
            <span className='extrainfo__details'>7'-$105.00</span>
            <span className='extrainfo__details'>8'-$115.00</span>
            <span className='extrainfo__details'>9'-$140.00</span>
            <h2 className='extrainfo__sub'>4'Lofts X:</h2>
            <span className='extrainfo__details'>8'-$75.00</span>
            <span className='extrainfo__details'>10'-$95.00</span>
            <span className='extrainfo__details'>12'-$115.00</span>
            <span className='extrainfo__details'>14'-$155.00</span>
            <h2 className='extrainfo__sub'>Shelves:</h2>
            <span className='extrainfo__details'>16"-$4.00 per ft</span>
            <span className='extrainfo__details'>24"-$5.00 per ft</span>
            <span className='extrainfo__details'>30"-$6.00 per ft</span>
            <h2 className='extrainfo__sub'>Shelves:</h2>
            <span className='extrainfo__details'>
              Treated floor joists-$0.40/sq ft
            </span>
            <span className='extrainfo__details'>
              Treated plywood-$1.00/sq ft
            </span>
            <span className='extrainfo__details'>Double floor-$0.80/sq ft</span>
            <span className='extrainfo__details'>
              Joists 12" on center-$0.30/sq ft
            </span>
            <h2 className='extrainfo__sub'>Shelves:</h2>
            <span className='extrainfo__details'>
              Steel 9 lite single door-$275.00
            </span>
            <span className='extrainfo__details'>
              Steel 11 lite single door-$285.00
            </span>
            <span className='extrainfo__details'>
              Steel 5' double door-$400.00
            </span>
            <span className='extrainfo__details'>
              Steel 9 lite 5' double door-$410.00
            </span>
            <span className='extrainfo__details'>
              Steel 11 lite 5' double door-$430.00
            </span>
            <span className='extrainfo__details'>
              Steel 6 panel house door w/latch-$265.00
            </span>
            <span className='extrainfo__details'>
              Single wood door-$160.00 (covered with vinyl)
            </span>
            <span className='extrainfo__details'>
              Double wood door-$220.00 (covered with vinyl)
            </span>
            <h2 className='extrainfo__sub'>Upgrade:</h2>
            <span className='extrainfo__details'>
              Single wood door for single steel door-$100.00
            </span>
            <span className='extrainfo__details'>
              Double wood door for double steel door-$200.00
            </span>
            <span className='extrainfo__details'>
              Single steel door slab-$150.00
            </span>
            <span className='extrainfo__details'>
              9 lite steel door slab-$175.00
            </span>
            <span className='extrainfo__details'>
              11 lite steel door slab-$190.00
            </span>
            <span className='extrainfo__details'>
              Double steel door slab-$300.00
            </span>
            <span className='extrainfo__details'>
              9 lite steel door slab-$350.00
            </span>
            <span className='extrainfo__details'>
              11 lite steel door slab-$380.00
            </span>
          </>
        ) : (
          product.prodType == 'Poolhouses' && (
            <>
              <h2 className='extrainfo__sub'>Standard Features</h2>
              <span className='extrainfo__details'>
                All cabins 20' long have 3 windows, 22'-30' have 5 windows
              </span>
              <span className='extrainfo__details'>
                All sizes include 6' porch with round log railin
              </span>
              <span className='extrainfo__details'>
                14' wide cabins have 2x6 rafters 16" O/C
              </span>
              <span className='extrainfo__details'>
                Stained log siding exterior
              </span>
              <span className='extrainfo__details'>
                Cabins are also available in painted wood dutch siding
              </span>
              <span className='extrainfo__details'>
                Painted cabins include vinyl post & railing & primed 36"
                entrance door
              </span>
              <span className='extrainfo__details'>
                One wood entrance door or insulated 6 panel steel w/primer
                finish with standard house lock set
              </span>
              <h2 className='extrainfo__sub'>Available Options</h2>
              <span className='extrainfo__details'>
                Upgrade to insulated window
              </span>
              <span className='extrainfo__details'>
                Interior walls (per ln ft)
              </span>
              <span className='extrainfo__details'>Interior door</span>
              <span className='extrainfo__details'>Wiring</span>
              <br />
              <span className='extrainfo__details'>Light</span>
              <span className='extrainfo__details'>Receptacle</span>
              <span className='extrainfo__details'>Ceiling fan box</span>
              <span className='extrainfo__details'>
                100 amp panel (main Breaker only)
              </span>
              <br />
              <span className='extrainfo__details'>Upgrade door w/9 light</span>
              <span className='extrainfo__details'>Extra exterior door</span>
              <span className='extrainfo__details'>
                Steel roof A-frame (per sqft)
              </span>
              <span className='extrainfo__details'>
                Steel roof gambrel (per sqft)
              </span>
              <span className='extrainfo__details'>
                Loft over porch w/finished interior
              </span>
              <span className='extrainfo__details'>Bathroom Package</span>
              <span className='extrainfo__details'>
                5'x8' Bathroom package includes: walls & door, closet with 30
                gallon ho water heater, toilet, pedestal washbowl, & 32" shower
                stall
              </span>
              <span className='extrainfo__details'>Kitchenette Package</span>
              <span className='extrainfo__details'>
                Kitchenette Package includes: 6' pine cabinets, 3' wall
                cabinets, counter top, and single bowl sink w/ faucet
              </span>
            </>
          )
        )}
        {product.priceList &&
          product.priceList.map((item) => (
            <>
              <h2 className='extrainfo__sub'>{item[0]}</h2>
              {item.map(
                (priceitem, index) =>
                  index > 0 && (
                    <span className='extrainfo__details'>{priceitem}</span>
                  )
              )}
            </>
          ))}
      </div>
      <div className='productpage__info'>
        <h2 className='info__title'>Get More Info</h2>
        <span className='info__span'>Telephone us at: (717) 488-8005</span>
        <button
          className='info__sales'
          onClick={() =>
            (window.location.href = 'mailto:sales@padutchbuilders.com')
          }
        >
          Email Sales
        </button>
      </div>
      <Footer marginLeft={0} marginBottom={-30} />
    </div>
  )
}

export default ProductPage
