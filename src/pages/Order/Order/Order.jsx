import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Cover img={orderImg} title="OUR SHOP"></Cover>
      {/* tab */}
      <div className="my-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>SALAD</TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
