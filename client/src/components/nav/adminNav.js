import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';
const AdminNav = () => {
  const router = useRouter();
  return (
    <>
      <div className='nav-admin'>
        <h1>Admin Panel</h1>
        <h4 onClick={()=>router.push('http://localhost:4000/products')}>View Product Details</h4>
      </div>
    </>
  )
}

export default AdminNav