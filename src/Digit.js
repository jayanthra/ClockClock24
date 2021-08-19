import Clock from "./Clock";
import './App.css';

function Digit(prop) {
  const ZERO = [
    2, 6, 6, 3,
    5, 2, 3, 5,
    5, 5, 5, 5,
    5, 5, 5, 5,
    5, 1, 4, 5,
    1, 6, 6, 4
  ]
  const ONE = [
    2, 6, 3, 0,
    1, 3, 5, 0,
    0, 5, 5, 0,
    0, 5, 5, 0,
    2, 4, 1, 3,
    1, 6, 6, 4
  ]
  const TWO = [
    2, 6, 6, 3,
    1, 6, 3, 5,
    2, 6, 4, 5,
    5, 2, 6, 4,
    5, 1, 6, 3,
    1, 6, 6, 4
  ]
  const THREE = [
    2, 6, 6, 3,
    1, 6, 3, 5,
    0, 2, 4, 10,
    0, 1, 3, 9,
    2, 6, 4, 5,
    1, 6, 6, 4
  ]
  const FOUR = [
    2, 3, 0, 0,
    5, 5, 2, 3,
    5, 1, 4, 5,
    1, 6, 3, 5,
    0, 0, 5, 5,
    0, 0, 1, 4,
  ]
  const FIVE = [
    2, 6, 6, 3,
    5, 2, 6, 4,
    5, 1, 6, 3,
    1, 6, 3, 5,
    2, 6, 4, 5,
    1, 6, 6, 4,
  ]
  const SIX = [
    2, 6, 6, 3,
    5, 2, 6, 4,
    5, 1, 6, 3,
    5, 2, 3, 5,
    5, 1, 4, 5,
    1, 6, 6, 4,
  ]
  const SEVEN = [
    2, 6, 6, 3,
    1, 6, 3, 5,
    0, 0, 5, 5,
    0, 0, 5, 5,
    0, 0, 5, 5,
    0, 0, 1, 4,
  ]
  const EIGHT = [
    2, 6, 6, 3,
    5, 2, 3, 5,
    7, 1, 4, 10,
    8, 2, 3, 9,
    5, 1, 4, 5,
    1, 6, 6, 4,
  ]
  const NINE = [
    2, 6, 6, 3,
    5, 2, 3, 5,
    5, 1, 4, 5,
    1, 6, 3, 5,
    0, 0, 5, 5,
    0, 0, 1, 4,
  ]

  const TIME = [
    11, 11, 11, 11,
    11, 11, 11, 11,
    11, 11, 11, 11,
    11, 11, 11, 11,
    11, 11, 11, 11,
    11, 11, 11, 11,
  ]
  const segmentArr = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TIME]
  const segments = segmentArr[parseInt(prop.value)]
  return (
    <div>
      <div className="Digit">
        {segments.map((segment, i) => <Clock key={i} shape={segment} />)}
      </div>
    </div>
  );
}

export default Digit;
