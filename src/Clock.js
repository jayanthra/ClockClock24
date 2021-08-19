import './App.css';

function getMinRotation(shape) {
  if (shape === 11) {
    const now = new Date();
    const seconds = now.getSeconds()
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 180;
    return `rotate(${minsDegrees}deg)`;
  } else {
    let rotate = [45, 270, 0, 0, 90, 0, 270, 315, 225, 135, 45]
    return `rotate(${rotate[shape]}deg)`
  }
}

function getHourRotation(shape) {
  if (shape === 11) {
    const now = new Date();
    const hour = now.getHours();
    const mins = now.getMinutes();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 180;
    return `rotate(${hourDegrees}deg)`;
  } else {
    let rotate = [45, 180, 270, 90, 180, 180, 90, 180, 0, 0, 180]
    return `rotate(${rotate[shape]}deg)`
  }
}

function Clock(props) {

  return (
    <div className="Clock">
      <div className="clock-face">
        <div style={{ transform: getHourRotation(props.shape) }} className="hour"></div>
        <div style={{ transform: getMinRotation(props.shape) }} className="minute"></div>
      </div>
    </div>
  );
}

export default Clock;
