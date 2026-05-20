
import { useState } from "react";
import {Menu, ConfigProvider} from "antd";
import { AiOutlineStock } from "react-icons/ai";
import { MdPointOfSale , MdOutlinePeopleAlt} from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import type {MenuProps}  from "antd";
import {Link} from "react-router-dom";
type MenuItem = Required<MenuProps>['items'][number];
const items:MenuItem[] = [
  {
    key: 'sale',
    label: <div className="menu-label"><span className="menu-icon" ><MdPointOfSale/></span> <span>Bán Hàng</span></div>,
    icon: null,
  },
  {
    key: 'stock',
    label: <div className="menu-label"><span className="menu-icon" ><AiOutlineStock/></span> <span>Kho</span></div>,
    icon: null,
    children: [
       {
          key: 'product',
          label: <div className="menu-label"><span><Link to="/stock/product">Sản Phẩm</Link></span></div>,
        }
    ]
  },
  {
    key: 'hr',
    label: <div className="menu-label"><span className="menu-icon" ><MdOutlinePeopleAlt/></span> <span>Nhân Sự</span></div>,
    icon: null,
  },
  {
    key: 'setting',
    label: <div className="menu-label"><span className="menu-icon" ><IoSettings/></span> <span>Cài Đặt Chung</span></div>,
    icon: null,
    children: [
       {
          key: 'baseData',
          label: <div className="menu-label"><span><Link to="/setting/refCdeGroup">Dữ Liệu Tham Chiếu</Link></span></div>,
        },
       {
          key: 'permission',
          label: <div className="menu-label"><span>Quyền</span></div>,
        }
    ]
  },
]
function LeftMenu() {
  const [currentMenuKey,setCurrentMenuKey] = useState("stock")
  
  const handleClickMenuItem:MenuProps['onClick'] = e =>{
    setCurrentMenuKey(e.key)
  }
  return (
    <div id="left-menu">
      <ConfigProvider
        theme={{
          components:{
            Menu:{
              itemColor: "#000000",
              itemHoverBg: "#ecebe0",
              itemHoverColor: "#46432ee0",
              subMenuItemBg: "#ffffff",
              itemSelectedBg: "#ffffffe0",
              itemSelectedColor: "#24979b",
              lineWidth:0,
              itemPaddingInline: 0
            }
          }
        }}
      >
        <Menu
          onClick={handleClickMenuItem}
          selectedKeys={[currentMenuKey]}
          items={items}
          style={{ width: '100%' }}
          defaultOpenKeys={['stock','sale','hr','setting']}
          mode='inline'
        />
      </ConfigProvider>
    </div>
  )
}

export default LeftMenu