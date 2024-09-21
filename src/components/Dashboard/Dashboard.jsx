import * as React from 'react';

import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from './theme/customizations';
import FarmerRegistrationForm from '../Registration/Forms/FarmersForm';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function Dashboard(props) {
    const [selectedOption, setSelectedOption] = React.useState('Home');

    const renderContent = () => {
        switch (selectedOption) {
            case 'Home':
                return <MainGrid />;
            case 'Registration':
                //Here you should make it such that it renders the form based on who is logged in
                return <FarmerRegistrationForm />;
            // Add more cases as per your SideMenu options
            default:
                return <MainGrid />;
        }
    };

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu onOptionSelect={setSelectedOption} selectedMenuItem={selectedOption} />
                <AppNavbar />
                {/* Main content */}
                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        // backgroundColor: theme.vars
                        //     ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                        //     : alpha(theme.palette.background.default, 1),
                        backgroundColor: '#f3feef',
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 10,
                            mt: { xs: 8, md: 0 },
                        }}
                    >
                        <Header selectedMenuItem={selectedOption} />
                        {renderContent()}
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}