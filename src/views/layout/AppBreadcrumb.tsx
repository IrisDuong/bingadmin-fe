import { Breadcrumb } from "antd"
import { FaHome } from "react-icons/fa";
function AppBreadums() {
  return (
        <Breadcrumb
            items={[
                {
                    href:"",
                    title:<FaHome/>
                },
                {
                    href:"",
                    title:"Cài Đặt"
                },
                {
                    href:"/setting/refCdeGroup",
                    title:"Dữ Liệu Tham Chiếu"
                }
            ]}  
        ></Breadcrumb>
  )
}

export default AppBreadums