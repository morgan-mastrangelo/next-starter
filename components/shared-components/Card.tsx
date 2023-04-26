function Card(props: any) {
    return (
        <div className={"custom-card"} {...props}>
            {props.children}
        </div>
    )
}

export default Card;