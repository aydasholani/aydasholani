import { Container } from 'react-bootstrap';
import MySkills from '../components/MySkills';

export default function Skills() {

  return (
    <div className='d-flex align-items-center justify-content-center 100vh'>
      <Container className="p-4">
        <h2>Skills</h2>
        <MySkills />
      </Container>
    </div>
  )
}
