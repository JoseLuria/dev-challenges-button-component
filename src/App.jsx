import Button from "./components/Button/Button"
import ElementContainer from "./components/ElementContainer/ElementContainer"
import MainContainer from "./components/MainContainer/MainContainer"
import ButtonsContainer from "./components/ButtonsContainer/ButtonsContainer"
import Footer from "./components/Footer/Footer"

function App() {
  return (
      <div className="App">
        <MainContainer>
          <ElementContainer title="<Button />">
            <Button>Default</Button>
          </ElementContainer>

          <ElementContainer title="<Button variant=”outline” />">
            <Button variant="outline">Default</Button>
          </ElementContainer>

          <ElementContainer title="<Button variant=”text” />">
            <Button variant="text">Default</Button>
          </ElementContainer>

          <ElementContainer title="<Button disableShadow />">
            <Button color="primary" disableShadow>Default</Button>
          </ElementContainer>

          <ButtonsContainer>
            <ElementContainer title="<Button disabled />">
              <Button disabled>Disabled</Button>
            </ElementContainer>

            <ElementContainer title="<Button variant=”text” disabled />">
              <Button variant="text" disabled>Disabled</Button>
            </ElementContainer>
          </ButtonsContainer>

          <ButtonsContainer>
            <ElementContainer title="<Button startIcon=”local_grocery_store” />">
              <Button color="primary" startIcon="local_grocery_store">Default</Button>
            </ElementContainer>

            <ElementContainer title="<Button endIcon=”local_grocery_store” />">
              <Button color="primary" endIcon="local_grocery_store">Default</Button>
            </ElementContainer>
          </ButtonsContainer>

          <ButtonsContainer>
            <ElementContainer title="<Button size=”sm” />">
              <Button color="primary" size="sm">Default</Button>
            </ElementContainer>

            <ElementContainer title="<Button size=”md” />">
              <Button color="primary" size="md">Default</Button>
            </ElementContainer>

            <ElementContainer title="<Button size=”lg” />">
              <Button color="primary" size="lg">Default</Button>
            </ElementContainer>
          </ButtonsContainer>

          <ButtonsContainer>
            <ElementContainer title="<Button color=”default” />">
              <Button color="default">Default</Button>
            </ElementContainer>
    
            <ElementContainer title="<Button color=”primary” />">
              <Button color="primary">Default</Button>
            </ElementContainer>
    
            <ElementContainer title="<Button color=”secondary” />">
              <Button color="secondary">Default</Button>
            </ElementContainer>
    
            <ElementContainer title="<Button color=”danger” />">
              <Button color="danger">Default</Button>
            </ElementContainer>
          </ButtonsContainer>
        </MainContainer>
        <Footer />
      </div>
  )
}

export default App
