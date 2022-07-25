import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <Card
            bg="secondary"
            text='dark'
            style={{ width: '700px', height: "700px" }}>
            <Card.Img
              variant="top"
              src="hogwarts.jpg"
              style={{ width: '100%', height: "70%" }}
            />
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-center">
                  Harry Potter Quiz
                </div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  created by Admin
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="dark">Take Quiz</Button>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card
            bg="secondary"
            text='dark'
            style={{ width: '700px', height: "700px" }}>
            <Card.Img
              variant="top"
              src="stranger.jpg"
              style={{ width: '100%', height: "70%" }}
            />
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-center">
                  Stranger Things Quiz
                </div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  created by Admin
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="dark">Take Quiz</Button>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card
            bg="secondary"
            text='dark'
            style={{ width: '700px', height: "700px" }}>
            <Card.Img
              variant="top"
              src="lord.jpg"
              style={{ width: '100%', height: "70%" }}
            />
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-center">
                  Lord of the Rings Quiz
                </div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  created by Admin
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="dark">Take Quiz</Button>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

