import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


export default function Details() {
    return (
        <div>
            <Row xs={1} md={1} className="g-1">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card
                            text='dark'
                            bg="secondary"
                            style={{ width: '700px', height: "700px" }}>
                            <Card.Img
                                variant="top"
                                src="/hogwarts.jpg"
                                style={{ width: '100%', height: "50%" }} 
                                />
                            <Card.Body>
                                <Card.Title>Harry Potter Quiz</Card.Title>
                                <Card.Text>
                                    created by Admin
                                </Card.Text>
                                <Card.Text>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu interdum orci. Suspendisse sollicitudin, lectus vel molestie vehicula, diam erat.
                                </Card.Text>
                                <Link to="/catalog/quiz">
                                <Button variant="dark">Take Quiz</Button>{' '}
                                </Link>
                                <Link to="/catalog/:id/edit">  
                                <Button variant="dark">Edit</Button>{' '}
                                </Link>
                                <Link to="/catalog/:id/delete">
                                <Button variant="danger">Delete</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}