import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled, useTheme } from '@mui/system';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 700],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(0);
  const theme = useTheme()
  const ticking = React.useRef(false)

  React.useEffect(() => {
    document.addEventListener('scroll', updateProgressBar)
    updateProgressBar()
    return () => document.removeEventListener('scroll', updateProgressBar)
  }, [])

  const updateProgressBar = () => {
    if (!ticking.current) {
      const windowHeight = document.documentElement.offsetHeight - window.innerHeight
      window.requestAnimationFrame(() => {
        setProgress(Math.floor((window.pageYOffset / windowHeight) * 75))
        ticking.current = false
      })
    }
    ticking.current = true
  }

  return (
    <Box sx={{ width: '100%' }}>
      <BorderLinearProgress variant='determinate' value={25 + progress} />
    </Box>
  );
}

