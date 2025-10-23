
import { Heading, Highlight, Center, Box} from '@chakra-ui/react'



function App() {



  return (
  <>
    <Box display="flex" alignItems="center" justifyContent="center">
    <Heading size="3xl" letterspacing="tight">
      <Highlight query="populating the page" styles={{color:"teal.600"}}>
      Let's begin populating the page with content
     </Highlight>
      </Heading>
      </Box>

<Box display="flex" alignItems="center" justifyContent="center">
  <Highlight query="Two Boxes" styles={{ fontWeight: "semibold", color:"teal.600" }}>
      We're gonna generate Two Boxes and inject our Database content into them
    </Highlight>
          </Box>


</>
  )
}

export default App
