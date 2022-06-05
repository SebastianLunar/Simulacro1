
import React from 'react';
import Forms from '../hooks/Forms';
import { Form, Button } from 'react-bootstrap';
import { uploadFile } from '../helper/uploadFile';
import axios from 'axios';
import styled from 'styled-components';

const DivMain = styled.div`
    padding: 50px;
    margin: 0 auto;
    width: 700px;
`

const Upload = () => {
    const [data, handleChange, reset, uploadImg] = Forms({
        name: "",
        description: "",
        tag: "",
        price: 0,
        img: ""
    })

    const handleImg = ({ target }) => {
        const file = target.files[0];
        uploadFile(file)
            .then(resp => uploadImg(resp))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://crudsimulacro1.herokuapp.com/productos", data);
        alert("Product succesfully added");
        reset();
    }

    return (
        <>
            <DivMain>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Product name"
                            name="name"
                            onChange={handleChange}
                            value={data.name} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Product Description</Form.Label>
                        <Form.Control type="text" placeholder="Add a brief description"
                            name="description"
                            onChange={handleChange}
                            value={data.description} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Category</Form.Label>
                        <Form.Control type="text" placeholder="¿What kind of product is it?"
                            name="tag"
                            onChange={handleChange}
                            value={data.tag} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Price</Form.Label>
                        <Form.Control type="number" min="0" placeholder="0"
                            name="price"
                            onChange={handleChange}
                            value={data.price} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="file" name='img' onChange={handleImg} />
                    </Form.Group>

                    <Button variant="primary" type="submit" htmlType="submit">
                        Add product
                    </Button>
                </Form>
            </DivMain>
        </>
    )
}

export default Upload