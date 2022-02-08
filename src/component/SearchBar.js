import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const SearchBar = () => {
    return (
        <Box
            justifyContent="center"
            alignItems="center"
            sx={{
                width: "960px",
                maxWidth: '100%',
            }}
        >
            <TextField
                sx={{
                    '& fieldset': {
                        borderRadius: '0px',
                    },
                }}
                fullWidth label="검색어를 입력하세요" id="fullWidth"
            />
        </Box>
    );
};

export default SearchBar;