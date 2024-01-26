import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Navbar/Layout";
import OrdersCard from "../../Components/Navbar/OrdersCard";
import { ShoppingCartContext } from '../../context'


function MyOrders() {
  const context = useContext( ShoppingCartContext)
    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80'>
              <h1>My Orders</h1>
          </div>
          
          {
            context.order.map((order, index) => {
              <Link key={index} to={`/my-orders/${order.id}`}>
                <OrdersCard 
                  totalPrice= {order.totalPrice} 
                  totalProducts= {order.totalProducts}
                />
              </Link>
              
            })      
          } 
        </Layout>
    )
  }
  
  export default MyOrders;