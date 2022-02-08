import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {Paper, Typography, Box} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { fontSize, height } from '@mui/system';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

export const Categorie = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
        { key: 5, label: 'MUI' },
      ]);

  return (
    <Box
            justifyContent="center"
            alignItems="center"
            sx={{
                mb: "60px",
                width: "100%",
                maxWidth: '100%',
            }}>
    <Paper
    sx={{
        margin: "30px",
        maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      p: 0.4,
      m: 0,
      boxShadow: '0'
      
    }}
    component="ul"
  >
    {chipData.map((data) => {
      let icon;

      if (data.label === 'React') {
        icon = <TagFacesIcon />;
      }

      return (
        <ListItem key={data.key}>
          <Chip
            sx={{
                width: '130px',
                height: '60px',
                fontSize: '100',
                borderRadius: 25,
              }}
            icon={icon}
            label={<Typography variant="headline" component="h4"> {data.label} </Typography>}
          />
        </ListItem>
      );
    })}
  </Paper>
  </Box>
  );
};
