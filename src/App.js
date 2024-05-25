import Title from './components/Title'
import Input from './components/input/Input'
import Table from './components/table/Information_Table'
import Map from './components/map/Map';

function App() {
  return (
    <div className="App">
      <main className="w-screen h-screen">
        {/* headers */}
        <section id="top-bg" className='w-full px-6 h-[30%] bg-slate-400 bg-mobile sm:bg-desktop'>
          <Title title="IP Address Tracker"></Title>
          <Input></Input>
          <Table></Table>
        </section>
        {/* map */}
        <section className='h-[70%]'>
          <Map></Map>
        </section>
      </main>
    </div>
  );
}

export default App;
