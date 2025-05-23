import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div``;

const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 3px 6px 6px;
  text-align: center;
  background: var(--dark-color);
  color: var(--light-color);
  width: 100px;
  border-radius: 30px;
`;

const Number = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 6px 12px;
`;

const ContactItem = ({ item }) => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABlBMVEXJycmcnJyshIZ4AAAB7ElEQVR4nO3bUW7DMAwEUfv+ly4SGEXQ2kksk1xqPXMCvj8BIpeFiIiIiIiIiIiIiIiIiKio9TX1MIOt+6nHOtcBYjbMB8YklC8UM1i+ZjSnnHL0lZxkdKUMMFpSBh3tJMOOXpILjFaUi442ksuOJpIARwtJiKOBJMihl7hAwhxiSaBDKgl1KCUukGCHThIOEUniHRpIgkMjcYGkOBQSIM0kWQ4g3RzVEiBApnPUSoAAAaJzVEqAAAECBAgQIECAzCopdAABAkQoKXUAATKfpNjhA7H5Q+RXtx3EZvPBB2KzHeSzr+WzQWez0+gDsdn79dnE9tmN94HY3I/4XPT43Fj5XL353CEuNpehi8+trs/19GJzz74MSNQDH2fCeGTCeGTCeOah2LJA/OZgICIioq35nygOr9+Phhk0JxCNMQOKhpZhRS/LRUYTSoCigyWMoaWEMnSUcIaGksIQUNIcRjvlhZRkR5UknVFEKXHkS4oY6ZRCR6qk1JEoKXakScodSRKBI0MiYSRQZI5gidARK3GBSB2BErEjTKJmrEESNeKZiyNCohZsuTguS9TjvwSkmeOSRD36n4CoB//X3SHqsXe6N0Q99G53hqhHPghIt1wc5yXqeQ+7K0Q97puAdOueEPWwbwPSLSDd2p34B3GsN/j6gvMWAAAAAElFTkSuQmCC"
            alt="unknowImg"
          />
        </Col>
        <Col xs={9}>
          <Name>{item?.name}</Name>
          <Number>{item?.number}</Number>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactItem;
