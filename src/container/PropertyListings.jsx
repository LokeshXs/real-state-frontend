import { Avatar, Box, Button, CircularProgress, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, MenuItem, Modal, Select, Switch, Tab, Tabs, TextField, styled } from '@mui/material'
import { useFormik } from 'formik';
import { useState } from 'react'
import TextFieldComponent from '../components/TextField';
import { AttachMoney, Cancel, CloudUpload } from '@mui/icons-material';

import PropertyListForms from './PropertyListForms';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});




const PropertyListings = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setSelectedImages((prev) => [...prev, ...files])
  }

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>List Property</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div className=' absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[90%] w-[80%] max-xl:w-[90%] bg-white shadow-md flex max-lg:flex-col justify-center items-center rounded-lg  2xl:max-w-[1440px] p-4 max-sm:p-2 overflow-y-auto'>
      {isSubmitting?<CircularProgress />:<>
        <div className='p-4 flex flex-col'>
            <div className=' h-[400px] max-lg:h-auto w-[400px] max-sm:w-[300px] overflow-y-auto border-dashed border-2 border-primaryLight flex justify-start p-4 gap-6 flex-wrap'>

              {selectedImages.map((image, index) => {
                return (
                  <div key={index} className='relative'>
                    <Avatar src={URL.createObjectURL(image)} alt={`Preview ${index}`} variant="rounded" sx={{ width: 56, height: 56 }} />
                    <Cancel fontSize='small' onClick={() => {
                      handleRemoveImage(index)
                    }} sx={{ position: "absolute", top: -10, right: -10 }} />
                  </div>
                )
              })}

            </div>
            <Button component="label" variant="contained" startIcon={<CloudUpload />}>
              Select Image
              <VisuallyHiddenInput type="file" onChange={handleImageChange} multiple />
            </Button>

          </div>
          <div className='flex-1 p-4 max-sm:p-2  flex flex-col max-lg:w-full'>

            <div className=' flex justify-center w-full '>
              <Tabs value={value} aria-label="tabs" variant="scrollable" >
                <Tab label="Basic Details" {...a11yProps(0)} />
                <Tab label="More Features" {...a11yProps(1)} />
                <Tab label="Confirm" {...a11yProps(2)} />
              </Tabs>
            </div>
            <div className='flex-1 flex flex-col justify-between py-6'>

              <PropertyListForms value={value} handleChange={handleChange} selectedImages={selectedImages} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} setOpen={setOpen} />


            </div>
          </div>
      </>}
  
        </div>
      </Modal>
    </div>
  )
}

export default PropertyListings