import { Link } from 'react-router-dom';
import useOrders from '../../Hooks/useOrders';
import emptyOrder from '../../assets/empty_order.svg'

const OrderList = () => {
    const [orders] = useOrders();

    console.log(orders.length);
    console.log(orders);

    return (
        <div className='mx-auto'>
            <h3 className='text-xl font-bold text-indigo-500 px-5 pt-5 text-center'>... Order list ...</h3>
            {
                orders.length == 0 ? <div className='w-full flex flex-col gap-3 items-center p-5'>
                    <img className='w-96 py-3' src={emptyOrder} alt="" />
                    <p className='text-rose-600 text-2xl font-semibold py-3 text-center'>You have not placed any order yet!</p>
                    <Link to="/" className='btn btn-primary py-3 text-white'>Order some medicine</Link>
                </div> :
                    <div className='w-full p-5'>
                        <h3 className='text-xl text-indigo-500 font-semibold lg:py-3 px-5'>You have {orders.length} orders</h3>
                        <div className=' flex flex-col gap-5 p-3'>
                            {
                                orders.map((order, idx) => <div className='border-2 border-indigo-500 p-3 rounded-md bg-slate-100'>
                                    <p className='font-semibold py-1 text-center'>Order no: <span className='text-rose-600 font-bold'>{idx + 1}</span></p>
                                    <p className='font-semibold py-1 text-center'>Customer name: <span className='text-rose-600 font-bold'>{order.name}</span></p>
                                    <p className='font-semibold py-1 text-center'>Phone number: <span className='text-rose-600 font-bold'>{order.phoneNumber}</span></p>
                                    <p className='font-semibold py-1 text-center'>Email: <span className='text-rose-600 font-bold'>{order.email}</span></p>
                                    <p className='font-semibold py-1 text-center'>Delivery address: <span className='text-rose-600 font-bold'>{order.address}</span></p>
                                    <p className='font-semibold py-1 text-center'>Item quantity: <span className='text-rose-600 font-bold'>{order.itemQuantity}</span></p>
                                    <p className='font-semibold py-1 text-center'>Total cost: <span className='text-rose-600 font-bold'>{order.cost}</span> tk</p>
                                    <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll lg:overflow-hidden rounded-lg p-6'>
                                        <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full lg:overflow-hidden overflow-scroll'>
                                            <table className='w-full min-w-max table-auto text-left'>
                                                <thead>
                                                    <tr className='bg-gray-800 text-white'>
                                                        <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>No.</th>
                                                        <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Image</th>
                                                        <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Name</th>
                                                        <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Quantity</th>
                                                        <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        order.items?.map((item, idx) => <tr key={item._id} className='hover:bg-slate-200'>
                                                            <td className='py-3 px-8 border-b border-blue-gray-50'>{idx + 1}</td>
                                                            <td className='py-3 px-8 border-b border-blue-gray-50'>
                                                                <img className='w-10' src={item.img} alt="" />
                                                            </td>
                                                            <td className='py-3 px-8 border-b border-blue-gray-50'>{item.title}</td>
                                                            <td className='py-3 px-8 border-b border-blue-gray-50 text-center'>{item.addedQuantity}</td>
                                                            <td className='py-3 px-8 border-b border-blue-gray-50 text-center'>{item.totalPrice} &#2547;</td>
                                                        </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default OrderList;