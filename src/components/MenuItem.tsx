
interface MenuItemProps{
  link: string  
  title: string
}

const MenuItem: React.FC<MenuItemProps> = ({link, title}) => {
  return (
    <a href={link} className="block py-2 pl-3 pr-4 text-gray-700 hover:text-[#00719A]">{title}</a>
  )
}

export default MenuItem