import { useEffect } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk } from "../store/slices/poduct.slice";

const ProductDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductThunk());
	}, []);

	const newProduct = useSelector((state) => state.product);

	const products = newProduct.find((newsItem) => newsItem.id === Number(id));

	const productsRelated = newProduct.filter(
		(related) =>
			related.category.id === products?.category.id &&
			related.id !== products.id
	);
	console.log(productsRelated);
	return (
		<div>
			<Row>
				<Col lg={9}>
					<Card>
						<Card.Img variant="top" src={products?.productImgs[0]} />
						<Card.Body>
							<Card.Title>Card title{products?.title}</Card.Title>
							<div style={{ fontSize: "50px", color: "black" }}>
								<b>$ {products?.price} </b>
							</div>
							<Card.Text>{products?.description}</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col>
					<ListGroup>
						{productsRelated.map((related) => (
							<ListGroup.Item>
								<img
									src={related?.productImgs[0]}
									alt=""
									className="img-fluid"
								/>
								<Link to={`/product/${related.id}`}>{related.title}</Link>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>

			<br />

			<div></div>
		</div>
	);
};
export default ProductDetail;
