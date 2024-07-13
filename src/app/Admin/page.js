import Link from "next/link"

const Admin = () => {
  return (
    <div>This is Admin page
        <p> 
            YOU ARE NOT ALLOWED HERE 
        </p>
        <Link href="/login"><h2> admin login</h2></Link>
    </div>
  )
}

export default Admin