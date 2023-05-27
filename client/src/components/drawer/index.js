import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import navItems from "../../config/navItems.json"
import Link  from 'next/link';
const CustomDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Space>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      </Space>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
    <p>some contents</p>
      </Drawer>
    </>
  );
};
export default CustomDrawer;