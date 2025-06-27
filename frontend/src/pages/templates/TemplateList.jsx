

function TemplateList({ items }){
    return (<div>
        {!items || items.length === 0 ? (<NoItems />):<TemplateListItems items={items} />}
    </div>)
}
function TemplateListItems({items}){
    return (<div>
        {items.map((item,key) => <TemplateListItem key={key} item={item} />)}
    </div>)
}

function TemplateListItem({item}) {
    return (<div>
        item
    </div>)
}

function NoItems(props) {
    return (<div>No items</div>);
}