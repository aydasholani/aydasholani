import { Card } from 'react-bootstrap';

export default function WeatherCard(props) {
  if (!props.data) {
    return null; // Render nothing if data is null
  }
  
  return (
    <Card style={{ width: '20rem', margin: 'auto' }} className='weather-wrapper'>
      <Card.Img variant="top" src={props.data.icon} />
      <Card.Body>
        <Card.Title>
          Weather in {props.data.name}
          <img 
            src={props.data.icon} 
            alt={props.data.icon}
            className='icon' 
          /> 
        </Card.Title>
        <Card.Text>
          Temperature: {Math.ceil(props.data.temp)}°C<br />
          Feels like: {Math.ceil(props.data.feelsLike)}°C<br />
          Description: {props.data.description}
          Description: {props.data.main}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
