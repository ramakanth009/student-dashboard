import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ErrorBoundary from './error-boundary';

// Component that throws an error
const BuggyComponent = () => {
  throw new Error('Test Error: This is an intentional error for testing!');
  return <div>This won't render</div>;
};

// Component with a button to trigger error
const ErrorButton = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  if (shouldThrowError) {
    throw new Error('Test Error: Button triggered error!');
  }

  return (
    <Button 
      variant="contained" 
      color="error"
      onClick={() => setShouldThrowError(true)}
    >
      Trigger Error
    </Button>
  );
};

// Test wrapper component
const ErrorTestPage = () => {
  return (
    <Box className="p-8 space-y-8">
      <Typography variant="h4" className="mb-4">
        Error Boundary Test Page
      </Typography>

      <Box className="space-y-8">
        {/* Test case 1: Component that throws error immediately */}
        <Box className="p-4 border rounded">
          <Typography variant="h6" className="mb-4">
            Test 1: Component with Immediate Error
          </Typography>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </Box>

        {/* Test case 2: Component that throws error on button click */}
        <Box className="p-4 border rounded">
          <Typography variant="h6" className="mb-4">
            Test 2: Error on Button Click
          </Typography>
          <ErrorBoundary>
            <ErrorButton />
          </ErrorBoundary>
        </Box>

        {/* Test case 3: Nested error boundaries */}
        <Box className="p-4 border rounded">
          <Typography variant="h6" className="mb-4">
            Test 3: Nested Error Boundaries
          </Typography>
          <ErrorBoundary>
            <Box className="space-y-4">
              <ErrorBoundary>
                <BuggyComponent />
              </ErrorBoundary>
              <ErrorBoundary>
                <ErrorButton />
              </ErrorBoundary>
            </Box>
          </ErrorBoundary>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorTestPage;