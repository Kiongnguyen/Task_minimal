import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from "@mui/material/styles";
import { NavProps } from "./types"
import { useCallback, useState } from "react";
// ----------------------------------------------------------------------



export default function TabsMobile({  data }: NavProps) {
  const theme = useTheme(); 
  const [currentTab, setCurrentTab] = useState('profile');
  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);
      return (
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          
          sx={{
            width: 1,
            height: "60px",
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            bgcolor: theme.palette.grey[200],
            borderBottomRightRadius: 7,
            borderBottomLeftRadius: 7,
            [`& .${tabsClasses.flexContainer}`]: {
              pr: { md: 3 },
              justifyContent: 'space-around'
            },
          }}
        >
           {data.map((tab) => (
            <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
          ))}
        </Tabs>
      )
      
    }

    
// ----------------------------------------------------------------------


