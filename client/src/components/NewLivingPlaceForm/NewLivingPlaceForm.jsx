import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MessageContext } from "../../context/userMessage.context";
import homieService from "../../services/homie.service";

const NewLivingPlaceForm = () => {
  const [livingPlaceData, setlivingPlaceData] = useState({
    title: "",
    category: "",
    price: "",
    imageUrl: "",
    [location.address]:"",
    [location.city]:"",
    [location.province]:"",
    [location.zipcode]:"",
    [location.country]:"",
    description:"",
    condition:"",
    [features.m2]:"",
    [features.bedrooms]:"",
    [features.bathrooms]:"",
    [features.amenities]:[""],
    });

  const { title, category, price, imageUrl, location, description, condition, features } = livingPlaceData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setlivingPlaceData({
      ...livingPlaceData,
      [name]: value, // computed propery names
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    homieService
      .createLivingPlace(livingPlaceData)
      .then(({ data }) => {
       console.log(data)
      })
      .catch((err) => console.log(err));
  };

  return (
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

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={handleInputChange}
          name="description"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={handleInputChange}
          name="length"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inversions">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="number"
          value={location.address}
          onChange={handleInputChange}
          name="inversions"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Imagen (pega la URL)</Form.Label>
        <Form.Control
          type="url"
          value={imageUrl}
          onChange={handleInputChange}
          name="imageUrl"
        />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="dark" type="submit">
          Crear montaña rusa
        </Button>
      </div>
    </Form>
  );
};

export default NewLivingPlaceForm;
