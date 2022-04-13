import React, { useState, useEffect} from "react"
import ReactDOM from "react-dom"
import './prueba.css'

const stub=[
{image:'https://picsum.photos/900/700', text:'Title 1'}, 
{image:'https://picsum.photos/900/800', text:'Title 2'},
{image:'https://picsum.photos/900/600', text:'Title 3'},
{image:'https://picsum.photos/900/600', text:'Title 4'},
{image:'https://picsum.photos/900/600', text:'Title 5'}
]



const HeroGothic = () => {
  
  const [ active, setActive ] = useState(0)
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  function handleSetActive(e){
    console.log(e.currentTarget.dataset)
    setActive(parseInt(e.currentTarget.dataset.slide))
  }

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 50) {
      // do your stuff here for left swipe
      //console.log('left swipe')
      setActive((state)=> state + 1 > stub.length ? null : state + 1)
    }

    if (touchStart - touchEnd < -50) {
      // do your stuff here for right swipe
      //console.log('right swipe');
      setActive((state)=>state - 1 < 0 ? null : state - 1)
    }
  }
  
  return (
    <>
    <div className="hero-gothic accelerated"
      onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      onTouchEnd={() => handleTouchEnd()}
      >
      { 
        stub.map((i,index) => {
          return (
          <a 
            key={index} 
            data-slide={index} 
            onClick={(e)=>handleSetActive(e)} 
            role="button" 
            className={`hero-gothic__slide ${ parseInt(active) === parseInt(index) ? 'active' : ''}`}
            >
            <img src={i.image} />
              <div className="text">{i.text}<p>And room for more text</p></div>
          </a>
          )
        })
      }
    </div>
    </>
  )
}

export default HeroGothic