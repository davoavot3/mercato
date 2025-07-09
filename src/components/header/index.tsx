import Link from "next/link";

const links = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Blog", link: "/blog" },
  { label: "Contact Us", link: "/contact-us" },
  { label: "Services", link: "/services" },
];

export default function Header() {
  
  
  return (
   
    <div className= "flex justify-center items-center gap-2 h-[50px]">
      {links.map(({label, link}) => <Link key={link} className="border p-1 rounded-md cursor-pointer hover:bg-blue-400" href={link}>
          {label}
      </Link>)}
      
      
   </div>
   
  );
}