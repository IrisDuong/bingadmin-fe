import { Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
type ButtonProps = {
    label?:string;
    onClick?: () => void;
}
export const BtnCreate = ({label,onClick}:ButtonProps) =>{
    return  <Button
                onClick={onClick}
                icon={<FaPlus/>}
                className="create"
            >
                {label || 'Tạo Mới'}
            </Button>
}

export const BtnPrint = ({label,onClick}:ButtonProps) =>{
    return  <Button
                onClick={onClick}
                icon={<MdPrint/>}
                className="print"
            >
                {label || 'In'}
            </Button>
}

export const BtnDelete = ({label,onClick}:ButtonProps) =>{
    return  <Button
                onClick={onClick}
                icon={<IoTrashBinSharp/>}
                className="delete"
            >
                {label || 'Xóa'}
            </Button>
}

export const BtnSearch = ({label}:ButtonProps) =>{
    return  <Button
                htmlType="submit"
                icon={<BiSearch/>}
                className="search"
            >
                {label || 'Tìm Kiếm'}
            </Button>
}