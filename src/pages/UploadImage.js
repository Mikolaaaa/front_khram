import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function UploadImage({ onImageUpload }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageUpload(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.File
                    label="Выберите изображение для загрузки"
                    onChange={handleFileChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Загрузить
            </Button>
        </Form>
    );
}

export default UploadImage;
