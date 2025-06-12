import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function Product(props) {
  let { deleteFunction } = props;
  let { name, price, id, onSale, desc } = props.myprod;

  return (
    <>
      <Card border="primary" style={{ width: "45rem", marginTop: "15px" }}>
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          MODEL: <b>{name}</b>
          {onSale && <Badge bg="danger">on sale</Badge>}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            PRICE: <b>{price}</b>
          </Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <button
          className="btn btn-danger mt-3"
          onClick={() => {
            deleteFunction(id);
          }}
        >
          Delete
        </button>
        <button className="btn btn-outline-warning mt-2">UPDATE</button>
      </Card>
      <br />
    </>
  );
}

export default Product;
