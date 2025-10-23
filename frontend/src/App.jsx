
import { Heading, Highlight, Text} from '@chakra-ui/react'




function App() {



  return (
  <>

    <Heading size="3xl" letterspacing="tight">
      <Highlight query="populating the page" styles={{color:"teal.600"}}>
      Let's begin populating the page with content
     </Highlight>
      </Heading>
  <Highlight query="Two Boxes" styles={{ fontWeight: "semibold", color:"teal.600" }}>
      We're gonna generate Two Boxes and inject our Database content into them
    </Highlight>

</>
  )
}

export default App
