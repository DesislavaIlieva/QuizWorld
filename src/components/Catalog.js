import './Catalog.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Catalog() {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card
                            text='dark'
                            bg="secondary"
                            style={{ width: '400px', height: "400px" }}>
                            <Card.Img
                                variant="top"
                                src="hogwarts.jpg"
                                style={{ width: '100%', height: "50%" }} 
                                />
                            <Card.Body>
                                <Card.Title>Harry Potter Quiz</Card.Title>
                                <Card.Text>
                                    created by Admin
                                </Card.Text>
                                <Button variant="dark">Take Quiz</Button>{' '}
                                <Button variant="dark">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}


