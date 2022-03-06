import { useState, useContext } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homieService from "../../services/homie.service";
import uploadService from "../../services/upload.service";

const NewLivingPlaceForm = () => {
  const [livingPlaceData, setlivingPlaceData] = useState({
    title: "",
    category: "",
    images: "",
    price: "",
    m2: "",
    bedrooms: "",
    bathrooms: "",
    address: "",
    city: "",
    province: "",
    zipcode: "",
    country: "",
    description: "",
    condition: "",
    elevator: false,
    heating: false,
    "reduced mobility": false,
    parking: false,
    terrace: false,
    garden: false,
    "swimming pool": false,
    "air conditioning": false,
    "pets allowed": false
  });

  const [loadingImage, setLoadingImage] = useState(false);

  const {
    title,
    category,
    price,
    m2,
    bedrooms,
    bathrooms,
    address,
    city,
    province,
    zipcode,
    country,
    description,
    condition,
  } = livingPlaceData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setlivingPlaceData({
      ...livingPlaceData,
      [name]: inputValue,
    });
  };

  const [checked, setChecked] = useState(false);

  const uploadLivingPlaceImage = (e) => {
    setLoadingImage(true);

    const uploadData = new FormData();
    uploadData.append("images", e.target.files[0]);

    uploadService
      .uploadImage(uploadData)
      .then(({ data }) => {
        setLoadingImage(false);
        setlivingPlaceData({
          ...livingPlaceData,
          images: data.cloudinary_url,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    homieService
      .createLivingPlace(livingPlaceData)
      .then(({ data }) => {
        console.log(data);
        navigate("/profile/living-places");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col xs={{ span: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={handleInputChange}
                name="title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                type="text"
                onChange={handleInputChange}
                value={category}
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="flat">Flat</option>
                <option value="apartment">Apartment</option>
                <option value="penthouse">Penthouse</option>
                <option value="duplex">Duplex</option>
                <option value="house">House</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="amenities">
              <Form.Label>Amenities</Form.Label>

              <Form.Check
                type="checkbox"
                label="Elevator"
                name="elevator"
                onChange={() => setChecked(true)}
                value={checked}
              />
              <Form.Check
                type="checkbox"
                label="Heating"
                name="heating"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Reduced mobility"
                name="reduced mobility"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Parking"
                name="parking"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Terrace"
                name="terrace"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Garden"
                name="garden"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Swimming pool"
                name="swimming pool"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Air conditioning"
                name="air conditioning"
                value={checked}
                onChange={() => setChecked(true)}
              />
              <Form.Check
                type="checkbox"
                label="Pets allowed"
                name="pets allowed"
                value={checked}
                onChange={() => setChecked(true)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="condition">
              <Form.Label>Condition</Form.Label>
              <Form.Select
                name="condition"
                type="text"
                onChange={handleInputChange}
                value={condition}
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="New">New</option>
                <option value="Second hand">Second hand</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={handleInputChange}
                name="price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="m2">
              <Form.Label>Square meters</Form.Label>
              <Form.Control
                type="number"
                value={m2}
                onChange={handleInputChange}
                name="m2"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bedrooms">
              <Form.Label>Bedrooms</Form.Label>
              <Form.Control
                type="number"
                value={bedrooms}
                onChange={handleInputChange}
                name="bedrooms"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bathrooms">
              <Form.Label>Bathrooms</Form.Label>
              <Form.Control
                type="number"
                value={bathrooms}
                onChange={handleInputChange}
                name="bathrooms"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={handleInputChange}
                name="address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={handleInputChange}
                name="city"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="province">
              <Form.Label>Province</Form.Label>
              <Form.Control
                type="text"
                value={province}
                onChange={handleInputChange}
                name="province"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="zipcode">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="text"
                value={zipcode}
                onChange={handleInputChange}
                name="zipcode"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
                onChange={handleInputChange}
                name="country"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={handleInputChange}
                name="description"
              />
            </Form.Group>

            <Form.Group controlId="images" className="mb-3">
              <Form.Label>Select images</Form.Label>
              <Form.Control
                type="file"
                name="images"
                onChange={uploadLivingPlaceImage}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="dark" type="submit">
                Create new living place
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewLivingPlaceForm;
