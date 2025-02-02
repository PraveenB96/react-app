import propTypes from 'prop-types';

function List(props){

    const category = props.category;
    const itemsList = props.items;
    
    const fruitNames = itemsList.map(item => <li key={item.id}>
                                            {item.name} : &nbsp;
                                            <b>{item.calories}</b>
                                            </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{fruitNames}</ol>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id:propTypes.number,
                                              name:propTypes.string,
                                              calories:propTypes.number}))
}

List.defaultProps = {
    category: 'Category',
    items: []
}

export default List;