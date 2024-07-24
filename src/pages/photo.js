import React, { useEffect, useState } from 'react';
import { Button, Modal, Row, Col, Container, Form } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Photo() {
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [showUpload, setShowUpload] = useState(false);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/photos/')
            .then(response => setImages(response.data))
            .catch(error => console.error('Error fetching photos:', error));

        // Проверка на аутентификацию
        const token = localStorage.getItem('access');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setCurrentImage(image.image);
        setShow(true);
    };

    const handleUploadClose = () => setShowUpload(false);
    const handleUploadShow = () => setShowUpload(true);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUploadSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('description', description);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/photos/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`
                }
            });
            setImages([...images, response.data]);
            handleUploadClose();
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/delete_Photo/${id}/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access')}`
                }
            });
            setImages(images.filter(image => image.id !== id));
        } catch (error) {
            console.error('There was an error deleting the file!', error);
        }
    };

    return (
        <div className="photo-gallery-container">
            <h1 className="gallery-title">Фотогалерея храма</h1>
            <Container>
                <Row>
                    {images.map((image, index) => (
                        <Col key={index} xs={12} md={4} className="mb-4">
                            <div className="image-container" onClick={() => handleShow(image)}>
                                <img src={image.image} alt={image.description} className="gallery-image" />
                                <br></br>
                                <br></br>
                                <h2>{image.description}</h2>
                                {isAuthenticated && (
                                    <Button
                                        variant="danger"
                                        onClick={(e) => { e.stopPropagation(); handleDelete(image.id); }}
                                        className="delete-button"
                                    >
                                        Delete
                                    </Button>
                                )}
                            </div>

                        </Col>
                    ))}
                </Row>
            </Container>
            {isAuthenticated && (
                <Button variant="primary" onClick={handleUploadShow}>Upload Photo</Button>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="" className="img-fluid" />
                </Modal.Body>
            </Modal>

            <Modal show={showUpload} onHide={handleUploadClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUploadSubmit}>
                        <Form.Group controlId="formFile">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="file" onChange={handleFileChange} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Upload</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Photo;
