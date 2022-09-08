import { alimentList } from '../datas/alimentList.js'
import '../styles/ShoppingList.css'
import AlimentItem from "./AlimentItem"

function ShoppingList({cart, updateCart}) {

    const categories = alimentList.reduce(
		(acc, aliment) =>
			acc.includes(aliment.category) ? acc : acc.concat(aliment.category),
		[]
	)

    return (
        <div className='lmj-shoppin-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-aliment-list'>
				{alimentList.map(({id, cover, name, water, light}) => (
					<div key={id}>
					<AlimentItem cover= {cover} name={name} water={water} ligt={light}/>
					<button onClick= {() => updateCart(cart + 1)}> Ajouter </button>
                        {aliment.isSpecialOffer && <div className='lmj-sales'> Soldes </div>}
					</div>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList