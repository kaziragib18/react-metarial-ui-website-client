import React, { useState } from 'react';
import { Button, TextField, Input, Alert } from '@mui/material';


const AddDoctor = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [image, setImage] = useState(null);
      const [success, setSuccess] = useState(false);

      const handleSubmit = e => {
            e.preventDefault();
            if (!image) {
                  return;
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('image', image);

            fetch('http://localhost:5000/doctors', {
                  method: 'POST',
                  body: formData
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              setSuccess('Doctor added successfully')
                              //      console.log('Doctor added successfully');
                        }
                  })
                  .catch(error => {
                        console.error('Error:', error);
                  });
      }

      return (
            <div>
                  <h1>Add Doctors page</h1>
                  <form onSubmit={handleSubmit}>
                        <TextField
                              sx={{ width: '50%', m: 1 }}
                              required
                              label="Name"
                              type="name"
                              name="Name"
                              onChange={e => setName(e.target.value)}
                              variant="standard"
                        /> <br />
                        <TextField
                              sx={{ width: '50%', m: 1 }}
                              required
                              label="Email"
                              type="email"
                              name="Email"
                              onChange={e => setEmail(e.target.value)}
                              variant="standard"
                        />
                        <br />
                        <Input sx={{ m: 2, width: '50%' }} accept="image/png, image/jpg" type="file"
                              onChange={e => setImage(e.target.files[0])}
                        />
                        <br />
                        <Button sx={{ ml: 2 }} variant="contained" type="submit">
                              Submit
                        </Button>
                  </form>
                  {/* {success && <p style={{ color: 'green' }}>{success}</p>} */}

                  {success && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center', marginTop:5 }}>{success}
                  </Alert>}
            </div>
      );
};

export default AddDoctor;