import Card from 'react-bootstrap/Card';
import './cards.modules.css';

const Cards = ({ classes }) => {
    return (
        <Card className={classes}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}

export default Cards;