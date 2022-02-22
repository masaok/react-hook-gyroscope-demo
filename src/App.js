import './App.css'

import useGyroscope from 'react-hook-gyroscope'

const onGyroscopeUpdate = gyro => {
  console.log('NEW GYRO INFO: ', gyro)
}

function App() {
  const gyro = useGyroscope({ frequency: 5 }, onGyroscopeUpdate)

  return (
    <div className="App">
      <header className="App-header">
        <div>Gyroscope Sensor Demo</div>
        <div>X: {gyro.x}</div>
        <div>Y: {gyro.y}</div>
        <div>Z: {gyro.z}</div>
      </header>
    </div>
  )
}

export default App
