import styles from "./Profile.module.css";
import { ProfileSidebar, SearchBar, Orders } from "../../components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


const Profile = () => {
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarProfile}>
        <ProfileSidebar />
      </div>
      <div className={styles.mainSection}>
        <div className={styles.topBar}>
          <p>Siparişlerim</p>
          <div className={styles.searchOrders}>
            <SearchBar />
          </div>
          <div className={styles.selectFilter}>
            <FormControl size="small" >
              <Select
              className={styles.selectInput}
                id="demo-simple-select"
                value={filter}
                onChange={handleChangeFilter}
                displayEmpty
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span>Tüm Siparişler</span>;
                  }
      
                  return selected;
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                   <MenuItem value="Tüm Siparişler">
            Tüm Siparişler
          </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={styles.orderTypes}>
          <Button variant="outlined" color="warning">Tümü</Button>
          <Button variant="outlined" className={styles.orderButtons}>Devam Eden Siparişler</Button>
          <Button variant="outlined" className={styles.orderButtons}>İadeler</Button>
          <Button variant="outlined" className={styles.orderButtons}>İptaller</Button>
          </div>
          <div className={styles.userOrders}>
            <Orders />
            <Orders />
            <Orders />
          </div>
      </div>
    </div>
  );
};

export default Profile;
