import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, decQuantity = Function.prototype, incQuantity = Function.prototype } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} decQuantity={decQuantity} incQuantity={incQuantity}/>
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">
            Общая стоимость: {totalPrice} руб.
        </li>
        <li className="collection-item active">
            <button className="btn btn-small">Оформить</button>
        </li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
      </ul>
}

export {BasketList}