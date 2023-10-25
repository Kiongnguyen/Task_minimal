import Box from "@mui/material/Box";

import Card from '@mui/material/Card';

import ProfileCover from "../card-profile";

import { useResponsive } from 'src/hooks/use-responsive';
import { tabsConfigDesk, tabsConfigMobile } from "../tabs-config";
import TabsMobile from "../tabs-mobile";
import TabsDestop from "../tabs-destop";
import TabsTables from "../tabs-tables";



export default function ComponenrsView() {
  const mobileUp = useResponsive('up','sm');
  const tables = useResponsive('between','sm','md');

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '290px',
          width: '100%',
          
        }}
      >
         <Card
        sx={{
          height: "100%",
        }}
      >
        <ProfileCover
          role= 'Kiong'
          name='Kiong'
          avatarUrl='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg'
          coverUrl='src/sections/components/view/bgcolor.png'
        />

        {!mobileUp &&  <TabsMobile data={tabsConfigMobile}/>}
        {mobileUp && <TabsDestop data={tabsConfigDesk}/>}
        {tables && <TabsTables data={tabsConfigDesk}/>}

        
       
      </Card>
      </Box>
     
      
    </>
  );
}