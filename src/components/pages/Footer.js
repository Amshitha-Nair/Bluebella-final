import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#3982e0",
				textAlign: "center",
				marginTop: "-50px" }}>
		BLUEBELLA: One stop for all fashion needs !
	</h1>
	<Container>
		<Row>
		<Column>
			<FooterLink href="./AboutUs"><Heading>About Us</Heading></FooterLink>
		</Column>
		<Column>
			<Heading>Categories</Heading>
			<FooterLink href="./Men">Men</FooterLink>
			<FooterLink href="./Women">Women</FooterLink>
			<FooterLink href="./Kids">Kids</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us: (+91) 7056743900</Heading>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
		
	</Container>
	</Box>
);
};
export default Footer;
