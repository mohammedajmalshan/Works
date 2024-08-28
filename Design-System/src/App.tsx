
import './App.css'
import Typography from './components/atom/typography/Typography'

function App() {


  return (
    <>
     <Typography text="Hello Mohammed Ajmal Shan" tag="h1" className='title-text-bold' style={{color:"red"}} role="heading" ariaLabel="welcome" ariaLabelledBy="title"/>
     <Typography text="hey yoooo" tag='p'  />
     </>
  )
}

export default App
