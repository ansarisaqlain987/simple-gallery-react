import { Card } from "react-bootstrap";
const CustomImageCard = ({ id, server, secret, title }) => {
    return (
        <Card style={{ backgroundColor: '#000' }}>
            <Card.Img style={{ backgroundColor: '#000' }} src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`} />
        </Card>

    );
}

export default CustomImageCard;