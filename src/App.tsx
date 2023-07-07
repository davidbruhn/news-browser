import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './App.css'
import TopHeadlines from './components/TopHeadlines';
import FavoriteArticles from './components/FavoriteArticles';

function App() {
  return <div className='container'>
    <Tabs className='menu'>
      <TabList>
        <Tab>Top headlines</Tab>
        <Tab>Favorites</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TopHeadlines />
        </TabPanel>
        <TabPanel>
          <FavoriteArticles />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
}

export default App
