import React from 'react'
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../../../../assets/icons/body-part.png';
import TargetImage from '../../../../assets/icons/target.png';
import EquipmentImage from '../../../../assets/icons/body-part.png';


export default function Details({ exerciseDetails }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
      
    },
    {
      icon: EquipmentImage,
      name: equipment
    },
  ]
  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItem: 'center' }} >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }} >
        <Typography variant='h3' textTransform='capitalize' >
          {name}
        </Typography>
        <Typography variant='h6' textTransform='capitalize' >
          Exercise Keep you Strong.{name} is one of the best exercises to target your {target}.
          It will help and improve your mood and energy.
        </Typography>
        {
          extraDetails.map((item) => (
            <Stack key={item.name} gap='24px' direction='row' alignItems='center' >
              <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }} >
                <img src={item.icon} alt={item.name}  />
              </Button>
              <Typography textTransform='capitalize' variant='h5' >
                {item.name}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}
