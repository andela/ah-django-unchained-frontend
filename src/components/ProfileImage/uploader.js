import axios from 'axios'
export default upload => {
    const url = `https://api.cloudinary.com/v1_1/authors/upload`;
    const formData = new FormData();
    
    const headers = { "Content-Type": "application/x-wwww-form-urlencoded", "mode":'no-cors'};
    formData.append("file", upload.image);
    formData.append("upload_preset", "default-preset");
    return axios.post(url, formData, { headers: headers });
  };