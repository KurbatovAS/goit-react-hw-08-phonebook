import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';

import { authSelectors } from 'redux/auth';
import AppBar from 'components/AppBar';

function Layout() {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  return (
    <Box as="div" w={1170} mx="auto" px="1">
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback="Loading. Wait a moment, please  ...">
            <Outlet />
          </Suspense>
          <ToastContainer autoClose={3000} />
        </>
      )}
    </Box>
  );
}

export default Layout;
