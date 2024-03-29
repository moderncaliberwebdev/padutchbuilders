import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import { Helmet } from 'react-helmet'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useMediaQuery } from 'react-responsive'

import '../css/CatalogPage.css'

function CatalogPage({ title, pdf }) {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <div className='catalogpage'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <h1 className='catalogpage__title'>{title}</h1>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className='catalogpage__pages'>
        <span className='pages__prev' onClick={() => prevPage()}>
          Previous
        </span>
        <p className='pages__number'>
          {pageNumber} of {numPages}
        </p>
        <span className='pages__next' onClick={() => nextPage()}>
          Next
        </span>
      </div>

      {!isMobile && (
        <a href={pdf} download='catalog.pdf' className='catalogpage__download'>
          <img
            src='/public/images/pdf.png'
            alt='Download PDF'
            className='download__pdfimg'
          />
          <p className='download__btntxt'>
            Click to download this catalog to your desktop
          </p>
        </a>
      )}
      <Footer marginBottom={-20} />
    </div>
  )
}

export default CatalogPage
