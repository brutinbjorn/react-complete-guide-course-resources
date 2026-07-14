import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts';
import TabButton from './components/TabButton';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  
  function handleClick(selectedButton) {
    // Selected button => "components", "jsx", "props", "state".
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  
  console.log('App component rendered.');
  
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <p>{EXAMPLES[selectedTopic].description}</p>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1>hello world.</h1> {/*will be overridden by Header css file.*/}
      </header>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            img={CORE_CONCEPTS[0].image}/>
          */}

            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

            {/*
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            <CoreConcept {...CORE_CONCEPTS[0]} />*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}


export default App;
