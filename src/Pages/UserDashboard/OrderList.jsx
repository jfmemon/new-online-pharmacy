import useOrders from '../../Hooks/useOrders';

const OrderList = () => {
    const [orders] = useOrders();

    console.log(orders.length);

    return (
        <div>
            <h3>You placed {orders.length} orders</h3>
        </div>
    );
};

export default OrderList;