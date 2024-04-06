import CategoryItem from "./CategoryItem"

export default function CategoryList(props) {
    return (
        <div>
            {props.items.map((obj, index) => <CategoryItem key={index} Icon={obj.Icon} text={obj.text} href={obj.href} />)}
        </div>
    )
}