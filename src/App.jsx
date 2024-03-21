
import './App.css';
import AreaCharts from './components/AreaCharts';
import BarCharts from './components/BarCharts';
import LineCharts from './components/LineCharts';
function App() {


  return (
    <main className="bg-slate-900 flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <GridItem title="Area Chart">
          <AreaCharts />
        </GridItem>
        <GridItem title="Bar Chart">
          <BarCharts />
        </GridItem>
        <GridItem title="Line Chart">
          <LineCharts />
        </GridItem>
      </div>
    </main>
  )
}
function GridItem({ title, children }) {
  return (
    <div className="h-[400px] w-[400px] flex flex-col items-center justify-center p-4 m-4 border border-state-700 bg-slate-700 rounded-xl">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  )
}

export default App
