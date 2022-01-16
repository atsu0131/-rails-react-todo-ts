import React, { useState, useEffect } from "react";
import { Link, Navigate, useRoutes, BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "../../theme/theme"

export const About: React.FC = () => {
    return (
      <ChakraProvider theme={theme}>
        <Button>ooo</Button>
      </ChakraProvider>
    )
  }