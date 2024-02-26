import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

type Props = {}

const Navbar = (props: Props) => {
    // This is grabbing the useTheme object from our theme library via the useTheme hook from mui
    const { palette } = useTheme()
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        Helllllooo, nurse!
    </FlexBetween>
  )
}

export default Navbar