export const uploadFile = async(file) =>{
    const formData = new FormData();
    
    formData.append('upload_preset', 'crudSaver')
    formData.append('file', file);

    const resp = await fetch ("https://api.cloudinary.com/v1_1/dd5yolnde/upload", {
        method: 'POST',
        body: formData
    })
    const imagenURL = await resp.json();
    return imagenURL.secure_url
}