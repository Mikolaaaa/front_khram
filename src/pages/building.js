import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import '../App.css';

function Build() {
    const [videos, setVideos] = useState([]);
    const [showUpload, setShowUpload] = useState(false);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/videos/')
            .then(response => setVideos(response.data))
            .catch(error => console.error('Error fetching videos:', error));

        // Проверка на аутентификацию
        const token = localStorage.getItem('access');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleUploadClose = () => setShowUpload(false);
    const handleUploadShow = () => setShowUpload(true);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUploadSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', file);
        formData.append('title', title);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/videos/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`
                }
            });
            setVideos([...videos, response.data]);
            handleUploadClose();
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
    };

    return (
        <Container fluid="md">
            <h1 style={{ color: 'darkred', textAlign: 'center', margin: '20px 0' }}>Отчеты о строительстве храма</h1>
            <Row>
                {videos.map((video, index) => (
                    <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
                        <Card className="h-100">
                            <Video className="card-img-top">
                                <source src={video.video} type="video/mp4" />
                            </Video>
                            <Card.Body>
                                <Card.Text className="text-center">{video.title}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {isAuthenticated && (
                <Button variant="primary" onClick={handleUploadShow}>Upload Video</Button>
            )}
            <Modal show={showUpload} onHide={handleUploadClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUploadSubmit}>
                        <Form.Group controlId="formFile">
                            <Form.Label>Video</Form.Label>
                            <Form.Control type="file" onChange={handleFileChange} />
                        </Form.Group>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Upload</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Build;
