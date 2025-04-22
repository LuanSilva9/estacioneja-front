import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { rootColors } from '../../constants/pallete';
import { EMPTY } from '../../defaultValues';

import { FaLock, FaLockOpen } from 'react-icons/fa';

export default function EJCardCompany({ MapperCompany }) {
    return (
        <Card sx={{ maxWidth: 480, width: '100%' }}>
        <CardActionArea>
        <CardMedia
            component={'div'}
            
            sx={{ height: 150, background: MapperCompany.companyColor == EMPTY ? '#ccc' : `linear-gradient(180deg, ${MapperCompany.companyColor}, ${rootColors.colorGreenPrimary})` }}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" display={'flex'} justifyContent={'space-between'}>
            {MapperCompany.companyName} {' '} { MapperCompany.companyLocked ? <FaLock style={{ color: '#545454' }} /> : <FaLockOpen style={{ color: '#545454' }} />  }

            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {MapperCompany.companyAddress.street} - {MapperCompany.companyAddress.neighborhood}, {MapperCompany.companyCity.name}, {MapperCompany.companyCity.uf}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" variant='contained'>
                Share
            </Button>
        </CardActions>
        </Card>
    )
}

// <div className="card-company">
//             <img src={MapperCompany.companyLogo} alt="label-image-company" />

//             <div className="info-card-company">
//                 <h2>{MapperCompany.companyName}</h2>
//                 <p>{MapperCompany.companyAddress.street} - {MapperCompany.companyAddress.neighborhood}</p>
//             </div>
//         </div>