import Box from '@mui/material/Box';
import { useScroll } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router-dom';
import ScrollProgress from 'src/components/scroll-progress';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom';
};

const StyledPolygon = styled('div')<StyledPolygonProps>(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      {/* <Box
        sx={{
          // overflow: 'hidden',
          position: 'relative',
          height: '10000px',
        }}
      >
        <Link href="./about-us" target="_blank">
          {' '}
          about us
        </Link>
        <Link href="./docs" target="_blank">
          {' '}
          docs
        </Link>
        <Link href="/setting" target="_blank">
          {' '}
          Setting
        </Link>
        <Link href="./faqs" target="_blank">
          {' '}
          Faqs
        </Link>
        <Link href="./contact-us" target="_blank">
          {' '}
          Contact us
        </Link>
      </Box> */}
      
    </>
  );
}
